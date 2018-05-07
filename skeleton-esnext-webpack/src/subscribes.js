export function subscribes(eventName) {
  return function(targetClass, methodName) {
    let targetMethod = targetClass[methodName];
    let attachedMethod = targetClass.attached ? targetClass.attached : () => {};

    targetClass.attached = function() {
      attachedMethod.bind(this)();
      this.element.addEventListener(eventName, (e) => {
        targetMethod(e.detail, e);
      });
    };
  };
}
