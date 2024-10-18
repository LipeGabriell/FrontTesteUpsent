import { Routes } from '@angular/router';
import { ListWorkersComponent } from './components/list-workers/list-workers.component';
import { CreateWorkersComponent } from './components/create-workers/create-workers.component';
import { VisualizeWorkersComponent } from './components/visualizar/visualize-workers.component';

export const routes: Routes = [
  {
    path: 'insert',
    title: 'Adicionar novos funcionários',
    component: CreateWorkersComponent,
  },
  {
    path: 'visualize',
    title: 'Listar funcionários',
    component: VisualizeWorkersComponent,
  },
  {
    path: 'list',
    title: 'Listar funcionários',
    component: ListWorkersComponent,
  },
];
