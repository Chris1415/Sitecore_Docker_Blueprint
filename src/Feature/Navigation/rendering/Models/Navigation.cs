using Blueprint.Feature.Navigation.Models;
using Sitecore.AspNet.RenderingEngine.Binding.Attributes;

namespace Blueprint.Feature.Navigation.Models
{
    public class Navigation
    {
        [SitecoreComponentField]
        public NavigationItem[] NavigationItems { get; set; }
    }
}
