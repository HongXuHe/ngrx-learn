import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthModel } from "../models/auth.model";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    constructor(private http:HttpClient) {
    }

 logIn(user:AuthModel):Observable<AuthModel>{
     let url =environment.API;
     return this.http.post<AuthModel>(url,user)
 }
}