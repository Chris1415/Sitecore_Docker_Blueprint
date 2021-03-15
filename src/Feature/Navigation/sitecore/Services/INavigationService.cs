using Blueprint.Feature.Navigation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.Data.Items;

namespace Blueprint.Feature.Navigation.Services
{
    public interface INavigationService
    {
        NavigationModel GetNavigation(Item root, int depth);
    }
}
