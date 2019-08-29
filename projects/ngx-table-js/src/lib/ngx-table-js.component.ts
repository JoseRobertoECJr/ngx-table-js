import { Component, OnInit, Output, EventEmitter, Input, ViewChildren, QueryList, ElementRef } from '@angular/core'
import { FilterEvent } from './classes/FilterEvent'
import { RowEvent } from './classes/RowEvent'
import { Filter } from './classes/Filter'

@Component({
  selector: 'ngx-table-js',
  templateUrl: './ngx-table-js.component.html',
  styleUrls: ['./ngx-table-js.component.css']
})
export class NgxTableJsComponent implements OnInit {

  @ViewChildren('filter') filterArrayElement: QueryList<ElementRef<HTMLInputElement>>

  @Output() onFilterChange: EventEmitter<FilterEvent>
  @Output() onRowClick: EventEmitter<RowEvent>
  @Output() onRowDblClick: EventEmitter<RowEvent>

  @Input() set objArray(objArray: Array<Object>){
    if(!objArray)
      return

    this.objArr = objArray
    this.rowsPerPage =  objArray.length
  }

  @Input() numberOfPages: number
  private objArr: Array<Object>
  private rowsPerPage: number
  private page: number
  private activeRow: number

  constructor() {
    this.onFilterChange = new EventEmitter()
    this.onRowClick = new EventEmitter()
    this.onRowDblClick = new EventEmitter()

    this.objArr = new Array<Object>()
    this.rowsPerPage = 0
    this.page = 1
  }

  ngOnInit() {
    this.onFilterChange.emit(new FilterEvent())
  }

  private changePage(increase: number): void{
    const newPage = this.page + increase
    if(newPage <= 0 || newPage > this.numberOfPages)
      return

    this.page = newPage
    this.emitFilterEvent(newPage)
  }

  private changeActiveRow(index: number): void{
    this.activeRow = index
    this.onRowClick.emit(new RowEvent(index, this.objArr[index]))    
  }

  private emitRowDblClickEvent(index: number): void{
    this.onRowDblClick.emit(new RowEvent(index, this.objArr[index]))
  }

  private emitFilterEvent(page: number): void{
    let filter = this.filterArrayElement.map( function (filterElement, index){
      const filter = filterElement.nativeElement
      return new Filter(filter.placeholder, filter.value)
    })
    this.onFilterChange.emit(new FilterEvent(page, filter))
  }

}
