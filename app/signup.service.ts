import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SignupService {

    private signupUrl = 'http://localhost:5000/api/values/korisnik';

    constructor(private http: Http) { }
    
    writeString(name : string, lastname : string, username : string, password : string, mail : string) : void{
        //alert("hello from service, name is" + name + " and last name is " + lastname);
        var body = { "Ime" : name, "Prezime" : lastname, "KorisnickoIme" : username, "Lozinka" : password, "Mail" : mail}
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(this.signupUrl,body, options).toPromise();


    }
}