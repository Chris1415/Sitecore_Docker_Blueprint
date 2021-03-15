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
    }
}
