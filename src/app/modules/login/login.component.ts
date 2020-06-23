import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class	LoginComponent	implements	OnInit	{
	login	=	{
			email:	'',
			password:	''
	}
  mensagemErro: any;
constructor(private	httpClient:	HttpClient)	{ }

  ngOnInit() {}
  
	handleLogin(formLogin: NgForm){
			if(formLogin.valid){
					this.httpClient
									.post('http://localhost:3200/login', this.login)
									.subscribe(
                      (response: any)	=>	{
                        localStorage.setItem('cmail-token',response.token);
                      }
                      ,
											(error) => {
													console.error(error);
                          console.log('deu ruim');
                          (responseError:	HttpErrorResponse)	=>	{
                            this.mensagemErro	=	responseError.error.body
                          }                            
											}
									)
      }
  }
}