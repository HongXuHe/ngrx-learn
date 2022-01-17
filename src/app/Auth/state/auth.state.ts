export interface AuthState{
    email:string,
    password:string
}

export const authStateInit:AuthState ={
    email:'',
    password:''
}