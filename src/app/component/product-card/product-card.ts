import { Component, computed, inject, input, output, signal } from '@angular/core';
import { product } from '../../models/product';
import { MatAnchor, MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-product-card',
  imports: [MatAnchor, MatIcon, MatButton, MatIconButton],
  template: `   
   <div class="relative bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
    <img [src]="product().imageurl" class="w-full h-[300px] object-cover rounded-t-xl" />
    <ng-content/>
      <div class="p-5 flex flex-col flex-1">
        <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-tight">{{product().name}}</h3>
        <p class="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
          {{product().discription}}
        </p>

      <!--  --> 

        <div class="text-sm font-medium mb-4">
          {{product().inStock? 'In Stock' : 'Out of Stock'}}
        </div>

        <div class="flex item-center justify-between mt-auto">
          <span  class="text-2xl font-bold text-gray-900">\${{product().price}}</span>
          <button matButton="filled" class="flex item-center gap-2" (click)="store.addToCart(product() , 1)">
            <mat-icon>shoping_cart</mat-icon>
            Add to Cart
          </button>
        </div>
      
      </div>
     


  </div>
        `,
  styles: ``,
})
export class ProductCard { 

  product = input.required<product>()

  addtocartClick = output<product>()

  store = inject(EcommerceStore);

  isInWishlist= computed(()=> this.store.wishlistItems().find(p=> p.id=== this.product().id))

  toggleWishlist(product: product){
      if(this.isInWishlist()){
        this.store.removeFromWishlist(product)
      }else{
        //add to wishlist
        this.store.addToWishlist(product)
      }
  }
}
