using Blueprint.Feture.Navigation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.Data.Items;

namespace Blueprint.Feture.Navigation.Services
{
    public interface INavigationService
    {
        NavigationModel GetNavigation(Item root, int depth);
    }
}
