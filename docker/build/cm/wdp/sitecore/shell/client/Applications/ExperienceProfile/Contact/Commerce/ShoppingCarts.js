define(["sitecore", "/-/speak/v1/experienceprofile/DataProviderHelper.js"], function (sc, providerHelper)
{
    var intelPath = "/intel";

    var app = sc.Definitions.App.extend({
    initialized: function ()
    {
        this.loadCartRemovals();
        this.loadCartAdditions();
        this.loadCartUpdates();
    },

    loadCartRemovals: function () {
        var cartRemovalsTable = "cart-removals";

        providerHelper.setupHeaders([
          { urlKey: intelPath + "/" + cartRemovalsTable + "?", headerValue: cartRemovalsTable },
        ]);

        var intelBaseUrl = sc.Contact.baseUrl + intelPath + "/";

        providerHelper.initProvider(this.CartRemovalsDataProvider, cartRemovalsTable, intelBaseUrl + cartRemovalsTable, this.CartRemovalsTabMessageBar);
        providerHelper.subscribeSorting(this.CartRemovalsDataProvider, this.CartRemovalsList);
        providerHelper.setDefaultSorting(this.CartRemovalsDataProvider, "Date", true);
        providerHelper.getListData(this.CartRemovalsDataProvider);

        providerHelper.subscribeAccordionHeader(this.CartRemovalsDataProvider, this.CartRemovalsAccordion);
    },

    loadCartAdditions: function () {
        var cartAdditionsTable = "cart-additions";

        providerHelper.setupHeaders([
          { urlKey: intelPath + "/" + cartAdditionsTable + "?", headerValue: cartAdditionsTable },
        ]);

        var intelBaseUrl = sc.Contact.baseUrl + intelPath + "/";

        providerHelper.initProvider(this.CartAdditionsDataProvider, cartAdditionsTable, intelBaseUrl + cartAdditionsTable, this.CartRemovalsTabMessageBar);
        providerHelper.subscribeSorting(this.CartAdditionsDataProvider, this.CartAdditionsList);
        providerHelper.setDefaultSorting(this.CartAdditionsDataProvider, "Date", true);
        providerHelper.getListData(this.CartAdditionsDataProvider);

        providerHelper.subscribeAccordionHeader(this.CartAdditionsDataProvider, this.CartAdditionsAccordion);
    },

    loadCartUpdates: function () {
        var cartTable = "cart-updates";

        providerHelper.setupHeaders([
          { urlKey: intelPath + "/" + cartTable + "?", headerValue: cartTable },
        ]);

        var intelBaseUrl = sc.Contact.baseUrl + intelPath + "/";

        providerHelper.initProvider(this.CartUpdatesDataProvider, cartTable, intelBaseUrl + cartTable, this.CartRemovalsTabMessageBar);
        providerHelper.subscribeSorting(this.CartUpdatesDataProvider, this.CartUpdatesList);
        providerHelper.setDefaultSorting(this.CartUpdatesDataProvider, "Date", true);
        providerHelper.getListData(this.CartUpdatesDataProvider);

        providerHelper.subscribeAccordionHeader(this.CartUpdatesDataProvider, this.CartUpdatesAccordion);
    },
    });
  return app;
});