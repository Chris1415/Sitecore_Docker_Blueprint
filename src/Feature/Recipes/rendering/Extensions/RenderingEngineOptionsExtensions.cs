using Blueprint.Feature.Recipes.Models;
using Sitecore.AspNet.RenderingEngine.Configuration;
using Sitecore.AspNet.RenderingEngine.Extensions;

namespace Blueprint.Feature.Recipes.Extensions
{
    public static class RenderingEngineOptionsExtensions
    {
        public static RenderingEngineOptions AddFeatureRecipes(this RenderingEngineOptions options)
        {
            options.AddModelBoundView<RecipeSearch>("RecipeSearch");

            return options;
        }
    }
}