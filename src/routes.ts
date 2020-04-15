import { Request, Response} from 'express';
import CreateUser from './services/CreateUser';

export function callbackMessage(request: Request, response: Response) {
  const dataUser = CreateUser({
    name: 'Kramer', 
    email: 'guilherme.kramer98@gmail.com', 
    password: 'abcdefg',
    phones: [
      { number: '132456789' , active: 1},
      { number: '987654321' , active: 0},
    ]
  });
  
  return response.json(dataUser);
}