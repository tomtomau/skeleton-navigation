import { Container, TaskQueue } from 'aurelia-framework';

export function flushQueue() {
  let taskQueue = Container.instance.get(TaskQueue);

  if (!taskQueue) {
    throw new Error('TaskQueue not available in container');
  }

  taskQueue.flushTaskQueue();
}

export function flushMicroQueue() {
  let taskQueue = Container.instance.get(TaskQueue);

  if (!taskQueue) {
    throw new Error('TaskQueue not available in container');
  }

  taskQueue.flushMicroTaskQueue();
}

export function flushQueues() {
  flushQueue();
  flushMicroQueue();
}
