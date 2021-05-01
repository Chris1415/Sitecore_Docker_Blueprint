using Blueprint.Feature.BasicContent.Models;
using Sitecore.AspNet.RenderingEngine.Configuration;
using Sitecore.AspNet.RenderingEngine.Extensions;

namespace Blueprint.Feature.BasicContent.Extensions
{
    public static class RenderingEngineOptionsExtensions
    {
        public static RenderingEngineOptions AddFeatureBasicContent(this RenderingEngineOptions options)
        {
            options
                .AddModelBoundView<Image>("Image")
                .AddModelBoundView<LegalInformation>("Legal Information")
                .AddModelBoundView<HeroBanner>("Hero Banner")
                .AddModelBoundView<ExternalVideo>("ExternalVideo")
                .AddModelBoundView<Text>("Text")
                .AddModelBoundView<ImageList>("ImageList");
            return options;
        }
    }
}
