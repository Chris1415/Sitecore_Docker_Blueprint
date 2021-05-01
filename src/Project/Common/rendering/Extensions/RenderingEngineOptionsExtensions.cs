using Sitecore.AspNet.RenderingEngine.Configuration;
using Sitecore.AspNet.RenderingEngine.Extensions;

namespace Blueprint.Project.Common.Extensions
{
    public static class RenderingEngineOptionsExtensions
    {
        public static RenderingEngineOptions AddProjectCommon(this RenderingEngineOptions options)
        {
            options
                .AddPartialView("Container", "_container")
                .AddPartialView("Grid_12", "_grid12")
                .AddPartialView("Grid_9", "_grid9")
                .AddPartialView("Grid_6", "_grid6")
                .AddPartialView("Grid_3", "_grid3")
                .AddPartialView("Grid_9_3", "_grid9_3");
            return options;
        }
    }
}
