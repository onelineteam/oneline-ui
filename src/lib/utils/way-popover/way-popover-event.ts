export  class WayPopoverEvent {
  key: string;
  callback: EventListener;
  target: HTMLElement | Document;
  constructor(target: HTMLElement | Document, key: string, callback: EventListener) {
    this.key = key;
    this.target = target;
    this.callback = callback;
    this.target.addEventListener(key, this.callback);
  }
  destroy() {
    this.target.removeEventListener(this.key, this.callback);
  }
}