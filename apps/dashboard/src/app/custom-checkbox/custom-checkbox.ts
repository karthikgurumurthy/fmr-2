import { Output, HostListener, Component } from '@angular/core';
import * as EventEmitter from 'events';

const tmpl = document.createElement('template');
tmpl.innerHTML = `
    <style>
    .checkbox {
        border: 2px black solid;
        display: inline;
        padding:10px;
        cursor: pointer;
    }

    .checkbox-checked {
        background-color: LightSteelBlue
    }
    </style>

    <div class="checkbox"></div>
`;

@Component({
  template: ''
})
export class CustomCheckboxElement extends HTMLElement {
  _clicked: EventListener;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
    this.label = 'Yes or No?';
  }

  @Output() checkedChange = new EventEmitter<boolean>();

  @HostListener('changed', ['$event'])
  changed($event: CustomEvent) {
    this.checkedChange.emit($event.detail);
  }

  static get observedAttributes() {
    return ['label', 'checked'];
  }

  _checked = false;

  get checked() {
    return this._checked;
  }

  set checked(value: boolean) {
    this._checked = value;
    const checkbox = this.shadowRoot.querySelector('.checkbox');

    if (value) {
      checkbox.classList.add('checkbox-checked');
    } else {
      checkbox.classList.remove('checkbox-checked');
    }
  }

  _label = '';

  get label() {
    return this._label;
  }

  set label(value: string) {
    this._label = value;

    const checkbox = this.shadowRoot.querySelector('.checkbox');
    checkbox.textContent = value;
  }

  connectedCallback() {
    const checkbox = this.shadowRoot.querySelector('.checkbox');

    this._clicked = () => {
      this.checked = !this.checked;

      // TODO: Dispatch a changed event with detail: this.checked here.
      this.dispatchEvent(new CustomEvent('changed', { detail: this.checked }));
    };

    checkbox.addEventListener('click', this._clicked);
  }

  disconnectedCallback() {
    const checkbox = this.shadowRoot.querySelector('.checkbox');
    checkbox.removeEventListener('click', this._clicked);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'label') {
      this.label = newValue;
    } else if (name === 'checked') {
      this.checked = newValue;
    }
  }
}
