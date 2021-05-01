using Sitecore.AspNet.RenderingEngine.Binding.Attributes;
using Sitecore.LayoutService.Client.Response.Model.Fields;

namespace Blueprint.Feature.BasicContent.Models
{
    public class ExternalVideo
    {
        [SitecoreComponentField]                                            
        public TextField VideoLink { get; set; }      
    }
}
