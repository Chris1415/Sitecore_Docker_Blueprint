using Sitecore.AspNet.RenderingEngine.Binding.Attributes;
using Sitecore.LayoutService.Client.Response.Model.Fields;
using System;
using System.Collections.Generic;
using System.Text;

namespace Blueprint.Feature.BasicContent.Models
{
    public class LegalInformation
    {
        [SitecoreComponentField]
        public TextField LegalText { get; set; }
        public string Copyright => "©";
        public string CurrentYear => DateTime.Now.Year.ToString();
    }
}
