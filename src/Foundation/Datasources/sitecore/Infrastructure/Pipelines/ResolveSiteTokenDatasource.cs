using Blueprint.Foundation.SitecoreExtensions.Extensions;
using Sitecore.Configuration;
using Sitecore.Data;
using Sitecore.Pipelines.GetLookupSourceItems;
using System;

namespace Blueprint.Foundation.Datasources.Infrastructure.Pipelines
{

    public class ResolveSiteTokenDatasource
    {
        public void Process(GetLookupSourceItemsArgs args)
        {
            string pathWithTolen = args.Source;
            if (!pathWithTolen.ToLower().Contains(Constants.SiteIdentifier.ToLower()))
            {
                return;
            }

            var siteOfItem = args.Item.GetSite();
            string siteRoot = siteOfItem?.RootPath ?? string.Empty;
            if (string.IsNullOrEmpty(siteRoot))
            {
                return;
            }

            using (new DatabaseSwitcher(Factory.GetDatabase(siteOfItem.Database)))
            {
                string cleanedPath = pathWithTolen.Replace(Constants.SiteIdentifier, siteRoot);
                cleanedPath = cleanedPath.Replace("#", string.Empty);
                args.Source = cleanedPath;
            }
        }
    }
}