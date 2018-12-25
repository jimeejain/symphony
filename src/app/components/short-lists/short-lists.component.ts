import { Component, OnInit , Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import {IPostedJobs, ICandidate} from '../../model/data-model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-short-lists',
  templateUrl: './short-lists.component.html',
  styleUrls: ['./short-lists.component.scss']
})
export class ShortListsComponent implements OnInit, OnChanges {
  @Input() postedJob:IPostedJobs;

  public shortListedCandidates: Observable<ICandidate[]>;
  public selectedCandidate: ICandidate;
  constructor(private appService:AppService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(!this.postedJob) {
      return;
    }
    this.shortListedCandidates = this.appService.getshortListedData(this.postedJob.jobId).pipe(
      tap(candidates => {
        this.selectedCandidate = null;
        if(candidates.length) {
          this.selectedCandidate = candidates[0]
        }
      })
    )
  }
}
