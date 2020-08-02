export interface ISingleUser {
    id:number;
    name:string;
    phone:string;
  }


export interface IStateArrayUsers {
    Users: ISingleUser[];
}

export interface AppState {
    Users :IStateArrayUsers,
    login : boolean
  }

export const initialState: IStateArrayUsers = {
    Users: []
};
