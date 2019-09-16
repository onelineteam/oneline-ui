import {OnelineComponent, CreateElement} from '@core';

class Icon extends OnelineComponent {
  render(h: CreateElement) {
    return h('button', {class: this._class('button')})
  }
}