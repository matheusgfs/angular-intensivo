import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [

  {path: "",component:AgendamentoComponent},
  {path: "agendamentos",component:AgendamentoComponent},
  {path: "produtos",component:ProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
