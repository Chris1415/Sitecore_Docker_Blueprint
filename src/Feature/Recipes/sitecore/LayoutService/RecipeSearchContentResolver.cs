using Blueprint.Feature.Recipes.Models;
using Blueprint.Foundation.Recipes.Services;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.Mvc.Presentation;
using System.Collections.Generic;
using System.Linq;

namespace Blueprint.Feature.Recipes.LayoutService
{
    public class RecipeSearchContentResolver : RenderingContentsResolver
    {
        private readonly IRecipeSearchService _recipeSearchService;

        public RecipeSearchContentResolver()
        {
            _recipeSearchService = new RecipeSearchService();
        }

        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {

            var contextItem = GetContextItem(rendering, renderingConfig);

            var recipeResults = _recipeSearchService.SearchRecipes(new Foundation.Recipes.Models.Search.RecipeSearchParameters()
            {

            });

            return new RecipeSearchViewModel()
            {
                Headline = contextItem["Headline"],
                Recipes = recipeResults.Select(element => new RecipeViewModel()
                {
                    Id = element.Document.RecipeId,
                    Name = element.Document.RecipeName,
                    Description = element.Document.Description,
                    Image = element.Document.Image
                })
            };
        }
    }
}