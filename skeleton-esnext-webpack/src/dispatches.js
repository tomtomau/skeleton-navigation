import { DOM } from 'aurelia-framework';

export function dispatches(eventName) {
  return function(vm) {
    vm.prototype[convertName(eventName)] = makeDispatcher(eventName);
  };
}

function makeDispatcher(eventName) {
  return function(element, detail, bubbles = true) {
    element.dispatchEvent(DOM.createCustomEvent(eventName, { bubbles, detail }));
  };
}

function convertName(input) {
  return 'someCoolName';
}
