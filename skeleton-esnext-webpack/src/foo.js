import { bindable, bindingMode } from 'aurelia-framework';

export class Foo {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) bar = false;

  toggleBar() {
    this.bar = !this.bar;
  }
}
