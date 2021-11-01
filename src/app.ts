import express, {Request, Response, NextFunction} from 'express';

const app = express();

app.get('/', (request:Request, response:Response, next: NextFunction) => {
  response.send('hello world!');
});

console.log(100)

app.listen(3000,()=>{
  console.log('start')
})