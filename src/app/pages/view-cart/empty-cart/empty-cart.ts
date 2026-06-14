import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-empty-cart',
  imports: [MatIcon],
  template: `<div class="flex items-center justify-center min-h-[500px] px-4">
      <div class="text-center max-w-md">
        <!-- Shopping Cart Icon -->
        <div class="mb-6 flex justify-center">
          <div class="relative w-24 h-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center shadow-lg">
            <mat-icon class="text-blue-500" [style.font-size.px]="64" [style.width.px]="64" [style.height.px]="64">shopping_cart</mat-icon>
          </div>
        </div>

        <!-- Title -->
        <h2 class="text-3xl font-bold text-gray-900 mb-3">Your Cart is Empty</h2>

        <!-- Description -->
        <p class="text-gray-600 text-lg mb-8 leading-relaxed">
          Looks like you haven't added any items to your cart yet. Start shopping and add your favorite products!
        </p>

     

        <!-- Secondary Info -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <p class="text-sm text-gray-500 mb-4">💡 Pro Tip: Add items to your cart to checkout later!</p>
        </div>
      </div>
    </div> `,
  styles: ``,
})
export class EmptyCart {}