import {Workout} from "../model/workout";

export class Program {
    program_id : string 
    author_id : string
    workouts : Workout[]
    description : string 
    
    constructor(program_id : string, author_id : string, workouts : Workout[], description : string){
        this.program_id = program_id
        this.author_id = author_id
        this.workouts = workouts
        this.description = description
    }
} 