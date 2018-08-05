import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { clone } from 'lodash';
import { Candidate } from '../../../../interfaces/candidates';

@Component({
  selector: 'app-voting-box',
  templateUrl: './voting-box.component.html',
  styleUrls: ['./voting-box.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class VotingBoxComponent {

  constructor() { }

  @Input() candidate: Candidate;
  @Output() submitVote: EventEmitter<any> = new EventEmitter<any>(true);
  public voteSuccess: boolean = false;
  public voteSelected: boolean = false;
  private voteSelection: boolean;

  public selectVote(event: boolean): void {
    this.voteSelected = true;
    this.voteSelection = event;
  }

  public getPercentage(event: number): number {
    if (!isNullOrUndefined(this.candidate && this.candidate.thumbs_up && this.candidate.thumbs_down)) {
      const totalVotes = this.candidate.thumbs_up + this.candidate.thumbs_down;
      const percentage = Number(((event/totalVotes)*100).toFixed(1));
      return percentage;
    }
  }

  public voteSubmission(): void {
    if (this.voteSelected) {
      const _candidate = clone(this.candidate);
      this.voteSelection ? _candidate.thumbs_up = _candidate.thumbs_up + 1 : _candidate.thumbs_down = _candidate.thumbs_down + 1;
      this.submitVote.emit(_candidate);
      this.voteSuccess = true;
    }
  }

  public isUpTrend(): boolean {
    if (!isNullOrUndefined(this.candidate && this.candidate.thumbs_up && this.candidate.thumbs_down)) {
      return this.candidate.thumbs_up >= this.candidate.thumbs_down;
    }
  }

  public resetVoting(): void {
    this.voteSuccess = false;
    this.voteSelected = false;
  }
}
