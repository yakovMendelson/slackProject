import { createAction, props, createReducer, on, Action } from '@ngrx/store';
import { ISingleUser, initialState, IStateArrayUsers } from './ModelUsers';

export const addUser = createAction(
    '[Add User] User',
    props<ISingleUser>()
  );







  const eventsReducer = createReducer(initialState,
    on(addUser, (state: IStateArrayUsers, newUser: ISingleUser): IStateArrayUsers => {
      console.log({...state,Users:[...state.Users,newUser]});
      
      return {...state,Users:[...state.Users,newUser]}
    }),
  );
  
    
  
  export function reducer(state: IStateArrayUsers | undefined, action: Action) {
    return eventsReducer(state, action);
  }