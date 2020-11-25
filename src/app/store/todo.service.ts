import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { TodoModel } from './todo-state.model';
import { AddTodo, UpdateTodo } from './todo.actions';
import { TodoSelectors } from './todo.selectors';

@Injectable()
export class TodoService {

  items: TodoModel[]

  constructor(private store: Store) {}

  add(title: string) {
    this.store.dispatch(new AddTodo(title))
    this.items = this.store.selectSnapshot(TodoSelectors.items)
  }

  changeDescription(title: string, order: number) {
    this.store.dispatch(new UpdateTodo(order, title))
  }
}
