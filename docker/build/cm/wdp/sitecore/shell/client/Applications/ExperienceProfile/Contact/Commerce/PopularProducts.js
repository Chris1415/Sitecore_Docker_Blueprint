define(["sitecore", "/-/speak/v1/experienceprofile/DataProviderHelper.js"], function (sc, providerHelper)
{
  var app = sc.Definitions.App.extend({
    initialized: function ()
    {
        this.loadPopularProductsByView();
        this.loadPopularProductsByAdditions();
        this.loadPopularProductsByPurchase();
    },

    loadPopularProductsByView: function () {
        var intelPath = "/intel";
        var popularProductsByViewTable = "popularproducts-byview";

        providerHelper.setupHeaders([
          { urlKey: intelPath + "/" + popularProductsByViewTable + "?", headerValue: popularProductsByViewTable },
        ]);

        var intelBaseUrl = sc.Contact.baseUrl + intelPath + "/";

        providerHelper.initProvider(this.PopularProductsByViewDataProvider, popularProductsByViewTable, intelBaseUrl + popularProductsByViewTable, this.PopularProductsTabMessageBar);
        providerHelper.subscribeSorting(this.PopularProductsByViewDataProvider, this.PopularProductsByViewList);
        providerHelper.setDefaultSorting(this.PopularProductsByViewDataProvider, "Count", true);
        providerHelper.getListData(this.PopularProductsByViewDataProvider);

        providerHelper.subscribeAccordionHeader(this.PopularProductsByViewDataProvider, this.PopularProductsByViewAccordion);
    },

    loadPopularProductsByAdditions: function () {
        var intelPath = "/intel";
        var popularProductsByAdditionsTable = "popularproducts-byadditions";

        providerHelper.setupHeaders([
          { urlKey: intelPath + "/" + popularProductsByAdditionsTable + "?", headerValue: popularProductsByAdditionsTable },
        ]);

        var intelBaseUrl = sc.Contact.baseUrl + intelPath + "/";

        providerHelper.initProvider(this.PopularProductsByAdditionsDataProvider, popularProductsByAdditionsTable, intelBaseUrl + popularProductsByAdditionsTable, this.PopularProductsTabMessageBar);
        providerHelper.subscribeSorting(this.PopularProductsByAdditionsDataProvider, this.PopularProductsByAdditionsList);
        providerHelper.setDefaultSorting(this.PopularProductsByAdditionsDataProvider, "Count", true);
        providerHelper.getListData(this.PopularProductsByAdditionsDataProvider);

        providerHelper.subscribeAccordionHeader(this.PopularProductsByAdditionsDataProvider, this.PopularProductsByAdditionsAccordion);
    },

    loadPopularProductsByPurchase: function () {
        var intelPath = "/intel";
        var popularProductsByPurchaseTable = "popularproducts-bypurchase";

        providerHelper.setupHeaders([
          { urlKey: intelPath + "/" + popularProductsByPurchaseTable + "?", headerValue: popularProductsByPurchaseTable },
        ]);

        var intelBaseUrl = sc.Contact.baseUrl + intelPath + "/";

        providerHelper.initProvider(this.PopularProductsByPurchaseDataProvider, popularProductsByPurchaseTable, intelBaseUrl + popularProductsByPurchaseTable, this.PopularProductsTabMessageBar);
        providerHelper.subscribeSorting(this.PopularProductsByPurchaseDataProvider, this.PopularProductsByPurchaseList);
        providerHelper.setDefaultSorting(this.PopularProductsByPurchaseDataProvider, "Count", true);
        providerHelper.getListData(this.PopularProductsByPurchaseDataProvider);

        providerHelper.subscribeAccordionHeader(this.PopularProductsByPurchaseDataProvider, this.PopularProductsByPurchaseAccordion);
    },

  });
  return app;
});