using Blueprint.Feture.Navigation.Models.Elements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blueprint.Feture.Navigation.Models
{
    public class NavigationModel
    {
        public IEnumerable<NavigationItem> NavigationItems { get; set; }
    }
}