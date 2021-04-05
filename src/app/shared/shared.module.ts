import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

import { HeaderComponent } from './components/header/header.component';
const components = [HeaderComponent];

import { NameObjJoinPipe } from './pipes/name-obj-join.pipe';
import { JoinPipe } from './pipes/join.pipe';
const pipes = [NameObjJoinPipe, JoinPipe];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [CommonModule],
  exports: [CommonModule, NgSelectModule, ...components, ...pipes],
})
export class SharedModule {}
