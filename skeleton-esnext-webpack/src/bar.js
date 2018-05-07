import { inject } from 'aurelia-framework';
import { dispatches } from './dispatches';

export const EVENT_NAME = 'some-cool-name';

@inject(Element)
@dispatches(EVENT_NAME)
export class Bar {
  constructor(element) {
    this.element = element;
  }

  clickAction() {
    this.someCoolName(this.element, { message: 'hello world' });
  }
}
