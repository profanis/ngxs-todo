import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { TodoStateModel } from './todo-state.model';
import { AddTodo, ChangeStatus, RemoveTodo, UpdateTodo } from './todo.actions';

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: []
  }
})
@Injectable()
export class TodoState {

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    const state = ctx.getState()

    const newItem = {
      order: state.items.length + 1,
      title: action.title,
      description: '',
      isActive: true
    }

    ctx.setState({
      ...state,
      items: [
        ...state.items,
        newItem
      ]
    });
  }

  @Action(RemoveTodo)
  removeTodo(ctx: StateContext<TodoStateModel>, action: RemoveTodo) {
    const state = ctx.getState()

    const index = state.items.findIndex(it => it.order === action.order)

    ctx.setState({
      ...state,
      items: [
        ...state.items.slice(0, index),
        ...state.items.slice(index+1),
      ]
    });
  }

  @Action(UpdateTodo)
  updateTodo(ctx: StateContext<TodoStateModel>, action: UpdateTodo) {
    const state = ctx.getState()

    const index = state.items.findIndex(it => it.order === action.order)

    ctx.setState({
      ...state,
      items: [
        ...state.items.slice(0, index),
        {...state.items[index], title: action.title},
        ...state.items.slice(index+1),
      ]
    });
  }



  @Action(ChangeStatus)
  changeStatus(ctx: StateContext<TodoStateModel>, action: ChangeStatus) {
    const state = ctx.getState()

    const index = state.items.findIndex(it => it.order === action.order)

    ctx.setState({
      ...state,
      items: [
        ...state.items.slice(0, index),
        {...state.items[index], isActive: action.status},
        ...state.items.slice(index+1),
      ]
    });
  }



}
