using Sitecore.LayoutService.Client.Response.Model.Fields;

namespace Blueprint.Feature.BasicContent.Models
{
    public class HeroBanner
    {
        public TextField Title { get; set; }
        public TextField Subtitle { get; set; }
        public ImageField Image { get; set; }
    }
}
