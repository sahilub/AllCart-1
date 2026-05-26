import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-wishlist',
  imports: [MatButton, MatIcon, RouterLink],
  template: `
    <div class="flex items-center justify-center min-h-[500px] px-4">
      <div class="text-center max-w-md">
        <!-- Heart Icon -->
        <div class="mb-6 flex justify-center">
          <div class="relative w-24 h-24 bg-gradient-to-br from-red-50 to-pink-50 rounded-full flex items-center justify-center shadow-lg">
            <mat-icon class="text-red-500" [style.font-size.px]="64" [style.width.px]="64" [style.height.px]="64">favorite_border</mat-icon>
          </div>
        </div>

        <!-- Title -->
        <h2 class="text-3xl font-bold text-gray-900 mb-3">Your Wishlist is Empty</h2>

        <!-- Description -->
        <p class="text-gray-600 text-lg mb-8 leading-relaxed">
          Looks like you haven't added any items to your wishlist yet. Start exploring and add your favorite products!
        </p>

     

        <!-- Secondary Info -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <p class="text-sm text-gray-500 mb-4">💡 Pro Tip: Add items to your wishlist to save them for later!</p>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class EmptyWishlist {}
