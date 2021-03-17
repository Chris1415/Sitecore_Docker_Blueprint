using Blueprint.Feature.Navigation.Models;
using Blueprint.Feature.Navigation.Models.Elements;
using Blueprint.Foundation.SitecoreExtensions.Extensions;
using Sitecore.Data.Items;
using Sitecore.Links;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blueprint.Feature.Navigation.Services
{
    public class NavigationService : INavigationService
    {
        public NavigationModel GetNavigation(Item root, int depth)
        {
            var navigationModel = new NavigationModel();
            if (root == null)
            {
                return navigationModel;
            }

            var contextItem = Sitecore.Context.Item;
            var navigationItems = GetRecurseNavigationItems(root, contextItem, depth);
            navigationModel.NavigationItems = navigationItems;
            return navigationModel;
        }

        private IList<NavigationItem> GetRecurseNavigationItems(Item root, Item contextItem, int depth)
        {
            if (depth < 0)
            {
                return new List<NavigationItem>();
            }

            IList<NavigationItem> navigationItems = new List<NavigationItem>();
            foreach (Item child in root.Children)
            {
                if (!child.DescendsFrom(Templates.PageNavigation.Id))
                {
                    continue;
                }

                if (child.Versions.Count == 0)
                {
                    continue;
                }

                string navigationTitle = child[Templates.PageNavigation.Fields.NavigationTitle];
                var navigationItem = new NavigationItem()
                {
                    Children = GetRecurseNavigationItems(child, contextItem, depth - 1),
                    IsActive = contextItem.ID.Equals(child.ID),
                    Item = child,
                    Url = LinkManager.GetItemUrl(child),
                    Title = !string.IsNullOrEmpty(navigationTitle)
                       ? navigationTitle
                       : child.DisplayName
                };

                navigationItems.Add(navigationItem);
            }

            return navigationItems;
        }

        public NavigationModel GetBreadcrumb(Item root)
        {
            var contextItem = Sitecore.Context.Item;
            var siteContext = Sitecore.Context.Site;
            var rootItem = Sitecore.Context.Database.GetItem(siteContext.RootPath);

            var navigationModel = new NavigationModel();
            while (root != null && !root.ID.Equals(rootItem.ID))
            {
                string navigationTitle = root[Templates.PageNavigation.Fields.NavigationTitle];
                bool isActive = contextItem.ID.Equals(root.ID);
                var navigationItem = new NavigationItem()
                {
                    Children = new List<NavigationItem>(),
                    IsActive = isActive,
                    Item = root,
                    Url = !isActive ? LinkManager.GetItemUrl(root) : string.Empty,
                    Title = !string.IsNullOrEmpty(navigationTitle)
                       ? navigationTitle
                       : root.DisplayName
                };
                navigationModel.NavigationItems.Add(navigationItem);
                root = root.Parent;
            }

            navigationModel.NavigationItems = navigationModel.NavigationItems.Reverse().ToList();
            return navigationModel;
        }
    }
}
