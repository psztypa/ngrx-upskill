import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ShellComponent]
})
export class SharedModule { }
