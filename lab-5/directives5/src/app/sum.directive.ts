import {
  Directive,
  Input,
  OnDestroy,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

interface ISumContext {
  $implicit: number | null;
}

@Directive({
  selector: '[sum]',
})
export class SumDirective implements OnDestroy, OnChanges {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<ISumContext>
  ) {}

  @Input({ required: true }) 'sumFrom': number;
  @Input({ required: true }) 'sumAnd': number;

  ngOnChanges() {
    this.createView();
  }

  ngOnDestroy() {
    this.viewContainer.clear();
  }

  private sum(numA: number, numB: number): number {
    return numA + numB;
  }

  private createView() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef, {
      $implicit:
        this.sumFrom && this.sumAnd
          ? this.sum(this.sumFrom, this.sumAnd)
          : null,
    });
  }
}
