import { exercise } from './exercise';


export class Workout {
    workout_id : string
    description : string 
    projectedTime : string  
    exercises : string[]

    constructor(exercise_id: string,description : string, projectTime : string, exercises : string[]){
        this.description = description
        this.workout_id = exercise_id
        this.projectedTime = projectTime
        this.exercises = exercises
    }
}