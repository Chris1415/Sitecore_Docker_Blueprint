using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.AspNet.RenderingEngine.Binding.Attributes;

namespace Blueprint.Feature.Recipes.Models
{
    public class RecipeSearchViewModel
    {
        [SitecoreComponentField]
        public string Headline { get; set; }
        [SitecoreComponentField]
        public IEnumerable<RecipeViewModel> Recipes { get; set; }
    }
}