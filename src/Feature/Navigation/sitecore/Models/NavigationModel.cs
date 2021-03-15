using Blueprint.Feature.Navigation.Models.Elements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blueprint.Feature.Navigation.Models
{
    public class NavigationModel
    {
        public IList<NavigationItem> NavigationItems { get; set; }

        public NavigationModel()
        {
            NavigationItems = new List<NavigationItem>();
        }
    }
}