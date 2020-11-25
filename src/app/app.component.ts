import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoModel } from './store/todo-state.model';
import { TodoSelectors } from './store/todo.selectors';
import { TodoService } from './store/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent  {

  @Select(TodoSelectors.items)
  items$: Observable<TodoModel[]>

  newTitle: string

  constructor(public todoService: TodoService) {}
}
