using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blueprint.Foundation.SitecoreExtensions.Extensions
{
    public static class RenderingParameterExtensions
    {
        public static T GetRenderingParameterValue<T>(this Dictionary<string, string> input, string key, T defaultValue)
        {
            if (!input.TryGetValue(key, out string rawValue))
            {
                rawValue = string.Empty;
            }

            if (string.IsNullOrEmpty(rawValue))
            {
                return (T)(object)defaultValue;
            }

            switch (Type.GetTypeCode(typeof(T)))
            {
                case TypeCode.Boolean:
                    return (T)(object)(rawValue == Constants.BasicTypes.TrueString);
                case TypeCode.String:
                default:
                    return (T)(object)rawValue;
            }
        }
    }
}