import { ListServerComponent } from './list-server.component';
import { RouterModule, Routes } from '@angular/router';

const subRoutes: Routes = [
  {
    path: '',
    component: ListServerComponent,
  },
];

export const SUB_ROUTING = RouterModule.forChild(subRoutes);
