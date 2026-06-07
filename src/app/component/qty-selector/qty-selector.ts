import { Component, input, output } from '@angular/core';
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-qty-selector',
  imports: [MatAnchor, MatIconButton, MatIcon],
  template: ` 
    <div class="flex items-center gap-3 justify-end">
      <div class="inline-flex items-center">
        <button matIconButton [disabled]="quntity() ===1 " (click)="qtyUpdate.emit(quntity()-1)" >
          <mat-icon>remove</mat-icon>
        </button>
        <div class="px-3">{{quntity()}}</div>
        <button matIconButton (click)="qtyUpdate.emit(quntity()+1)">
            <mat-icon>add</mat-icon>
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class QtySelector {
  quntity = input(0);
  qtyUpdate = output<number>();
}
