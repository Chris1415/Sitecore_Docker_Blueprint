using Sitecore.AspNet.RenderingEngine.Binding.Attributes;
using Sitecore.LayoutService.Client.Response.Model.Fields;

namespace Blueprint.Feature.BasicContent.Models
{
    public class HeroBanner
    {
        [SitecoreComponentField]
        public TextField Title { get; set; }
        [SitecoreComponentField]
        public TextField Subtitle { get; set; }
        [SitecoreComponentField]
        public RichTextField Text { get; set; }
        [SitecoreComponentField]
        public HyperLinkField TargetLink { get; set; }
        [SitecoreComponentField]
        public ImageField Image { get; set; }
    }
}
