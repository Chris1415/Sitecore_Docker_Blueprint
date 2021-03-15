using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data.Items;

namespace Blueprint.Feture.Navigation.Models.Elements
{
    public class NavigationItem
    {
        public Item Item { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
        public IEnumerable<NavigationItem> Children { get; set; }
    }
}