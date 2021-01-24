define(["sitecore", "/-/speak/v1/experienceprofile/DataProviderHelper.js"], function (sc, providerHelper)
{
    var visitDialogApp;

    var app = sc.Definitions.App.extend({
    initialized: function ()
    {
      var intelPath = "/intel";
      var orderOutcomesTable = "order-outcomes";
      var selectedItemIdProperty = "selectedItemId";
      var idField = "OutcomeId";

      providerHelper.setupHeaders([
        { urlKey: intelPath + "/" + orderOutcomesTable + "?", headerValue: orderOutcomesTable },
      ]);

      var intelBaseUrl = sc.Contact.baseUrl + intelPath + "/";

      providerHelper.initProvider(this.OrderOutcomesDataProvider, orderOutcomesTable, intelBaseUrl + orderOutcomesTable, this.OrderOutcomesTabMessageBar);
      providerHelper.subscribeSorting(this.OrderOutcomesDataProvider, this.OrderOutcomesList);
      providerHelper.setDefaultSorting(this.OrderOutcomesDataProvider, "Date", true);
      providerHelper.getListData(this.OrderOutcomesDataProvider);

      providerHelper.subscribeAccordionHeader(this.OrderOutcomesDataProvider, this.OrderOutcomesAccordion);

      sc.Commerce.subscribeCartDetailsDialog(this.OrderOutcomesList);

    },
  });
  return app;
});