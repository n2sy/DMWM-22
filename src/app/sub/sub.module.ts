import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServerComponent } from './list-server/list-server.component';
import { SUB_ROUTING } from './list-server/sub.routing';

@NgModule({
  declarations: [ListServerComponent],
  imports: [CommonModule, SUB_ROUTING],
})
export class SubModule {}
