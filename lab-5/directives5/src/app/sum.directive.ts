import {
  Directive,
  DoCheck,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

interface ISumContext {
  $implicit: number;
}

@Directive({
  selector: '[sum]',
})
export class SumDirective implements OnDestroy, DoCheck {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<ISumContext>
  ) {}

  @Input({ required: true }) 'sumFrom': number;
  @Input({ required: true }) 'sumAnd': number;

  ngDoCheck() {
    this.createView();
  }

  ngOnDestroy() {
    this.viewContainer.clear();
  }

  private createView() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef, {
      $implicit: this.sumFrom && this.sumAnd ? this.sumFrom + this.sumAnd : '',
    });
  }
}
