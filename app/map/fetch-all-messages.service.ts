import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FetchAllMessagesService {
  
  title: string = 'My first angular2-google-maps project';
  private fetchAllMessagesUrl = 'http://localhost:5000/api/values/glavni-prozor';
 emptyArray : any[];
 constructor(private http: Http) { }

//returns promise 
  fetchAllMessages() : Promise<any[]>//: Promise<Array<Object>>
  {
    return this.http.get(this.fetchAllMessagesUrl).
     toPromise().then(res => res.json() as any[])
     .catch(this.handleError);//as any[]); //.catch(this.handleError);

  }


private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}