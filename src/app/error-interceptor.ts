import {    HttpInterceptor, 
            HttpRequest, 
            HttpHandler,
            HttpErrorResponse 
        } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export class ErrorInterceptor implements HttpInterceptor {
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.error.message == undefined) {
                    alert(error.error.error.message);
                } else {
                    alert(error.error.message);
                }
                return throwError(error);
            })
        );
    }
}