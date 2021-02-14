using Sitecore.ContentSearch;
using Sitecore.ContentSearch.SearchTypes;
using System;
using System.Collections.Generic;

namespace Blueprint.Foundation.Recipes.Models.Search
{
    public class RecipeSearchResultItem : SearchResultItem
    {
        [IndexField("recipe_name")]
        public string RecipeName { get; set; }

        [IndexField("recipe_id")]
        public string RecipeId { get; set; }

        [IndexField("description")]
        public string Description { get; set; }

        [IndexField("image")]
        public string Image { get; set; }
    }
}