// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: 'custom-checkbox'
})
export class CustomCheckboxDirective {
  // TODO: Add @Output checkedChange to align with naming conventions
  // TODO: Add A HostListener for the custom element's changed event and trigger checkedChange
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('changed', ['$event']) changed(event: CustomEvent): void {
    this.checkedChange.emit(event.detail);
  }
}
