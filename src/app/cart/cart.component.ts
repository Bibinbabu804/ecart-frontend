import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  cartItem: any = [];
  cartTotal: number = 0;
  showSuccess: boolean = false;
  showCancel: boolean = false;
  showError: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getCart();
    this.initConfig();
  }

  getCart() {
    this.api.getToCartAPI().subscribe({
      next: (res: any) => {
        console.log(res);
        this.cartItem = res;
        this.totalPrice();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  deleteCart(id: any) {
    this.api.deleteCartAPI(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getCart();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  incrementCart(id: any) {
    this.api.incrementCartAPI(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getCart();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  decrementCart(id: any) {
    this.api.decrementCartAPI(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getCart();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  totalPrice() {
    this.cartTotal = this.cartItem
      .map((item: any) => item.grandTotal || 0)
      .reduce((p1: any, p2: any) => p1 + p2, 0);
    console.log(this.cartTotal);
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data: any) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: this.cartTotal.toFixed(2), // Using cartTotal for dynamic pricing
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: this.cartTotal.toFixed(2)
                }
              }
            },
            items: this.cartItem.map((item: any) => ({
              name: item.title,
              quantity: item.quantity.toString(),
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: item.price.toFixed(2)
              }
            }))
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - full order details: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - transaction completed', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.showCancel = true;
      },
      onError: err => {
        console.log('OnError', err);
        this.showError = true;
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
        this.resetStatus();
      }
    };
  }

  resetStatus() {
    this.showSuccess = false;
    this.showCancel = false;
    this.showError = false;
  }
}
