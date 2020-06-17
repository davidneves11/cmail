import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private	_isNewEmailFormOpen	=	false;

    emailList	=	[];
    email	=	{
        destinatario:	'',
        assunto:	'',
        conteudo:	''
    }
  
    handleNewEmail(formEmail:	NgForm)	{
      if(formEmail.invalid)	return;
      
      this.emailList.push(this.email)
      this.email	=	{
          destinatario:	'',
          assunto:	'',
          conteudo:	''
      }	
      formEmail.reset();

    }
       
    get	isNewEmailFormOpen(){
            return this._isNewEmailFormOpen;
    }
    
    toggleNewEmailForm()	{
            this._isNewEmailFormOpen	=	!this.isNewEmailFormOpen
    }
}
