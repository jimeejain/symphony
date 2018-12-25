import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPostedJobs, ICandidatesInterview, ICandidate } from "../model/data-model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AppService {
  private interviewUrl: string = "assets/interviews.json";
  private shortListedUrl: string = "assets/shortListedJobs.json";
  private postedJobsUrl: string = "assets/postedJobsData.json";

  constructor(private http: HttpClient) {}

  getInterviewsData(candidateId): Observable<ICandidatesInterview[]> {
    return this.http
      .get(this.interviewUrl)
      .pipe(map(response => response[candidateId] || []));
  }
  getshortListedData(jobId): Observable<ICandidate[]> {
    return this.http
      .get(this.shortListedUrl)
      .pipe(map(response => response[jobId] || []));
  }

  getpostedJobsData(
    query: string,
    statusFilter: string[]
  ): Observable<IPostedJobs[]> {
    return this.http.get(this.postedJobsUrl).pipe(
      map(response => response["postedJobs"]),
      map((postedJobs: IPostedJobs[]) => {
        if (query === "" && statusFilter.length === 0) {
          return postedJobs;
        } else {
          return postedJobs.filter(
            job =>
              (job.title.includes(query) || job.company.includes(query)) &&
              (statusFilter.length === 0 || statusFilter.includes(job.status))
          );
        }
      })
    );
  }
}
