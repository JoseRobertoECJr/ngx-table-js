import { NgModule } from '@angular/core';
import { NgxTableJsComponent } from './ngx-table-js.component';
import { DatePipe } from '@angular/common';
import { ToFriendlyPipe } from './pipes/to-friendly/to-friendly.pipe';
import { ObjKeysPipe } from './pipes/obj-keys/obj-keys.pipe';


@NgModule({
  declarations: [NgxTableJsComponent, ToFriendlyPipe, ObjKeysPipe],
  imports: [
  ],
  providers: [DatePipe],
  exports: [NgxTableJsComponent]
})
export class NgxTableJsModule { }
