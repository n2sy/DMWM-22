import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { HomeaccountComponent } from './accounts/homeaccount/homeaccount.component';
import { InfoaccountComponent } from './accounts/infoaccount/infoaccount.component';
import { AddaccountComponent } from './accounts/addaccount/addaccount.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, ChildComponent, CvComponent, ListeComponent, ItemComponent, DetailsComponent, HomeaccountComponent, InfoaccountComponent, AddaccountComponent, DirectComponent, MsWordComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
