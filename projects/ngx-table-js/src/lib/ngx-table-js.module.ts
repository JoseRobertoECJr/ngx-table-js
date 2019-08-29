import { NgModule } from '@angular/core';
import { NgxTableJsComponent } from './ngx-table-js.component';
import { DatePipe } from '@angular/common'


@NgModule({
  declarations: [NgxTableJsComponent],
  imports: [
  ],
  providers: [DatePipe],
  exports: [NgxTableJsComponent]
})
export class NgxTableJsModule { }
