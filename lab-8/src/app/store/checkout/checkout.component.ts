import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { OrderRepository } from '../../model/order.repository';
import { Order } from '../../model/order.model';
import { Component, ViewChild } from '@angular/core';

interface OrderForm {
  name: FormControl<string>;
  address: FormControl<string>;
  city: FormControl<string>;
  state: FormControl<string>;
  zip: FormControl<string>;
  country: FormControl<string>;
}

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;

  'orderForm': FormGroup<OrderForm>;

  @ViewChild(FormGroupDirective)
  private 'formDirective': FormGroupDirective;

  constructor(
    public repository: OrderRepository,
    public order: Order,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.orderForm = this.fb.nonNullable.group<OrderForm>({
      name: this.fb.nonNullable.control('', [Validators.required]),
      city: this.fb.nonNullable.control('', [Validators.required]),
      address: this.fb.nonNullable.control('', [Validators.required]),
      zip: this.fb.nonNullable.control('', [Validators.required]),
      country: this.fb.nonNullable.control('', [Validators.required]),
      state: this.fb.nonNullable.control('', [Validators.required]),
    });
  }

  submitOrder() {
    if (!this.orderForm.valid) {
      Object.values(this.orderForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

      return;
    }

    const newOrderPayload = this.orderForm.getRawValue();

    this.repository
      .saveOrder(Object.assign(this.order, newOrderPayload))
      .subscribe(() => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });

    this.formDirective.resetForm();
  }
}
