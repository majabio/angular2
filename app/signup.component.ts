import {Component} from '@angular/core';
import { SignupService } from './signup.service';

@Component({
moduleId : module.id,
selector : 'signup',
templateUrl : 'signup.component.html',
providers: [SignupService]
})

export class SignupComponent{
    constructor(private signupService: SignupService) { }

    writeString(name : string, lastname : string, username : string, password : string, mail : string) : void {
        console.log(name, lastname, username, password, mail);
        this.signupService.writeString(name, lastname, username, password, mail);
    }

}