import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";


import { LoginComponent } from "./login/login.component"
import { SingupComponent } from "./signup/singup.component";
import { AuthRoutingModule } from "./auth-routing.module";



@NgModule({
    declarations: [
        LoginComponent,
        SingupComponent
    ],
    imports: [
        CommonModule, 
        AngularMaterialModule, 
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule {}