using Sitecore.Data.Items;
using Sitecore.Globalization;
using Sitecore.Pipelines.GetRenderingDatasource;
using Sitecore.SecurityModel;
using Sitecore.Sites;
using Sitecore.Text;
using System;

namespace Blueprint.Foundation.Datasources.Infrastructure.Pipelines
{
    public class EnsureAndResolveDataFolder
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

                if (location.StartsWith(Constants.LocationIdentifier,
                        StringComparison.InvariantCulture)
                    && !string.IsNullOrEmpty(args.ContextItemPath))
                {
                    path = args.ContextItemPath + location.Remove(0, 1);
                }

                Item obj = args.ContentDatabase.GetItem(path);

                if (obj != null)
                {
                    args.DatasourceRoots.Add(obj);
                    continue;
                }

                if (location.ToLower() !=
                    Constants.DataFolderLocation)
                {
                    continue;
                }


                Item contentFolder = CreateContentFolder(args.ContentDatabase.GetItem(args.ContextItemPath));

                if (contentFolder == null)
                {
                    continue;
                }

                // Create Content Folder in defaul "en" as well in "de-DE"
                using (new LanguageSwitcher("de-DE"))
                {
                    var langSpecificContentFolder = args.ContentDatabase.GetItem(contentFolder.ID);
                    if (langSpecificContentFolder != null && langSpecificContentFolder.Versions.Count < 1)
                    {
                        langSpecificContentFolder.Versions.AddVersion();
                    }
                }

                args.DatasourceRoots.Insert(0, contentFolder);

            }
        }

        /// <summary>
        /// Creates programmatically a content folder
        /// </summary>
        /// <param name="contextItem">
        /// The context item.
        /// </param>
        /// <returns>
        /// The <see cref="Item"/>.
        /// </returns>
        protected Item CreateContentFolder(Item contextItem)
        {
            if (contextItem == null)
            {
                return null;
            }

            using (new SecurityDisabler())
            {
                ////if we create an item in the current site context, 
                //// the WebEditRibbonForm will see an ItemSaved event and think it needs to reload the page
                using (new SiteContextSwitcher(SiteContextFactory.GetSiteContext(Constants.SiteContext)))
                {
                    TemplateItem folderTemplate = contextItem.Database.GetTemplate(Sitecore.TemplateIDs.Folder);
                    return contextItem.Add(Constants.DataFolderName, folderTemplate);
                }
            }
        }
    }
}