import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ICandidatesInterview, ICandidate } from 'src/app/model/data-model';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit, OnChanges {
  @Input() candidate: ICandidate;
  public interviews: ICandidatesInterview[];
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(!this.candidate) {return}
    this.appService.getInterviewsData(this.candidate.candidateId).subscribe((response: ICandidatesInterview[]) => {
      this.interviews = response;
    },
      (err) => console.log(err))
  }

}
