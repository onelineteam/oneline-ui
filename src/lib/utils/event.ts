export const EventManager = {

}
export function on(element: Node|Window, type: string, callback:EventListenerOrEventListenerObject) {
  element.addEventListener(type, callback); 
}

export function off(element: Node, type: string, callback: EventListenerOrEventListenerObject) {
  element.removeEventListener(type, callback);
}

// export class WayEvent {
//   callback: EventListenerOrEventListenerObject;
//   type: string;
//   element: Node;
// }