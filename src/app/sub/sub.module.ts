import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServerComponent } from './list-server/list-server.component';
import { SUB_ROUTING } from './sub.routing';
import { InfosServerComponent } from './infos-server/infos-server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListServerComponent,
    InfosServerComponent,
    EditServerComponent,
  ],
  imports: [CommonModule, FormsModule, SUB_ROUTING],
})
export class SubModule {}
