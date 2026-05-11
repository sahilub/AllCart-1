import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderAction } from "../header-action/header-action";

@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderAction],
  template: `
    <mat-toolbar class="w-full elevated py-2"> 

      <div class="max-w-[1200px] mx-auto w-full flex item-center justify-between">
        <span>TollBar</span>
        <app-header-action/>
      </div>
    
    </mat-toolbar> `,
  styles: ``,
})
export class Header {}
