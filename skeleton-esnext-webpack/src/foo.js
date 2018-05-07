import { inject } from 'aurelia-framework';
import { EVENT_NAME } from './bar';
import { subscribes } from './subscribes';

@inject(Element)
export class Foo {
  constructor(element) {
    this.element = element;
  }

  attached() {
    // This still works
    this.element.classList.add('foobar');
  }

  @subscribes(EVENT_NAME)
  somethingCoolHappened(detail, event) {
    console.log(`Detail: `, detail);
    console.log(`Event: `, event);
  }
}
