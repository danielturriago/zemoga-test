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
var util_1 = require("util");
var VotingBoxComponent = /** @class */ (function () {
    function VotingBoxComponent() {
        this.submitVote = new core_1.EventEmitter(true);
        this.voteSuccess = false;
        this.voteSelected = false;
    }
    VotingBoxComponent.prototype.selectVote = function (event) {
        this.voteSelected = true;
        this.voteSelection = event;
    };
    VotingBoxComponent.prototype.getPercentage = function (event) {
        if (!util_1.isNullOrUndefined(this.candidate && this.candidate.thumbs_up && this.candidate.thumbs_down)) {
            var totalVotes = this.candidate.thumbs_up + this.candidate.thumbs_down;
            var percentage = Number(((event / totalVotes) * 100).toFixed(2));
            return percentage;
        }
    };
    VotingBoxComponent.prototype.voteSubmission = function () {
        if (this.voteSelected) {
            var _candidate = this.candidate;
            this.voteSelection ? _candidate.thumbs_up = _candidate.thumbs_up + 1 : _candidate.thumbs_down = _candidate.thumbs_down + 1;
            this.submitVote.emit(_candidate);
            this.voteSuccess = true;
        }
    };
    VotingBoxComponent.prototype.resetVoting = function () {
        this.voteSuccess = false;
        this.voteSelected = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VotingBoxComponent.prototype, "candidate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], VotingBoxComponent.prototype, "submitVote", void 0);
    VotingBoxComponent = __decorate([
        core_1.Component({
            selector: 'app-voting-box',
            templateUrl: './voting-box.component.html',
            styleUrls: ['./voting-box.component.sass']
        }),
        __metadata("design:paramtypes", [])
    ], VotingBoxComponent);
    return VotingBoxComponent;
}());
exports.VotingBoxComponent = VotingBoxComponent;
//# sourceMappingURL=voting-box.component.js.map