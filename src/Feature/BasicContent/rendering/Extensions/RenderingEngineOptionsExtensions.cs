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
                .AddModelBoundView<LegalInformation>("Legal Information")
                .AddModelBoundView<HeroBanner>("Hero Banner");
            return options;
        }
    }
}
