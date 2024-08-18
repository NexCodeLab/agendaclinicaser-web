import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const MATERIAL_MODULES = [];

export const DECLARATION_COMPONENTS = [];

@NgModule({
  declarations: [...DECLARATION_COMPONENTS],
  imports: [CommonModule, ...MATERIAL_MODULES],
})
export class SharedModule {}
