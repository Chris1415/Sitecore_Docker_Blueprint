define(["sitecore", "/-/speak/v1/experienceprofile/DataProviderHelper.js"], function (sc, providerHelper) {
    var app = sc.Definitions.App.extend({
        initialized: function () {
            this.loadProductMissedOpportunities();
        },

        loadProductMissedOpportunities: function () {
            var intelPath = "/intel";
            var reportTable = "missedopportunities-product";

            providerHelper.setupHeaders([
              { urlKey: intelPath + "/" + reportTable + "?", headerValue: reportTable },
            ]);

            var intelBaseUrl = sc.Contact.baseUrl + intelPath + "/";

            providerHelper.initProvider(this.ProductMissedOpportunitiesDataProvider, reportTable, intelBaseUrl + reportTable, this.MissedOpportunitiesTabMessageBar);
            providerHelper.subscribeSorting(this.ProductMissedOpportunitiesDataProvider, this.ProductMissedOpportunitiesList);
            providerHelper.setDefaultSorting(this.ProductMissedOpportunitiesDataProvider, "ProductAddLineCount", true);
            providerHelper.getListData(this.ProductMissedOpportunitiesDataProvider);

            providerHelper.subscribeAccordionHeader(this.ProductMissedOpportunitiesDataProvider, this.ProductMissedOpportunitiesAccordion);
        },
    });
    return app;
});