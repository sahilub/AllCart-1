import { Component, computed, input, signal } from '@angular/core';

import { product } from '../../models/product';
import { ProductCard } from "../../component/product-card/product-card";
import {MatSidenav , MatSidenavContainer , MatSidenavContent } from '@angular/material/sidenav'
import { MatNavList, MatListItem, MatListItemTitle } from '@angular/material/list'
import { RouterLink } from "@angular/router";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  imports: [TitleCasePipe,ProductCard, MatSidenav, MatSidenavContainer, MatSidenavContent, MatNavList, MatListItem, MatListItemTitle, RouterLink],
  template: ` 

  <mat-sidenav-container >
     <mat-sidenav mode='side' opened="true">
      <div class="p-6">
        <h2  class="text-lg text-gray-900">
          Categories
        </h2>
        <mat-nav-list>
          @for (cat of categories(); track category) {
            <mat-list-item [activated]="cat === category()" class="my-2" [routerLink]="['/products',cat]">
              <span matListItemTitle class="font-medium" [class]="cat === category()? '!text-white':null ">{{cat | titlecase}}</span>
            </mat-list-item>
          }

        </mat-nav-list>


      </div>
     </mat-sidenav>  
      <mat-sidenav-content class="bg-gray-100 p-6 h-full" >
     
      <h1 class="text-2xl font-bold text-gray-900 mb-1">{{ category() | titlecase}}</h1> 
      <p class="text-base text-gray-600 mb-6">
          {{filterProducts().length}} products found
      </p>
        <div class="responsive-grid">
          @for (product of filterProducts(); track product.id) {
          <app-product-card [product]="product"  />
          }
        </div> 

    </mat-sidenav-content>
  </mat-sidenav-container>

   <div class="bg-gray-100 p-6 h-full">
 
  </div>

   
   `,
  styles: ``,
})
export default class ProductsGrid {

    category = input<string>('all');
    addtocart(){
      
    }
    categories = signal<string[]>(['all','Electronics', 'Home Appliances', 'Outdoor Gear', 'Furniture', 'Apparel', 'Fitness', 'Kitchen', 'Grocery', 'Home Decor', 'Toys & Games'])

