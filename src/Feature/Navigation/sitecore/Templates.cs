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
            public static readonly ID Id = new ID("{082010EB-23DE-42B3-B443-A8FA79AD92C2}");
            public static class Fields
            {
                public static readonly ID NavigationTitle = new ID("{0D468B5A-63B0-4FE0-A8C8-BAA1FE6F2319}");
               
            }

        }  
    }
}