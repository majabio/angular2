import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
moduleId : module.id,
selector : 'login',
//template : 'hello'
templateUrl: 'login.component.html',
styles: [`.vertical-center {
  min-height: 100%;  
  min-height: 100vh; 

  display: flex;
  align-items: center;
  
}
.container{width: 35%}
`]

})

export class LoginComponent{
    
    constructor( private router: Router){}


   /* constructor(private http: Http) {

    }*/

   /* login(event) {
        alert(event)
    }*/

    login(username : string)
    {
        this.router.navigate([username]);
       
    }    
    
}