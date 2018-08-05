"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var main_service_1 = require("src/app/services/main.service");
var VotingPollsComponent = /** @class */ (function () {
    function VotingPollsComponent(service) {
        this.service = service;
    }
    VotingPollsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.fetchCandidates().subscribe(function (res) { return _this.votingBoxes = res; });
    };
    VotingPollsComponent.prototype.submitVote = function (event) {
        this.service.updateCandidate(event);
    };
    VotingPollsComponent = __decorate([
        core_1.Component({
            selector: 'app-voting-polls',
            templateUrl: './voting-polls.component.html',
            styleUrls: ['./voting-polls.component.sass']
        }),
        __metadata("design:paramtypes", [main_service_1.MainService])
    ], VotingPollsComponent);
    return VotingPollsComponent;
}());
exports.VotingPollsComponent = VotingPollsComponent;
//# sourceMappingURL=voting-polls.component.js.map