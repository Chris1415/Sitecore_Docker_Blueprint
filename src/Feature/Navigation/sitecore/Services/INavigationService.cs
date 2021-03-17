using Blueprint.Feature.Navigation.Models;
using Sitecore.Data.Items;

namespace Blueprint.Feature.Navigation.Services
{
    public interface INavigationService
    {
        NavigationModel GetNavigation(Item root, int depth);
        NavigationModel GetBreadcrumb(Item root);
    }
}
