using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Data.Managers;
using Sitecore.Web;
using System;

namespace Blueprint.Foundation.SitecoreExtensions.Extensions
{
    public static class ItemExtensions
    {
        public static SiteInfo GetSite(this Item item)
        {
            var siteInfoList = Sitecore.Configuration.Factory.GetSiteInfoList();
            foreach (SiteInfo siteInfo in siteInfoList)
            {
                if (string.IsNullOrEmpty(siteInfo.RootPath) || string.IsNullOrEmpty(siteInfo.StartItem))
                {
                    continue;
                }

                if (item.Paths.FullPath.Equals($"{siteInfo.RootPath}", StringComparison.InvariantCultureIgnoreCase))
                {
                    return siteInfo;
                }

                if (item.Paths.FullPath.StartsWith($"{siteInfo.RootPath}{siteInfo.StartItem}", StringComparison.InvariantCultureIgnoreCase)
                    || item.Paths.FullPath.Equals($"{siteInfo.RootPath}{siteInfo.StartItem}", StringComparison.InvariantCultureIgnoreCase))
                {
                    return siteInfo;
                }

                if (item.Paths.FullPath.StartsWith($"{siteInfo.RootPath}/{Constants.SharedContent}", StringComparison.InvariantCultureIgnoreCase)
                  || item.Paths.FullPath.Equals($"{siteInfo.RootPath}/{Constants.SharedContent}", StringComparison.InvariantCultureIgnoreCase))
                {
                    return siteInfo;
                }

                if (item.Name == "__Standard Values" && item.Paths.FullPath.ToLower().StartsWith(string.Concat("/sitecore/templates/project/", siteInfo.Name.ToLower(), "/")))
                {
                    return siteInfo;
                }
            }

            return null;
        }
    }
}