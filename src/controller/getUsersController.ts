import {Request, Response} from 'express';

const getUsersController = (request: Request, response: Response) => {
    const users: any = [
        {
            name: 'DON',
            age: 13
        },
        {
            name: 'CHER',
            age: 19
        }
    ];
    response.statusCode = 200;
    response.send({
        users: users
    });
}

// interface IName {
//     firstName: string;
//     lastName: string;
// }
// interface IWork {
//     doWork(): void;
// }

// class Base implements IName, IWork {
//     firstName: string;
//     lastName: string;

//     constructor(firstName: string, lastName: string){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     doWork(): void{

//     }
// }

// class Employee extends Base {
//     constructor(firstName: string, lastName: string){
//         super(firstName, lastName);
//     }
    
//     doWork(): void {
//         console.log(`${this.firstName}, ${this.lastName} doing work..`);
//     }
// }

// let emp = new Employee('Don', 'Kim');
// emp.doWork();

export default getUsersController;