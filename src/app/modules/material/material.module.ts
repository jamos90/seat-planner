import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  exports: [DragDropModule],
  imports: [CommonModule]
})
export class MaterialModule {}
