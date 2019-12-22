export class ProgramReviews {
    program_id : string 
    author : string
    rating : string
    review : string 
    constructor(program_id : string, author : string, rating : string, review : string){
        this.program_id = program_id
        this.author = author
        this.rating = rating
        this.review = review
    }
}