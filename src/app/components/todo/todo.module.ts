import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/modules/shared.module';

import { TodoComponent } from './todo.component';
import { TodoCardComponent } from './todo-card/todo-card.component';

@NgModule({
  declarations: [TodoComponent, TodoCardComponent],
  imports: [SharedModule],
  exports: [TodoComponent]
})
export class TodoModule {

}