    products = signal<product[]>([
      {
    id: 1,
    name: "Noise-Cancelling Wireless Headphones",
    price: 199.99,
    discription: "High-quality wireless headphones with active noise cancellation, deep bass, and a 30-hour battery life.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Wireless+Headphones",
    rating: 4.8,
    reviewCount: 1245,
    inStock: true,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Programmable Espresso Machine",
    price: 299.50,
    discription: "Brew barista-quality espresso at home with this fully programmable machine featuring a built-in milk frother.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Espresso+Machine",
    rating: 4.5,
    reviewCount: 432,
    inStock: false,
    category: "Home Appliances"
  },
  {
    id: 3,
    name: "Waterproof Hiking Backpack",
    price: 79.99,
    discription: "Durable, waterproof 50L backpack perfect for long hiking trips, camping, and outdoor adventures.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Hiking+Backpack",
    rating: 4.7,
    reviewCount: 890,
    inStock: false,
    category: "Outdoor Gear"
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: 159.00,
    discription: "Comfortable mesh office chair with lumbar support, adjustable armrests, and tilt mechanism.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Office+Chair",
    rating: 4.2,
    reviewCount: 215,
    inStock: true,
    category: "Furniture"
  },
  {
    id: 5,
    name: "Smart Fitness Watch",
    price: 129.99,
    discription: "Track your steps, heart rate, and sleep patterns. Includes GPS and is water-resistant up to 50 meters.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Fitness+Watch",
    rating: 4.6,
    reviewCount: 3410,
    inStock: true,
    category: "Electronics"
  },
  {
    id: 6,
    name: "High-Speed Blender",
    price: 89.99,
    discription: "1200W motor easily crushes ice, blends smoothies, and purees soups in seconds.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=High-Speed+Blender",
    rating: 4.4,
    reviewCount: 678,
    inStock: true,
    category: "Home Appliances"
  },
  {
    id: 7,
    name: "4-Person Camping Tent",
    price: 145.00,
    discription: "Spacious dome tent with easy setup, waterproof rainfly, and excellent ventilation.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Camping+Tent",
    rating: 4.3,
    reviewCount: 156,
    inStock: false,
    category: "Outdoor Gear"
  },
  {
    id: 8,
    name: "Electric Standing Desk",
    price: 249.00,
    discription: "Adjustable height desk with memory presets and a spacious wooden top for a healthier workspace.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Standing+Desk",
    rating: 4.8,
    reviewCount: 920,
    inStock: true,
    category: "Furniture"
  },
  {
    id: 9,
    name: "Men's Trail Running Shoes",
    price: 110.00,
    discription: "Lightweight and breathable running shoes with deep lugs for superior traction on rough terrain.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Running+Shoes",
    rating: 4.5,
    reviewCount: 412,
    inStock: true,
    category: "Apparel"
  },
  {
    id: 10,
    name: "Non-Slip Yoga Mat",
    price: 29.99,
    discription: "Eco-friendly, extra-thick yoga mat providing excellent cushioning and grip for all floor exercises.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Yoga+Mat",
    rating: 4.7,
    reviewCount: 2045,
    inStock: true,
    category: "Fitness"
  },
  {
    id: 11,
    name: "6-Inch E-Reader",
    price: 99.99,
    discription: "Glare-free screen that reads like real paper, even in direct sunlight, with weeks of battery life.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=E-Reader",
    rating: 4.9,
    reviewCount: 8540,
    inStock: true,
    category: "Electronics"
  },
  {
    id: 12,
    name: "10-Inch Cast Iron Skillet",
    price: 24.50,
    discription: "Pre-seasoned cast iron skillet for unparalleled heat retention and even heating.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Cast+Iron+Skillet",
    rating: 4.8,
    reviewCount: 5210,
    inStock: true,
    category: "Kitchen"
  },
  {
    id: 13,
    name: "Zero Degree Sleeping Bag",
    price: 65.00,
    discription: "Mummy-style sleeping bag designed to keep you warm in extreme cold weather conditions.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Sleeping+Bag",
    rating: 4.4,
    reviewCount: 310,
    inStock: true,
    category: "Outdoor Gear"
  },
  {
    id: 14,
    name: "Mechanical Gaming Keyboard",
    price: 85.99,
    discription: "RGB backlit mechanical keyboard with tactile blue switches for precise typing and gaming.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Gaming+Keyboard",
    rating: 4.6,
    reviewCount: 1120,
    inStock: false,
    category: "Electronics"
  },
  {
    id: 15,
    name: "Ergonomic Wireless Mouse",
    price: 35.00,
    discription: "Vertical wireless mouse designed to reduce wrist strain during long hours of computer use.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Wireless+Mouse",
    rating: 4.3,
    reviewCount: 890,
    inStock: true,
    category: "Electronics"
  },
  {
    id: 16,
    name: "LED Desk Lamp with USB Port",
    price: 22.99,
    discription: "Dimmable eye-caring LED lamp with multiple color modes and a built-in USB charging port.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Desk+Lamp",
    rating: 4.5,
    reviewCount: 650,
    inStock: true,
    category: "Home & Office"
  },
  {
    id: 17,
    name: "Organic Whole Bean Coffee",
    price: 14.99,
    discription: "1lb bag of medium roast, ethically sourced whole bean coffee with notes of chocolate and caramel.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Coffee+Beans",
    rating: 4.8,
    reviewCount: 2200,
    inStock: true,
    category: "Grocery"
  },
  {
    id: 18,
    name: "Ceramic Plant Pots (Set of 3)",
    price: 32.00,
    discription: "Modern minimalist ceramic planters with drainage holes, perfect for succulents and small indoor plants.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Plant+Pots",
    rating: 4.7,
    reviewCount: 430,
    inStock: true,
    category: "Home Decor"
  },
  {
    id: 19,
    name: "Insulated Stainless Steel Water Bottle",
    price: 19.99,
    discription: "32oz vacuum-insulated bottle keeps drinks cold for 24 hours or hot for 12 hours.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Water+Bottle",
    rating: 4.9,
    reviewCount: 6700,
    inStock: true,
    category: "Outdoor Gear"
  },
  {
    id: 20,
    name: "Strategic Board Game",
    price: 45.00,
    discription: "Award-winning resource management and strategy board game for 3-4 players. 60-minute playtime.",
    imageurl: "https://placehold.co/400x300/2a2a2a/ffffff?text=Board+Game",
    rating: 4.8,
    reviewCount: 1850,
    inStock: true,
    category: "Toys & Games"
  }
    ])

    filterProducts = computed( () => {
      const selectedCategory = this.category().toLowerCase();
      if (selectedCategory === 'all') {
        return this.products();
      }
      return this.products().filter(p => p.category.toLowerCase() === selectedCategory);
    })

}
