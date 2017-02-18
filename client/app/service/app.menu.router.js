System.register(["@angular/router", "../scripts/app.home", "../scripts/app.loc", "../scripts/app.db.selection"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, app_home_1, app_loc_1, app_db_selection_1, routes, MenuRoutes, MenuComponent;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_home_1_1) {
                app_home_1 = app_home_1_1;
            },
            function (app_loc_1_1) {
                app_loc_1 = app_loc_1_1;
            },
            function (app_db_selection_1_1) {
                app_db_selection_1 = app_db_selection_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: app_home_1.AppHome },
                { path: 'loc', component: app_loc_1.AppLoc },
                { path: 'db', component: app_db_selection_1.AppDBSelection }
            ];
            exports_1("MenuRoutes", MenuRoutes = router_1.RouterModule.forRoot(routes));
            exports_1("MenuComponent", MenuComponent = [app_home_1.AppHome, app_loc_1.AppLoc, app_db_selection_1.AppDBSelection]);
        }
    };
});
//# sourceMappingURL=app.menu.router.js.map