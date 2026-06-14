import { Component, inject } from '@angular/core';
import { BackButton } from "../../component/back-button/back-button";
import { ListCartItems } from "./list-cart-items/list-cart-items";
import { TeaseWishlist } from "./tease-wishlist/tease-wishlist";
import { SummarizeOrder } from "../../component/summarize-order/summarize-order";
import { EcommerceStore } from '../../ecommerce-store';
import { MatIcon } from "@angular/material/icon";
import { MatAnchor } from "@angular/material/button";
import { EmptyCart } from "./empty-cart/empty-cart";

@Component({
  selector: 'app-view-cart',
  imports: [BackButton, ListCartItems, TeaseWishlist, SummarizeOrder, MatIcon, MatAnchor, EmptyCart],
  template: ` 

  <div class="mx-auto max-w-[1200px] py-6">
  <app-back-button class="mb-6" navigateTo="/products/all" >Continue Shopping</app-back-button>  
  @if (store.cartCount()>0 || store.wishlistCount() >0) {
    <h1 class="text-3xl font-extrabold mb-4">Shopping Cart</h1>

    <app-tease-wishlist class="mb-6 block" />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <app-list-cart-items></app-list-cart-items>
      </div>
      <app-summarize-order></app-summarize-order>

    </div>
    <div class="mt-8 flex justify-center">
          <button matButton="outlined" class="danger" (click)="store.clearAddtoCart()">
            Clear Add to Cart
          </button>
    </div>
    '
    } 
  @else {
    <app-empty-cart></app-empty-cart>
  }

  </div>
  
  
  `,
  
  styles: ``,
})
export  default class ViewCart {
  store= inject(EcommerceStore);

}
