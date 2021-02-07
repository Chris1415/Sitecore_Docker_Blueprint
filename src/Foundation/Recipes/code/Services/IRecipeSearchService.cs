using Blueprint.Foundation.Recipes.Models.Search;
using Sitecore.ContentSearch.Linq;

namespace Blueprint.Foundation.Recipes.Services
{
    public interface IRecipeSearchService
    {
        SearchResults<RecipeSearchResultItem> SearchRecipes(RecipeSearchParameters parameters);
    }
}
