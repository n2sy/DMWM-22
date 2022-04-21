import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { BlockGuard } from './block.guard';
import { CvComponent } from './cv/cv.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { LogoutGuard } from './logout.guard';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { NotFoundComponent } from './not-found/not-found.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate: [LoginGuard] },
      { path: ':id', component: InfosComponent },
      { path: ':id/edit', component: EditComponent },
    ],
  },
  { path: 'servers', component: ManageServersComponent },
  {
    path: 'serveur',
    loadChildren: () =>
      import('../app/sub/sub.module').then((m) => m.SubModule), // LAZY LOADING
  },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const DMWMW_ROUTING = RouterModule.forRoot(myRoutes);
