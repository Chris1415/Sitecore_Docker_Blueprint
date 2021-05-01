using Sitecore.AspNet.RenderingEngine.Binding.Attributes;
using Sitecore.LayoutService.Client.Response.Model.Fields;

namespace Blueprint.Feature.BasicContent.Models
{
    public class ImageList
    {
        [SitecoreComponentField]
        public TextField Headline { get; set; }
        [SitecoreComponentField]
        public ContentListField<Image> Images { get; set; }
    }
}
