import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { reducer } from './state/menu.reducer';
import { StoreModule } from '@ngrx/store';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatMenuModule,
    FormsModule,
    StoreModule.forFeature('menu', reducer),
    MatBadgeModule, 
    MatGridListModule,
    MatButtonModule,
    RouterModule 
  ],
  exports: [MenuComponent]

})
export class TopMenuModule { }
