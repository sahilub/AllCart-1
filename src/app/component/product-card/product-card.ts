import { Component, input, output, signal } from '@angular/core';
import { product } from '../../models/product';
import { MatAnchor, MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-product-card',
  imports: [MatAnchor, MatIcon , MatButton],
  template: `   
   <div class="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
    <img [src]="product().imageurl" class="w-full h-[300px] object-cover rounded-t-xl" />
      
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
          <button matButton="filled" class="flex item-center gap-2" (click)="addtocartClick.emit(product())">
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
}
