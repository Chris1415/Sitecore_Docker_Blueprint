using Blueprint.Feature.Navigation;
using Blueprint.Feature.Navigation.Services;
using Blueprint.Foundation.SitecoreExtensions.Extensions;
using Sitecore.Data.Fields;
using Sitecore.LayoutService.Configuration;
using Sitecore.Mvc.Presentation;
using System;
using System.Diagnostics;
using System.Linq;

namespace Blueprint.Feature.Navigation.LayoutService
{
    public class BreadcrumbContentResolver : Sitecore.LayoutService.ItemRendering.ContentsResolvers.RenderingContentsResolver
    {
        protected readonly INavigationService _navigationService;

        public BreadcrumbContentResolver(INavigationService navigationService)
        {
            Debug.Assert(navigationService != null);
            _navigationService = navigationService;
        }

        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            var contextItem = Sitecore.Context.Item;
            bool showBreadcrumb = contextItem.GetCheckboxFieldValue(Templates.PageNavigation.Fields.ShowBreadcrumb.ToString());
            var navigation = showBreadcrumb 
                ? _navigationService.GetBreadcrumb(contextItem)
                : null;
            var contents = new
            {
                NavigationItems = navigation?.NavigationItems?.Select(x => new
                {
                    url = x.Url,
                    isActive = x.IsActive,
                    title = x.Title
                })
            };
            return contents;
        }
    }
}