import { Component, OnInit, OnDestroy } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Subscription } from 'rxjs';

import { MainService } from 'src/app/services/main.service';
import { Candidate } from 'src/app/interfaces/candidates';

@Component({
  selector: 'app-voting-polls',
  templateUrl: './voting-polls.component.html',
  styleUrls: ['./voting-polls.component.sass'],
})
export class VotingPollsComponent implements OnInit, OnDestroy {

  constructor(private service: MainService) { }

  public votingBoxes: Array<Candidate>;
  private componentSubscribers: Array<Subscription> = [];

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.componentSubscribers
    .filter((subscription: Subscription) => !isNullOrUndefined(subscription))
    .forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  public submitVote(event: Candidate): void {
    this.componentSubscribers.push(this.service.updateCandidate(event)
      .subscribe(res => {
        const indexOf = this.votingBoxes.map(data => data.id).indexOf(res.id);
        this.votingBoxes[indexOf].thumbs_up = res.thumbs_up;
        this.votingBoxes[indexOf].thumbs_down = res.thumbs_down;
      }
    ));
  }

  private init(): void {
    this.componentSubscribers.push(this.service.fetchCandidates().subscribe(res => this.votingBoxes = res));
  }

}
