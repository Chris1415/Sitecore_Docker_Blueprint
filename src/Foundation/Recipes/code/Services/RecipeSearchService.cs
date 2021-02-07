using Blueprint.Foundation.Recipes.Models.Search;
using Sitecore;
using Sitecore.ContentSearch;
using Sitecore.ContentSearch.Linq;
using Sitecore.ContentSearch.Linq.Utilities;
using Sitecore.Diagnostics;
using Sitecore.Globalization;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Blueprint.Foundation.Recipes.Services
{
    public class RecipeSearchService : IRecipeSearchService
    {
        public SearchResults<RecipeSearchResultItem> SearchRecipes(RecipeSearchParameters parameters)
        {
            try
            {
                ISearchIndex index = ContentSearchManager.GetIndex(string.Format(Constants.Search.IndexName, Context.Database.Name));
                using (IProviderSearchContext context = index.CreateSearchContext())
                {
                    IQueryable<RecipeSearchResultItem> results = context.GetQueryable<RecipeSearchResultItem>();

                    // Language Filter
                    Language language = parameters.Language ?? Context.Language;
                    results = results.Where(r => r.Language.Equals(language.Name));

                    // Last Version Filter
                    results = results.Where(r => r[BuiltinFields.LatestVersion].Equals("1"));

                    // Full Text Search
                    string query = parameters.Query;
                    if (!string.IsNullOrEmpty(query))
                    {
                        var fullTextSearchPredicate = PredicateBuilder.True<RecipeSearchResultItem>()
                          .Or(r => r.Name.Equals(query).Boost(15f))
                          .Or(r => r.RecipeName.Contains(query).Boost(10f))
                          .Or(r => r.Description.Contains(query).Boost(5f));
                         

                        results = results.Where(fullTextSearchPredicate);
                    }

                    // Pagination
                    int skip = parameters.Skip;
                    int take = parameters.Take;
                    if (skip >= 0 || take > 0)
                    {
                        results = results.Skip(skip).Take(take);
                    }
                    return results.GetResults();
                }
            }
            catch (Exception ex)
            {
                Log.Error("Error when executing RecipeSearchService.SearchRecipes", ex, this);
                return new SearchResults<RecipeSearchResultItem>(new List<SearchHit<RecipeSearchResultItem>>(), 0, new FacetResults());
            }
        }
    }
}