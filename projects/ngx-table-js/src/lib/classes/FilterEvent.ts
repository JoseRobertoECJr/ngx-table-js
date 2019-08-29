import { Filter } from './Filter';

export class FilterEvent{
    page: number
    filterArray: Array<Filter>

    constructor(page?: number, filterArray?: Array<Filter>){
        this.page = page ? page : 1
        this.filterArray = filterArray ? filterArray : new Array<Filter>()
    }

}