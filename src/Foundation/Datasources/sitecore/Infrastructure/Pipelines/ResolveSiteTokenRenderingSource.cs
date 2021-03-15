using Blueprint.Foundation.SitecoreExtensions.Extensions;
using Sitecore.Data.Items;
using Sitecore.Pipelines.GetRenderingDatasource;
using Sitecore.Text;
using System;

namespace Blueprint.Foundation.Datasources.Infrastructure.Pipelines
{
    public class ResolveSiteTokenRenderingSource
    {
        /// <summary>
        /// The process.
        /// </summary>
        /// <param name="args">
        /// The args.
        /// </param>
        public void Process(GetRenderingDatasourceArgs args)
        {
            if (args == null)
            {
                return;
            }

            foreach (string location in new ListString(
                args.RenderingItem[Constants.DataSourceLocationIndexer]))
            {
                string path = location;

                if (!location.StartsWith(Constants.SiteIdentifier,
                   StringComparison.InvariantCultureIgnoreCase)
                    || string.IsNullOrEmpty(args.ContextItemPath))
                {
                    continue;
                }

                Item contextItem = args.ContentDatabase.GetItem(args.ContextItemPath);
                if (contextItem == null)
                {
                    continue;
                }

                var siteOfItem = contextItem.GetSite();
                string siteRoot = siteOfItem?.RootPath ?? string.Empty;
                if (string.IsNullOrEmpty(siteRoot))
                {
                    return;
                }

                string cleanedPath = path.ToLower().Replace(Constants.SiteIdentifier.ToLower(), siteRoot);
                Item datasourceItem = args.ContentDatabase.GetItem(cleanedPath);
                if (datasourceItem == null)
                {
                    continue;
                }

                args.DatasourceRoots.Insert(0, datasourceItem);
            }
        }
    }
}