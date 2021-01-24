define(["sitecore", "/-/speak/v1/experienceprofile/DataProviderHelper.js", "/-/speak/v1/experienceprofile/CintelUtl.js"], function (sc, providerHelper, cintelUtil) {
    var cidParam = "cid";
    var orderidParam = "OrderNumber";
    var isVisibleProperty = "isVisible";
    var intelPath = "/intel";

    var orderLinesTable = "cart-detail-lines";
    var orderDetailsView = "cartdetails";
    var partyListView = "cartdetail-parties";
    var AdjustmentsView = "cartdetail-adjustments";

    var cartToolTipBorderControl;
    var allowanceSubTotalValue;
    var chargeSubTotalValue;
    var stockStatusValue;
    var shippingDateValue;
    var shippingMethodValue;
    var paymentMethodValue;

    var partyTooltipBorderControl;
    var partyFirstNameValue;
    var partyLastNameValue;
    var partyCompanyValue;
    var partyPhoneValue;
    var partyEmailValue;
    var partyTypeValue;
    var partyLineIdListValue;

    var baseUrl;
    var contactId;

    var app = sc.Definitions.App.extend({
        initialized: function () {
            var orderId = cintelUtil.getQueryParam(orderidParam);
            contactId = cintelUtil.getQueryParam(cidParam);

            if (!contactId) return;
            $(".sc-list").show();

            sc.trigger("CartDetailsApp", this);

            baseUrl = "/sitecore/api/ao/v1/contacts/" + contactId;

            $('.sc-progressindicator').first().show().hide(); // prefetch indicator background images

            this.MainBorder.set(isVisibleProperty, true);

            cartToolTipBorderControl = this.CartTooltipBorder;
            allowanceSubTotalValue = this.AllowanceValue;
            chargeSubTotalValue = this.ChargeValue;
            stockStatusValue = this.StockStatusValue;
            shippingDateValue = this.ShippingDateValue;
            shippingMethodValue = this.ShippingMethodValue;
            paymentMethodValue = this.PaymentMethodValue;
            partyEmailValue = this.PartyEmailValue;

            cartToolTipBorderControl.viewModel.$el.addClass("CartLines-ToolTip arrow_box");
            cartToolTipBorderControl.viewModel.$el.hide();

            partyTooltipBorderControl = this.PartyTooltipBorder;
            partyFirstNameValue = this.PartyFirstNameValue;
            partyLastNameValue = this.PartyLastNameValue;
            partyCompanyValue = this.PartyCompanyValue;
            partyPhoneValue = this.PartyPhoneValue;
            partyTypeValue = this.PartyTypeValue;
            partyLineIdListValue = this.PartyLineIdListValue;

            partyTooltipBorderControl.viewModel.$el.addClass("PartyLines-ToolTip arrow_box");
            partyTooltipBorderControl.viewModel.$el.hide();

            this.setupCartDetail();
            this.setupCartLineItems();
            this.setupPartyList();
            this.setupAdjustments();
        },

        setupCartDetail: function () {

            providerHelper.setupHeaders([
              { urlKey: intelPath + "/" + orderDetailsView, headerValue: orderDetailsView }
            ]);

            var intelBaseUrl = sc.Contact.baseUrl + intelPath + "/";
            providerHelper.initProvider(this.CartLinesDataProvider, orderDetailsView, null, this.OrderDetailMessageBar);
        },

        commerceTooltip: function (control, toolTipControl, rowSetter, tooltipSetter) {
            control.on("didRender", function () {
                var viewModel = control.viewModel;
                control.viewModel.$el.find("tbody tr").each(function (index) {
                    var items = viewModel.items;
                    if (index < items().length) {
                        rowSetter($(this), items, index);
                        $(this).hover(
                            function (pos) {
                                tooltipSetter($(this));
                                var leftPos = ($(this).width() - toolTipControl.viewModel.$el.width()) / 2;
                                toolTipControl.viewModel.$el.css({ top: $(this).position().top + $(this).height(), left: leftPos, position: 'absolute' });
                                toolTipControl.viewModel.$el.css('zIndex', 9999);
                                toolTipControl.viewModel.$el.show();
                            },
                        function () {
                            toolTipControl.viewModel.$el.hide();
                        }
                        );
                    }
                });
            });
        },

        setupCartLineItems: function () {
            providerHelper.setupHeaders([
              { urlKey: intelPath + "/" + orderLinesTable, headerValue: orderLinesTable }
            ]);

            providerHelper.initProvider(this.CartLinesDataProvider, orderLinesTable, null, this.OrderDetailMessageBar);
            providerHelper.setDefaultSorting(this.CartLinesDataProvider, "LineNumber", false);
            providerHelper.subscribeSorting(this.CartLinesDataProvider, this.CartLinesList);

            this.commerceTooltip(this.CartLinesList, cartToolTipBorderControl,
                function (row, items, index) {
                    row.attr("AllowanceSubTotal", items()[index].FormattedAllowanceSubTotal);
                    row.attr("ChargeSubTotal", items()[index].FormattedChargeSubTotal);
                    row.attr("StockStatus", items()[index].StockStatus);
                    row.attr("ShippingDate", items()[index].FormattedShippingDate);
                    row.attr("ShippingMethod", items()[index].ShippingMethod);
                    row.attr("PaymentMethod", items()[index].PaymentMethod);
                },
                function (row) {
                    cintelUtil.setText(allowanceSubTotalValue, row.attr("AllowanceSubTotal"));
                    cintelUtil.setText(chargeSubTotalValue, row.attr("ChargeSubTotal"));
                    cintelUtil.setText(stockStatusValue, row.attr("StockStatus"));
                    cintelUtil.setText(shippingDateValue, row.attr("ShippingDate"));
                    cintelUtil.setText(shippingMethodValue, row.attr("ShippingMethod"));
                    cintelUtil.setText(paymentMethodValue, row.attr("PaymentMethod"));
                }, this);
        },

        setupPartyList: function () {
            providerHelper.setupHeaders([
              { urlKey: intelPath + "/" + partyListView, headerValue: partyListView }
            ]);

            providerHelper.initProvider(this.PartyListDataProvider, partyListView, null, this.OrderDetailMessageBar);
            providerHelper.subscribeSorting(this.PartyListDataProvider, this.PartyListList);

            this.commerceTooltip(this.PartyListList, partyTooltipBorderControl,
                function (row, items, index) {
                    row.attr("PartyFirstName", items()[index].FirstName);
                    row.attr("PartyLastName", items()[index].LastName);
                    row.attr("PartyCompany", items()[index].Company);
                    row.attr("PartyPhone", items()[index].Phone);
                    row.attr("PartyEmail", items()[index].EmailAddress);
                    row.attr("PartyType", items()[index].PartyType);
                    row.attr("PartyLineIdList", items()[index].LineIdList);
                },
                function (row) {
                    cintelUtil.setText(partyFirstNameValue, row.attr("PartyFirstName"));
                    cintelUtil.setText(partyLastNameValue, row.attr("PartyLastName"));
                    cintelUtil.setText(partyCompanyValue, row.attr("PartyCompany"));
                    cintelUtil.setText(partyPhoneValue, row.attr("PartyPhone"));
                    cintelUtil.setText(partyEmailValue, row.attr("PartyEmail"));
                    cintelUtil.setText(partyTypeValue, row.attr("PartyType"));
                    cintelUtil.setText(partyLineIdListValue, row.attr("PartyLineIdList"));
                }, this);
        },

        setupAdjustments: function () {
            providerHelper.setupHeaders([
              { urlKey: intelPath + "/" + AdjustmentsView, headerValue: AdjustmentsView }
            ]);

            providerHelper.initProvider(this.AdjustmentsDataProvider, AdjustmentsView, null, this.OrderDetailMessageBar);
            providerHelper.setDefaultSorting(this.AdjustmentsDataProvider, "LineNumber", false);
            providerHelper.subscribeSorting(this.AdjustmentsDataProvider, this.AdjustmentsList);
            // providerHelper.subscribeAccordionHeader(this.AdjustmentsDataProvider, this.AdjustmentsAccordion);

        },


        setTitle: function (title) {
            var dialogTitleElement = $("div[data-sc-id^='CommerceCartDetailsDialog']").find(".sc-dialogWindow-header-title");
            if (dialogTitleElement !== "undefined") {
                dialogTitleElement.text(title);
            }
        },

        open: function (dialog, application, outcomeId) {
            if (!outcomeId) return;

            this.setTitle("");

            // Handles the clck on the visit detail
            //dialog.VisitDetailLink.viewModel.$el.click(function () {
            //});

            var dataUrlProperty = "dataUrl";
            var intelBaseUrl = baseUrl + "/intel/";

            application.OrderDetailsDataProvider.set(dataUrlProperty, intelBaseUrl + orderDetailsView + "/" + outcomeId);
            application.CartLinesDataProvider.set(dataUrlProperty, intelBaseUrl + orderLinesTable + "/" + outcomeId);
            application.PartyListDataProvider.set(dataUrlProperty, intelBaseUrl + partyListView + "/" + outcomeId);
            application.AdjustmentsDataProvider.set(dataUrlProperty, intelBaseUrl + AdjustmentsView + "/" + outcomeId);

            providerHelper.getListData(application.CartLinesDataProvider, application.CartLinesList);
            providerHelper.getListData(application.PartyListDataProvider, application.PartyListList);
            providerHelper.getListData(application.AdjustmentsDataProvider, application.AdjustmentsList);

            providerHelper.getData(
              this.OrderDetailsDataProvider,
              $.proxy(function (jsonData) {

                  this.setTitle(jsonData.data.dataSet.cartdetails[0].DialogTitle);

                  cintelUtil.setText(this.OrderNumberValue, jsonData.data.dataSet.cartdetails[0].OrderNumber, true);
                  cintelUtil.setText(this.OrderDateValue, jsonData.data.dataSet.cartdetails[0].FormattedCartDate, true);
                  cintelUtil.setText(this.OrderSubTotalValue, jsonData.data.dataSet.cartdetails[0].FormattedCartSubtotal, true);
                  cintelUtil.setText(this.OrderShippingCostValue, jsonData.data.dataSet.cartdetails[0].FormattedShippingCost, true);
                  cintelUtil.setText(this.OrderStatusValue, jsonData.data.dataSet.cartdetails[0].CartStatus, true);
                  cintelUtil.setText(this.CurrencyCodeValue, jsonData.data.dataSet.cartdetails[0].CurrencyCode, true);
                  cintelUtil.setText(this.EmailValue, jsonData.data.dataSet.cartdetails[0].EmailAddress, true);
                  cintelUtil.setText(this.VatValue, jsonData.data.dataSet.cartdetails[0].FormattedVat, true);
                  cintelUtil.setText(this.SavingsValue, jsonData.data.dataSet.cartdetails[0].FormattedSavings, true);
                  cintelUtil.setText(this.OrderTotalValue, jsonData.data.dataSet.cartdetails[0].FormattedCartTotal, true);

                  cintelUtil.setText(this.BillingAddress1Value, jsonData.data.dataSet.cartdetails[0].BillingAddress1, true);
                  cintelUtil.setText(this.BillingAddress2Value, jsonData.data.dataSet.cartdetails[0].BillingAddress2, true);
                  cintelUtil.setText(this.BillingCityValue, jsonData.data.dataSet.cartdetails[0].BillingCity, true);
                  cintelUtil.setText(this.BillingCompanyValue, jsonData.data.dataSet.cartdetails[0].BillingCompany, true);
                  cintelUtil.setText(this.BillingCountryValue, jsonData.data.dataSet.cartdetails[0].BillingCountry, true);
                  cintelUtil.setText(this.BillingEmailValue, jsonData.data.dataSet.cartdetails[0].BillingEmail, true);
                  cintelUtil.setText(this.BillingFirstNameValue, jsonData.data.dataSet.cartdetails[0].BillingFirstName, true);
                  cintelUtil.setText(this.BillingLastNameValue, jsonData.data.dataSet.cartdetails[0].BillingLastName, true);
                  cintelUtil.setText(this.BillingNameValue, jsonData.data.dataSet.cartdetails[0].BillingName, true);
                  cintelUtil.setText(this.BillingPhoneValue, jsonData.data.dataSet.cartdetails[0].BillingPhone, true);
                  cintelUtil.setText(this.BillingPostalCodeValue, jsonData.data.dataSet.cartdetails[0].BillingPostalCode, true);
                  cintelUtil.setText(this.BillingStateValue, jsonData.data.dataSet.cartdetails[0].BillingState, true);

                  cintelUtil.setText(this.ShippingAddress1Value, jsonData.data.dataSet.cartdetails[0].ShippingAddress1, true);
                  cintelUtil.setText(this.ShippingAddress2Value, jsonData.data.dataSet.cartdetails[0].ShippingAddress2, true);
                  cintelUtil.setText(this.ShippingCityValue, jsonData.data.dataSet.cartdetails[0].ShippingCity, true);
                  cintelUtil.setText(this.ShippingCompanyValue, jsonData.data.dataSet.cartdetails[0].ShippingCompany, true);
                  cintelUtil.setText(this.ShippingCountryValue, jsonData.data.dataSet.cartdetails[0].ShippingCountry, true);
                  cintelUtil.setText(this.ShippingEmailValue, jsonData.data.dataSet.cartdetails[0].ShippingEmail, true);
                  cintelUtil.setText(this.ShippingFirstNameValue, jsonData.data.dataSet.cartdetails[0].ShippingFirstName, true);
                  cintelUtil.setText(this.ShippingLastNameValue, jsonData.data.dataSet.cartdetails[0].ShippingLastName, true);
                  cintelUtil.setText(this.ShippingNameValue, jsonData.data.dataSet.cartdetails[0].ShippingName, true);
                  cintelUtil.setText(this.ShippingPhoneValue, jsonData.data.dataSet.cartdetails[0].ShippingPhone, true);
                  cintelUtil.setText(this.ShippingPostalCodeValue, jsonData.data.dataSet.cartdetails[0].ShippingPostalCode, true);
                  cintelUtil.setText(this.ShippingStateValue, jsonData.data.dataSet.cartdetails[0].ShippingState, true);
              }, this));
        }
    });
    return app;
});