import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight;
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.highlightElement(this.appHighlight);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlightElement('');
  }

  highlightElement(colorValue: string) {
    this.el.nativeElement.style.backgroundColor = colorValue;
  }
}
