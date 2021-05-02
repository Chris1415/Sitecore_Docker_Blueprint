namespace Blueprint.Feature.BasicContent
{
    public struct Constants
    { 
        public struct Image
        {
            public struct RenderingVariants
            {
                public static string Identifier = "RenderingVariant";
                public struct Variants
                {
                    public static string Logo = "{03929629-B9E8-42E2-852B-A9DC21648A64}";
                    public static string Image = "{9614977D-95C7-4C0C-81B9-BB6279023864}";
                }
            }
        }

        public struct ImageList
        {
            public struct RenderingVariants
            {
                public static string Identifier = "RenderingVariant";
                public struct Variants
                {
                    public static string List = "{31DAD7F7-1DFE-42DF-B17F-255030F7EF88}";
                    public static string Slider = "{2CB68D7A-9EDE-4FFA-BBEB-EBEED36353EE}";
                }
            }
        }

        public struct Video
        {
            public static string Autoplay = "Autoplay";
            public static string AllowFullscreen = "Allow Fullscreen";
            public static string Muted = "Muted";
            public static string Height = "Height";
        }
    }
}
