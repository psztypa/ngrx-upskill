import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { reducer } from './state/menu.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatMenuModule,
    FormsModule,
    StoreModule.forFeature('menu', reducer),
  ],
  exports: [MenuComponent]

})
export class TopMenuModule { }
