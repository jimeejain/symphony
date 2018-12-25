export interface IPostedJobs {
    company: string,
    title: string,
    datePosted: string,
    status: "Open" | "Closed",
    jobId: string
}

export interface ICandidate {
    name: string,
    worksAt: string,
    exp: string,
    ctc: string,
    candidateId: string
}

export interface ICandidatesInterview {
    interview: string,
    interviewer: string,
    date: string,
    result: string
}