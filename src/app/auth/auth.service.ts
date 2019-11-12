import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from "./auth-data.model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({providedIn: "root"})

export class AuthService {
    constructor(
        private http: HttpClient,
        private router: Router
    ){}

    private token: string;
    private authStatusListener = new Subject<boolean>();
    private isAuthenticated = false;

    getToken(){
        return this.token;
    }

    getIsAuth() {
        return this.isAuthenticated;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    createUser(email: string, password: string) {
        const authData: AuthData = {email: email, password: password}; 
        this.http.post('http://localhost:3000/api/user/signup', authData)
            .subscribe(response => {
                console.log(response);
            })
    }

    loginUser(email: string, password: string) {
        const authData: AuthData = {email: email, password: password}; 
        this.http.post<{ token: string; expiresIn: number}>('http://localhost:3000/api/user/login', authData)
            .subscribe(response => {
                console.log(response);
                this.token = response.token;

                if (this.token) {
                    this.isAuthenticated = true;
                    this.authStatusListener.next(true);
                    this.router.navigate(["/"]);
                }
            })
    }

    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.router.navigate(["/"]);
    }

}