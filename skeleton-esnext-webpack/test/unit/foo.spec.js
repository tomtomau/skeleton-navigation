import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {PLATFORM} from 'aurelia-pal';
import { flushQueues } from '../helper/flush-queue';

describe('FooComponent', () => {
  let component;
  let bindingContext;

  beforeEach(async () => {
    bindingContext = {
      wigglebar: false
    };

    component = StageComponent
      .withResources(PLATFORM.moduleName('foo'))
      .inView('<foo bar.bind="wigglebar"></foo>')
      .boundTo(bindingContext)
    ;
    await component.create(bootstrap);
  });

  it('should contain a button', () => {
    const button = document.querySelector('#button');
    expect(button).not.toBeNull();
  });

  it('bar should be false by default', () => {
    expect(component.viewModel.bar).toBeFalsy();
  })

  it('clicking on the button should toggle bar', async () => {
    const button = document.querySelector('#button');
    button.click();

    flushQueues();
    await Promise.resolve();

    expect(component.viewModel.bar).toBeTruthy();

    // This line fails
    expect(bindingContext.wigglebar).toBeTruthy();
  });

  afterEach(() => {
    component.dispose();
  });
});
