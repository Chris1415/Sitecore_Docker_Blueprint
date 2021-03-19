using Sitecore.AspNet.RenderingEngine.Binding.Attributes;
using Sitecore.LayoutService.Client.Response.Model.Fields;

namespace Blueprint.Feature.BasicContent.Models
{
    public class Image
    {
        [SitecoreComponentField]
        public ImageField ImageField { get; set; }
        [SitecoreComponentField]
        public TextField Caption { get; set; }
    }
}
