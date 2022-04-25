import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragSampleComponent } from './cdk.drag.sample/cdk.drag.sample.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { GroupDragDropComponent } from './group-drag-drop/group-drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    CdkDragSampleComponent,
    ListOrderComponent,
    GroupDragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
