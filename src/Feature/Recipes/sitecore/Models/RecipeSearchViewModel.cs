using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blueprint.Feature.Recipes.Models
{
    public class RecipeSearchViewModel
    {
        public string Headline { get; set; }
        public IEnumerable<RecipeViewModel> Recipes { get; set; }
    }
}