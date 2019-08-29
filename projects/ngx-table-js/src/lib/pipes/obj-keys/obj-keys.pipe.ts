import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'objKeys'
})
export class ObjKeysPipe implements PipeTransform{
    transform(obj: Object): Array<string>{
        return Object.keys(obj)
    }
}