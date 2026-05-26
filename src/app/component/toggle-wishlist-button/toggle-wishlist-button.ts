import { Component, computed, input } from '@angular/core';
import { inject } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { product } from '../../models/product';

@Component({
  selector: 'app-toggle-wishlist-button',
  standalone: true,
  imports: [MatIcon, MatIconButton],
  template: `  
  <button class="!absolute z-10 top-3 right-3 w-10 h-10 rounded-full !bg-white border-0 shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg" 
    [class]="isInWishlist()? '!text-red-500':'!text-gray-400'"
    mat-icon-button 
    (click)="toggleWishlist(product())"
  >
    <mat-icon>{{isInWishlist()? 'favorite':'favorite_border'}}</mat-icon> 
  </button>
     `,
  styles: ``,
})


export class ToggleWishlistButton {

  product = input.required<product>();
  
  store = inject(EcommerceStore);

  isInWishlist = computed(() => !!this.store.wishlistItems().find(p => p.id === this.product().id))

  toggleWishlist(product: product){
      if(this.isInWishlist()){
        this.store.removeFromWishlist(product)
      }else{
        //add to wishlist
        this.store.addToWishlist(product)
      }
  }
}
