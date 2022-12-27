import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho.component';
import { CarrinhoModule } from './carrinho.module';

const routes: Routes = [
  { path: "", component: CarrinhoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrinhoRoutingModule { }
