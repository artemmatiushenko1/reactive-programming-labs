import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValueSize]',
})
export class ValueSizeDirective {
  @Input('appValueSize') selectedSize = 18;
  @Input() defaultSize = 16;

  private fontSize: string;
  private fontWeight = 'normal';

  constructor() {
    this.fontSize = this.toFontSizeString(this.defaultSize);
  }

  private toFontSizeString(value: number) {
    return `${value}px`;
  }

  @HostBinding('style.fontSize') get getFontSize() {
    return this.fontSize;
  }

  @HostBinding('style.fontWeight') get getFontWeight() {
    return this.fontWeight;
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontWeight = 'bold';
    this.fontSize = this.toFontSizeString(this.selectedSize);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fontWeight = 'normal';
    this.fontSize = this.toFontSizeString(this.defaultSize);
  }
}
