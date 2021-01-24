define(["sitecore", "/-/speak/v1/experienceprofile/DataProviderHelper.js", "/-/speak/v1/experienceprofile/CintelUtl.js"], function (sc, providerHelper, cintelUtil) {

    var selectedTabProperty = "selectedTab";
    var textProperty = "text";
    var mainApp;
    var cartDetailsDialogApp;
    var selectedItemIdProperty = "selectedItemId";

    var app = sc.Definitions.App.extend({
        initialized: function () {
            mainApp = this;

            sc.on("CartDetailsApp", function (subapp) {
                cartDetailsDialogApp = subapp;
            }, this);

            sc.Commerce = {
                subscribeCartDetailsDialog: function (listControl) {
                    listControl.on("change:" + selectedItemIdProperty, function () {
                        if (!listControl.get(selectedItemIdProperty)) return;
                        this.openCartDetailDialog(listControl.get("selectedItem").get("OutcomeId"));
                        listControl.set(selectedItemIdProperty, null);
                    }, mainApp);
                },
            };

            this.processTabs();
            sc.trigger("CommerceApp", this);
        },

        loadPanel: function () {
            var panelId = $("[data-sc-id='CommerceTabControl'] > .tab-content > .active .sc-load-on-demand-panel").data("sc-id");
            var panel = this[panelId];

            if (panel && !panel.get("isLoaded")) {
                panel.on("change:isLoaded", function () {
                    panel.set("isBusy", false);
                });

                panel.set("isBusy", true);
                panel.load();
            }
        },

        showDefaultTab: function () {
            var firstTabId = this.CommerceTabControl.get(selectedTabProperty);
            var urlTabId = this.getTabIdFromUrl();

            if (urlTabId && urlTabId != firstTabId) {
                this.CommerceTabControl.set(selectedTabProperty, urlTabId);
            } else {
                this.loadPanel();
            }
        },

        processTabs: function () {
            this.CommerceTabControl.on("change:" + selectedTabProperty, function (tabControl, selectedTab) {
                this.loadPanel();
            }, this);

            this.showDefaultTab();
        },

        getTabIdFromUrl: function () {
            var tabName = cintelUtil.getQueryParam("subtab");
            if (!tabName) return null;

            var tabIdControlId = tabName[0].toUpperCase() + tabName.toLowerCase().substring(1) + "TabId";
            var tabIdControl = this[tabIdControlId];
            if (!tabIdControl) return null;

            return tabIdControl.get(textProperty);
        },

        openCartDetailDialog: function (outcomeId) {
            var panel = this.LoadOnDemandPanelCommerceCartDetails;

            panel.set("isLoaded", false);
            panel.refresh();

            panel.set("isBusy", true);
            this.CommerceCartDetailsDialog.show();

            panel.on("change:isLoaded", function () {
                panel.off("change:isLoaded");
                panel.set("isBusy", false);
                cartDetailsDialogApp.open(this, cartDetailsDialogApp, outcomeId);
            }, this);
        },
    });
    return app;
});