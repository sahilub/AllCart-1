import { Component, computed, inject, input } from '@angular/core';
import { CartItem } from '../../models/cart';
import { EcommerceStore } from '../../ecommerce-store';
import { QtySelector } from "../../component/qty-selector/qty-selector";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-show-cart-item',
  imports: [QtySelector, MatIconButton, MatIcon],
  template: ` 
    <div class="grid grid-cols-3 grid-colos-[3fr-1fr-1fr]">
        <div class="flex item-center gap-4">
            <img [src]="item().product.imageurl" class="w-24 h-24 rounded-lg object-cover" alt=""/>
            <div>
              <div class="text-gray-900 text-lg font-semibold">{{item().product.name}}</div>
              <div class="text-gray-600 text-lg ">\${{item().product.price}}</div>
            </div>
        </div>
        <app-qty-selector [quntity]="item().quantity"  
        (qtyUpdate)="store.setItemQuantity({productId:item().product.id , quantity:$event})"/>
        <div class="flex flex-col item-end">
          <div class="text-right font-semibold text-lg">
            \${{ total()}}
          </div>
          <div class="flex justify-end -me-3">
            <button matIconButton (click)="store.moveToWishist(item().product)">
              <mat-icon>favorite_border</mat-icon>
            </button>
            <button matIconButton class="danger" (click)="store.removeFromCart(item().product)">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
        </div>


    </div> 
  `,
  styles: ``,
})
export class ShowCartItem {
  item = input.required<CartItem>();
  store = inject(EcommerceStore);
  total = computed(() => (this.item().product.price * this.item().quantity ).toFixed(2))
}
