using System;
using Sitecore.XConnect;

namespace Blueprint.Feature.Demo.XConnect.Model
{
    [Serializable]
    [FacetKey(DefaultFacetKey)]
    public class DemoFacet : Sitecore.XConnect.Facet
    {
        public const string DefaultFacetKey = "DemoFacet";

        public string FavoriteAnimal { get; set; }
    }
}
