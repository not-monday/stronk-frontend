export class weight {
    user_id : string 
    date : Date
    weight : Number

    constructor(user_id : string, date : Date, weight : Number){
        this.user_id = user_id
        this.date = date 
        this.weight = weight
    }
}