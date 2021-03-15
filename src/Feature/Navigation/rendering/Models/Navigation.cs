using Blueprint.Feature.Navigation.Models;
using Sitecore.AspNet.RenderingEngine.Binding.Attributes;
using System.Collections.Generic;

namespace Blueprint.Feature.Navigation.Models
{
    public class Navigation
    {
        [SitecoreComponentField]
        public IList<NavigationItem> NavigationItems { get; set; }
    }
}
