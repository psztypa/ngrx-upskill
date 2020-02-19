import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';
import { TopMenuModule } from '../top-menu/top-menu.module';



@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule, RouterModule, TopMenuModule
  ],
  exports: [ShellComponent]
})
export class SharedModule { }
