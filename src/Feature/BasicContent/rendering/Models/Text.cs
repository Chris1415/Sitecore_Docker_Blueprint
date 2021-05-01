using Sitecore.AspNet.RenderingEngine.Binding.Attributes;
using Sitecore.LayoutService.Client.Response.Model.Fields;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Blueprint.Feature.BasicContent.Models
{
    public class Text
    {
        [SitecoreComponentField]
        public RichTextField RichText { get; set; }    
    }
}
