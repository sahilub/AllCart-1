import { Component } from '@angular/core';
import {MatButton , MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatBadge } from "@angular/material/badge";
import { EcommerceStore } from '../../ecommerce-store';
import { inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-header-action',
  imports: [MatButton ,MatIconButton , MatIcon , RouterLink , MatBadge],
  template: ` 
  <div class="flex item-center gap-2">

    <button matIconButton routerLink="/wishlist" [matBadge]="store.wishlistCount()" [matBadgeHidden]="store.wishlistCount()=== 0">
      <mat-icon >favorite</mat-icon>
    </button>
    
    <button matIconButton  routerLink="/cart" [matBadge]="store.cartCount()" [matBadgeHidden]="store.cartCount()=== 0">
      <mat-icon>shopping_cart</mat-icon>
    </button>

    <button matButton>Sign in</button>
    <button matButton="filled">Sign up</button>

  </div>
  `,
  styles: ``,
})
export class HeaderAction {

  store = inject(EcommerceStore)
}
