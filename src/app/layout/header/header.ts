import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderAction } from "../header-action/header-action";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbar, HeaderAction],
  template: `
    <mat-toolbar class="w-full elevated sticky top-0 z-50 py-2"> 

      <div class="max-w-[1200px] mx-auto w-full flex items-center justify-between">
        <span>TollBar</span>
        <app-header-action/>
      </div>
    
    </mat-toolbar> `,
  styles: ``,
})
export class Header {}
