define(["sitecore", "/-/speak/v1/experienceprofile/DataProviderHelper.js"], function (sc, providerHelper)
{
  var app = sc.Definitions.App.extend({
    initialized: function ()
    {
      var intelPath = "/intel";
      var abandonedCartsTable = "abandoned-carts";

      providerHelper.setupHeaders([
        { urlKey: intelPath + "/" + abandonedCartsTable + "?", headerValue: abandonedCartsTable },
      ]);

      var intelBaseUrl = sc.Contact.baseUrl + intelPath + "/";

      providerHelper.initProvider(this.AbandonedCartsDataProvider, abandonedCartsTable, intelBaseUrl + abandonedCartsTable, this.AbandonedCartsTabMessageBar);
      providerHelper.subscribeSorting(this.AbandonedCartsDataProvider, this.AbandonedCartsList);
      providerHelper.setDefaultSorting(this.AbandonedCartsDataProvider, "Date", true);
      providerHelper.getListData(this.AbandonedCartsDataProvider);

      providerHelper.subscribeAccordionHeader(this.AbandonedCartsDataProvider, this.AbandonedCartsAccordion);

      sc.Commerce.subscribeCartDetailsDialog(this.AbandonedCartsList);
    },
  });
  return app;
});