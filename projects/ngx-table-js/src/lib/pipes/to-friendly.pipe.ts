import { Pipe, PipeTransform } from '@angular/core'
import { DatePipe } from '@angular/common'

@Pipe({
    name: 'toFriendly'
})
export class ToFriendlyPipe implements PipeTransform {

    constructor(private datePipe: DatePipe){ }

    transform(value: any, ...args: any[]): any{
        let friendlyValue: any
        const keyType = Object.prototype.toString.call(args[0])
        switch(keyType){
            case '[Object Date]':   friendlyValue = this.datePipe.transform(value, 'dd/MM/yyyy')
                                    break
            default:                friendlyValue = value
        }
        return friendlyValue
    }
}