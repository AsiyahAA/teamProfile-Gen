
// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
    getName(){
        return this.name
    }
    getRole(){
        return "employee"
    }
    getEmail(){
        return this.email
    }
    getId(){
        return this.id
    }

}

module.exports = Employee
