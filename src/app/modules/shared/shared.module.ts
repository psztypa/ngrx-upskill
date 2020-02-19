import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';
import { TopMenuModule } from '../top-menu/top-menu.module';
import { ActionCardComponent } from './components/action-card/action-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ShellComponent, ActionCardComponent],
  imports: [
    CommonModule, RouterModule, TopMenuModule, MatButtonModule, MatGridListModule, MatCardModule
  ],
  exports: [ShellComponent]
})
export class SharedModule { }
