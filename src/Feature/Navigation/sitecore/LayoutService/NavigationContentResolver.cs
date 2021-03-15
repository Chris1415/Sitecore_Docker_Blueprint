﻿using Blueprint.Feature.Navigation;
using Blueprint.Feature.Navigation.Services;
using Sitecore.Data.Fields;
using Sitecore.LayoutService.Configuration;
using Sitecore.Mvc.Presentation;
using System;
using System.Diagnostics;
using System.Linq;

namespace Blueprint.Feature.Navigation.LayoutService
{
    public class NavigationContentResolver : Sitecore.LayoutService.ItemRendering.ContentsResolvers.RenderingContentsResolver
    {
        private const int DefaultDepth = 2;
        protected readonly INavigationService _navigationService;

        public NavigationContentResolver(INavigationService navigationService)
        {
            Debug.Assert(navigationService != null);
            _navigationService = navigationService;
        }

        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            var contextItem = this.GetContextItem(rendering, renderingConfig);
            var rootItem = ((LookupField)contextItem.Fields[Templates.Navigation.Fields.Root])?.TargetItem;
            int depth = DefaultDepth;
            if (int.TryParse(contextItem[Templates.Navigation.Fields.Depth], out int mappedDepth))
            {
                depth = mappedDepth;
            }

            var navigation = _navigationService.GetNavigation(rootItem, depth);
            var contents = new
            {
                NavigationItems = navigation.NavigationItems.Select(x => new
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