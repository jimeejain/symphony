import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { IPostedJobs } from '../../model/data-model';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jobs-posts',
  templateUrl: './jobs-posts.component.html',
  styleUrls: ['./jobs-posts.component.scss']
})
export class JobsPostsComponent {

  postedJobs: Observable<IPostedJobs[]>;
  selectedPost: IPostedJobs
  constructor(private appService: AppService) { }

  initiateSearch(query, isOpen, isClosed) {
    const appliedStatusFilters = [];
    if(isOpen) {
      appliedStatusFilters.push('Open');
    }
    if(isClosed) {
      appliedStatusFilters.push('Closed')
    }

    this.postedJobs = this.appService.getpostedJobsData(query, appliedStatusFilters).pipe(tap(jobPosts => {
      this.selectedPost = null;
      if(jobPosts.length) {
        this.selectedPost = jobPosts[0]
      }
      console.log('jobPosts', jobPosts)
    }))

  }
}
