import { NgModule }	from '@angular/core';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

@NgModule({
	declarations: [
		CaixaDeEntradaComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		SharedComponentModule,
		CaixaDeEntradaRoutingModule
	]
})

export class CaixaDeEntradaModule	{
    
}