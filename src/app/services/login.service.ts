import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    api = 'http://localhost:3200/login'

    constructor(private http: HttpClient){}
    
    logar(dadosLogin){
    return this.http.post(this.api, dadosLogin)
    }
}