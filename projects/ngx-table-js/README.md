# NgxTableJs

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.3. It is a table library for Angular 8.

## Installation

Install the library with npm

`npm install ngx-table-js`

## Usage

Import `NgxTableJsModule` in the root module:

`import { NgxTableJsModule } from 'ngx-table-js'

@NgModule({
    imports: [
        // ...
        NgxTableJsModule,
        // ...
    ]
})`

Import component in the local you want to use in your template:

`<ngx-table-js></ngx-table-js>`

### @Inputs required

Table needs the `objArray` you want to display and the max `numberOfPages`.

`<ngx-table-js [objArray]="yourObjectArray"></ngx-table-js>`

### Events

You can handle events that table emit.

#### Filter Change

The event is triggered on filter or page change. It emits a `FilterEvent`.

`<ngx-table-js (onFilterChange)="yourFilterHandle($event)"></ngx-table-js>`

#### Row Click

The event is triggered on table row click. It emits a `RowEvent`.

`<ngx-table-js (onRowClick)="yourRowClickHandle($event)"></ngx-table-js>`

#### Double Row Click

The event is triggered on table row double click. It emits a `RowEvent`.

`<ngx-table-js (onRowDblClick)="yourDblRowClickHandle($event)"></ngx-table-js>`

### Classes

#### Event classes

`
export class RowEvent{
    index: number
    value: Object

    constructor(index: number, value: Object){
        this.index = index
        this.value = value
    }
}
`

`
import { Filter } from './Filter';

export class FilterEvent{
    page: number
    filterArray: Array<Filter>

    constructor(page?: number, filterArray?: Array<Filter>){
        this.page = page ? page : 1
        this.filterArray = filterArray ? filterArray : new Array<Filter>()
    }

}
`

#### Filter class

`
export class Filter{
    field: string
    value: any

    constructor(field: string, value: any){
        this.field = field
        this.value = value
    }
}`

## Angular notes:

### Code scaffolding

Run `ng generate component component-name --project NgxTableJs` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project NgxTableJs`.
> Note: Don't forget to add `--project NgxTableJs` or else it will be added to the default project in your `angular.json` file. 

### Build

Run `ng build NgxTableJs` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build NgxTableJs`, go to the dist folder `cd dist/ngx-table-js` and run `npm publish`.

### Running unit tests

Run `ng test NgxTableJs` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
