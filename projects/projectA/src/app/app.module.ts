import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderElementComponent } from './header-element/header-element.component';
@NgModule({
  declarations: [
    HeaderElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    const element = createCustomElement(HeaderElementComponent, { injector: this.injector })
    if (!customElements.get('custom-element-header'))
      customElements.define('custom-element-header', element)
  }
}