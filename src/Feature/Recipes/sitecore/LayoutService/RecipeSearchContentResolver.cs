using System.Linq;
using Blueprint.Foundation.Recipes.Services;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.Mvc.Presentation;

namespace Blueprint.Feature.Recipes.LayoutService
{
    public class RecipeSearchContentResolver : RenderingContentsResolver
    {
        private readonly IRecipeSearchService _recipeSearchService;

        public RecipeSearchContentResolver(IRecipeSearchService recipeSearchService)
        {
            _recipeSearchService = recipeSearchService;
        }

        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            var contextItem = GetContextItem(rendering, renderingConfig);

            var result = _recipeSearchService.SearchRecipes(new Blueprint.Foundation.Recipes.Models.Search.RecipeSearchParameters()
            {
                   
            });

            return result.Select(element => element.Document);
        }
    }
}