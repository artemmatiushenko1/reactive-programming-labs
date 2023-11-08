import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[counterOf]',
})
export class CounterDirective {
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>
  ) {}

  @Input('counterOf') counter: number = 0;

  ngOnChanges() {
    this.container.clear();

    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(this.template, { $implicit: i + 1 });
    }
  }
}
