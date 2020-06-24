import { NgModule }	from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { LoginService } from 'src/app/services/login.service';

@NgModule({
	declarations: [
		LoginComponent
	],
	providers:[
		LoginService
	],
	imports: [
		CommonModule,
		FormsModule,
		LoginRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		SharedComponentModule,
	]
})

export class LoginModule	{
    
}