using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data;

namespace Blueprint.Feature.Navigation
{
    public static class Templates
    {
        public static class Navigation
        {
            public static readonly ID Id = new ID("{884A6DF8-BB4A-42D2-882A-97D05A82041D}");
            public static class Fields
            {
                public static readonly ID Root = new ID("{CA81347C-E361-4B3A-A329-BFCC2F8D5EA3}");
                public static readonly ID Depth = new ID("{F7035E32-7E40-4077-9421-E6AE9F02F532}");
            }
        }

        public static class PageNavigation
        {
            public static readonly ID Id = new ID("{0B4A2991-51BC-4CAF-81F2-B18E574B5797}");
            public static class Fields
            {
                public static readonly ID NavigationTitle = new ID("{41AFF118-A0A7-43A5-84F2-EBF4C9B2643E}");
                public static readonly ID ShowBreadcrumb = new ID("{A4B45E88-4E24-4683-855A-C1D871ABB69D}");

            }

        }  
    }
}