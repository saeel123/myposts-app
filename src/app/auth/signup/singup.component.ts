import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    templateUrl: './singup.component.html',
    styleUrls: ['./singup.component.css']
})
export class SingupComponent {
    isLoading = false;

    onSignUp (form: NgForm) {
        console.log(form.value);
        
    }
    
}