using Sitecore.Globalization;

namespace Blueprint.Foundation.Recipes.Models.Search
{
    public class RecipeSearchParameters
    {
        public string Query { get; set; }
        public int Skip { get; set; }
        public int Take { get; set; }
        public Language Language { get; set; }
    }
}