"use strict";
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var GenericServices = (function () {
    function GenericServices() {
    }
    GenericServices.prototype.handleErrors = function (error) {
        console.log("**** error *****");
        console.log("status " + error.status);
        console.log("statusText " + error.statusText);
        console.log("url " + error.url);
        console.log("headers " + JSON.stringify(error.headers));
        console.log("handleErrors " + JSON.stringify(error.json()));
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        console.log("**** error *****");
        return rxjs_1.Observable.throw(errMsg);
    };
    return GenericServices;
}());
GenericServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], GenericServices);
exports.GenericServices = GenericServices;
