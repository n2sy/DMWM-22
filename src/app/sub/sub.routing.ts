import { ListServerComponent } from './list-server/list-server.component';
import { RouterModule, Routes } from '@angular/router';
import { InfosServerComponent } from './infos-server/infos-server.component';
import { EditServerComponent } from './edit-server/edit-server.component';

const subRoutes: Routes = [
  {
    path: 'serveur',
    component: ListServerComponent,
    children: [
      { path: ':id', component: InfosServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(subRoutes);
