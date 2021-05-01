using System;
using System.Collections.Generic;
using Blueprint.Feature.Navigation.Models.Elements.Base;

namespace Blueprint.Feature.Navigation.Models.Elements
{
    public class NavigationItem : BaseNavigationItem
    {
        public IEnumerable<NavigationItem> Children { get; set; }

        public NavigationItem()
        {
            Children = new List<NavigationItem>();
        }
    }
}