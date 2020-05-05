import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Workflow } from '../model/workflow';
import { UpdateWorkflow } from '../model/updateWorkflow';
import { WorkflowResponse } from '../model/workflowResponse';
import { map, flatMap, filter, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService{
  private getUrl = 'http://localhost:3000/assets/workflow/display';
  private updUrl = 'http://localhost:3000/assets/workflow/update';

  constructor(private http : HttpClient) {   }

  getWorkflow(userid : string): Observable<Workflow[]>{
   this.getUrl = this.getUrl + '/' + userid;
    return this.http.get<Workflow[]>(this.getUrl);
    console.log(this.getUrl);
   // return this.http.get<Workflow>(this.url);
  //  return this.http
  //  .get(this.url)
  //  .map( (response : Response) => {
  //   return <Workflow[]>response.json()y
  //   ;
  //  })
  
}

updateWorkflow(updateWorkflow : UpdateWorkflow): Observable<WorkflowResponse>{
  console.log('Inside service', updateWorkflow);
  return this.http.post<WorkflowResponse>(this.updUrl,updateWorkflow);
}
}

// postWebmailReq(webmailreqobj: WebmailRequest): Observable<PostResponse>  {
//   console.log("in service",webmailreqobj);
//   return this.http.post<PostResponse>(this.url, webmailreqobj);
// } 