"use strict";
var testing_1 = require("@angular/core/testing");
var actor_service_1 = require("./actor.service");
describe('ActorServicesService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [actor_service_1.ActorServicesService]
        });
    });
    it('should ...', testing_1.inject([actor_service_1.ActorServicesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
