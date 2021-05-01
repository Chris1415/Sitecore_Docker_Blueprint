using Sitecore.Data.Items;

namespace Blueprint.Feature.Navigation.Models.Elements.Base
{
    public class BaseNavigationItem
    {
        public Item Item { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
    }
}