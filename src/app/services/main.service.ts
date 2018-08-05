import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Candidate } from 'src/app/interfaces/candidates';

@Injectable()
export class MainService {

  constructor(private http: HttpClient) { }

  public fetchCandidates(): Observable<Array<Candidate>> {
    return this.http.get<Array<Candidate>>('candidates');
  }

  public updateCandidate(data: Candidate): Observable<any> {
    return this.http
      .put<void>('candidates/' + data.id, data)
  }

}
