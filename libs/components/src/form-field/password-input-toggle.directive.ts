import {
  AfterViewInit,
  Directive,
  EventEmitter,
  Host,
  HostListener,
  Input,
  OnChanges,
  Output,
} from "@angular/core";

import { ButtonComponent } from "../button";

import { BitFormFieldComponent } from "./form-field.component";

@Directive({
  selector: "[bitPasswordInputToggle]",
})
export class BitPasswordInputToggleDirective implements AfterViewInit, OnChanges {
  @Input() toggled = false;
  @Output() toggledChanged = new EventEmitter<boolean>();

  @HostListener("click") onClick() {
    this.toggled = !this.toggled;
    this.toggledChanged.emit(this.toggled);

    this.update();

    this.formField.input?.focus();
  }

  constructor(@Host() private button: ButtonComponent, private formField: BitFormFieldComponent) {}

  get icon() {
    return this.toggled ? "bwi-eye-slash" : "bwi-eye";
  }

  ngOnChanges(): void {
    this.update();
  }

  ngAfterViewInit(): void {
    this.toggled = this.formField.input.type !== "password";
    this.button.icon = this.icon;
  }

  private update() {
    this.button.icon = this.icon;
    if (this.formField.input?.type != null) {
      this.formField.input.type = this.toggled ? "text" : "password";
    }
  }
}
