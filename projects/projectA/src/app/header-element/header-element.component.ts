import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-header-element',
    templateUrl: './header-element.component.html'
})
export class HeaderElementComponent {
    /**
    * input text
    */
    @Input()
    text: any = '';
    /**
    
    * Constructor
    */
    constructor() {
        /**
        * Empty
        */
    }
}