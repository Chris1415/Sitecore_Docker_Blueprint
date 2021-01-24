define(["sitecore", "/-/speak/v1/experienceprofile/DataProviderHelper.js", "/-/speak/v1/experienceprofile/CintelUtl.js"], function (sc, providerHelper, cintelUtil) {
    var app = sc.Definitions.App.extend({
        initialized: function () {
            this.setupOrderMetricsDetail();
            this.setupAbandonedCartsDetail();
        },

        setupOrderMetricsDetail: function () {
            var intelPath = "/intel";
            var orderMetricsView = "ordermetrics";

            providerHelper.setupHeaders([
              { urlKey: intelPath + "/" + orderMetricsView + "?", headerValue: orderMetricsView },
            ]);

            var intelBaseUrl = sc.Contact.baseUrl + intelPath + "/";

            providerHelper.initProvider(this.OrderMetricsDataProvider, orderMetricsView, intelBaseUrl + orderMetricsView, this.OverviewTabMessageBar);
            providerHelper.getData(
              this.OrderMetricsDataProvider,
              $.proxy(function (jsonData) {
                  if (jsonData.data.dataSet.ordermetrics.length > 0) {
                      cintelUtil.setText(this.TotalOrdersValue, jsonData.data.dataSet.ordermetrics[0].FormattedTotalOrderAmount, true);
                      cintelUtil.setText(this.AvgOrdersTotalAmountValue, jsonData.data.dataSet.ordermetrics[0].FormattedAverageOrderTotal, true);
                      cintelUtil.setText(this.NumberOfOrdersValue, jsonData.data.dataSet.ordermetrics[0].TotalNumberOfOrders, true);
                      cintelUtil.setText(this.NumberOfUniquePurchasesValue, jsonData.data.dataSet.ordermetrics[0].TotalNumberOfUniqueProducts, true);
                      cintelUtil.setText(this.NumberOfProductsValue, jsonData.data.dataSet.ordermetrics[0].TotalNumberOfProducts, true);
                      cintelUtil.setText(this.FrequencyOfTransactionsValue, jsonData.data.dataSet.ordermetrics[0].FormattedFrequencyOfTransactions, true);
                      cintelUtil.setText(this.DateOfFirstOrderValue, jsonData.data.dataSet.ordermetrics[0].FormattedDateOfFirstOrder, true);
                      cintelUtil.setText(this.DateOfLastOrderValue, jsonData.data.dataSet.ordermetrics[0].FormattedDateOfLastOrder, true);
                  }
                  else {
                      cintelUtil.setText(this.TotalOrdersValue, "---", true);
                      cintelUtil.setText(this.AvgOrdersTotalAmountValue, "---", true);
                      cintelUtil.setText(this.NumberOfOrdersValue, "0", true);
                      cintelUtil.setText(this.NumberOfUniquePurchasesValue, "0", true);
                      cintelUtil.setText(this.NumberOfProductsValue, "0", true);
                      cintelUtil.setText(this.FrequencyOfTransactionsValue, "---", true);
                      cintelUtil.setText(this.DateOfFirstOrderValue, "---", true);
                      cintelUtil.setText(this.DateOfLastOrderValue, "---", true);
                  }
              }, this));
        },

        setupAbandonedCartsDetail: function () {
            var intelPath = "/intel";
            var abandonedCartsMetricsView = "abandonedcartsmetrics";

            providerHelper.setupHeaders([
              { urlKey: intelPath + "/" + abandonedCartsMetricsView + "?", headerValue: abandonedCartsMetricsView },
            ]);

            var intelBaseUrl = sc.Contact.baseUrl + intelPath + "/";

            providerHelper.initProvider(this.AbandonedCartsMetricsDataProvider, abandonedCartsMetricsView, intelBaseUrl + abandonedCartsMetricsView, this.OverviewTabMessageBar);
            providerHelper.getData(
              this.AbandonedCartsMetricsDataProvider,
              $.proxy(function (jsonData) {
                  if (jsonData.data.dataSet.abandonedcartsmetrics.length > 0) {
                      cintelUtil.setText(this.TotalCartsValue, jsonData.data.dataSet.abandonedcartsmetrics[0].FormattedTotalCartAmount, true);
                      cintelUtil.setText(this.AvgTotalCartsValue, jsonData.data.dataSet.abandonedcartsmetrics[0].FormattedAverageCartTotal, true);
                      cintelUtil.setText(this.NumberOfAbandonedCartsValue, jsonData.data.dataSet.abandonedcartsmetrics[0].TotalNumberOfCarts, true);
                      cintelUtil.setText(this.CartsNumberOfUniquePurchasesValue, jsonData.data.dataSet.abandonedcartsmetrics[0].TotalNumberOfUniqueProducts, true);
                      cintelUtil.setText(this.CartsNumberOfProductsValue, jsonData.data.dataSet.abandonedcartsmetrics[0].TotalNumberOfProducts, true);
                      cintelUtil.setText(this.CartsFrequencyOfTransactionsValue, jsonData.data.dataSet.abandonedcartsmetrics[0].FormattedFrequencyOfTransactions, true);
                      cintelUtil.setText(this.DateOfFirstCartValue, jsonData.data.dataSet.abandonedcartsmetrics[0].FormattedDateOfFirstCart, true);
                      cintelUtil.setText(this.DateOfLastCartValue, jsonData.data.dataSet.abandonedcartsmetrics[0].FormattedDateOfLastCart, true);
                  }
                  else {
                      cintelUtil.setText(this.TotalCartsValue, "---", true);
                      cintelUtil.setText(this.AvgTotalCartsValue, "---", true);
                      cintelUtil.setText(this.NumberOfAbandonedCartsValue, "0", true);
                      cintelUtil.setText(this.CartsNumberOfUniquePurchasesValue, "0", true);
                      cintelUtil.setText(this.CartsNumberOfProductsValue, "0", true);
                      cintelUtil.setText(this.CartsFrequencyOfTransactionsValue, "---", true);
                      cintelUtil.setText(this.DateOfFirstCartValue, "---", true);
                      cintelUtil.setText(this.DateOfLastCartValue, "---", true);
                  }
              }, this));
        },
    });
    return app;
});