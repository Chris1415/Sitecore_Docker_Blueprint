using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blueprint.Foundation.Recipes
{
    public struct Templates
    {
        public struct Recipe
        {
            public static readonly ID ID = new ID("{3F205EA0-C23E-461D-A456-1AF8101A0D8D}");
            public struct Fields
            {
                public static readonly ID Name = new ID("{BDB92FD0-6DD4-4494-8B93-BBAED43043EE}");
                public static readonly ID Description = new ID("{BDB92FD0-6DD4-4494-8B93-BBAED43043EE}");
                public static readonly ID Image = new ID("{D7AD7064-B33C-446C-8952-20DBC5918A31}");
            }
        }
    }
}