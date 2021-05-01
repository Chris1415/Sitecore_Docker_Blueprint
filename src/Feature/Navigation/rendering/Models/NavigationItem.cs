using System.Collections.Generic;

namespace Blueprint.Feature.Navigation.Models
{
    public class NavigationItem
    {
        public string Title { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
        public IList<NavigationItem> Children { get; set; }

        public NavigationItem()
        {
            Children = new List<NavigationItem>();
        }
    }
}
