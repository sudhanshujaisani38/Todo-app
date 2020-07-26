import {v4 as uuidv4} from "uuid"
export interface Todo{
    id:string,
    title:string,
    isCompleted:boolean,
    date:Date  
}