using Blueprint.Foundation.SitecoreExtensions.Extensions;
using Sitecore.Configuration;
using Sitecore.ContentSearch;
using Sitecore.ContentSearch.ComputedFields;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Links.UrlBuilders;
using Sitecore.Resources.Media;
using Sitecore.Sites;

namespace Blueprint.Foundation.Recipes.ComputedFields
{
    public class RecipeImageField : AbstractComputedIndexField
    {
        public override object ComputeFieldValue(IIndexable indexable)
        {
            Item currentItem = indexable as SitecoreIndexableItem;
            if (currentItem == null)
            {
                return null;
            }

            using (new SiteContextSwitcher(Factory.GetSite(currentItem.GetSite().Name)))
            {
                using (new DatabaseSwitcher(currentItem.Database))
                {
                    MediaItem mediaItem = ((ImageField)currentItem.Fields[Templates.Recipe.Fields.Image.ToString()])?.MediaItem;

                    var options = MediaUrlBuilderOptions.Empty;
                    options.MaxWidth = 320;
                    options.AlwaysIncludeServerUrl = true;

                    return mediaItem != null
                        ? HashingUtils.ProtectAssetUrl(MediaManager.GetMediaUrl(mediaItem, options))
                        : null;
                }
            }
        }
    }
}