import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";


import { LoginComponent } from "./login/login.component"
import { SingupComponent } from "./signup/singup.component";


@NgModule({
    declarations: [
        LoginComponent,
        SingupComponent
    ],
    imports: [
        CommonModule, 
        AngularMaterialModule, 
        FormsModule
    ]
})
export class AuthModule {}