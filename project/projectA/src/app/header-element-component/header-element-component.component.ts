import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-element-component',
  templateUrl: './header-element-component.component.html',
  styleUrls: ['./header-element-component.component.css'],
})
export class HeaderElementComponent implements OnInit {
  @Input()
  text: any = '';
  constructor() {}

  ngOnInit() {}
}
