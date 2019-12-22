export class User {
    name : string
    username : string 
    email : string 
    current_program : string

    constructor(name : string, username : string, email : string, current_program : string) {
        this.name = name
        this.username = username
        this.email = email
        this.current_program = current_program
    }
}