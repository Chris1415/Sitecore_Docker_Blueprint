using Sitecore.ContentSearch;
using Sitecore.ContentSearch.SearchTypes;
using System;
using System.Collections.Generic;

namespace Blueprint.Foundation.Recipes.Models.Search
{
    public class RecipeSearchResultItem : SearchResultItem
    {
        [IndexField("name")]
        public string RecipeName { get; set; }

        [IndexField("description")]
        public string Description { get; set; }

        [IndexField("image")]
        public string Image { get; set; }

        [IndexField("preparationtime")]
        public string PreparationTime { get; set; }

        [IndexField("cooktime")]
        public string Cooktime { get; set; }
    }
}