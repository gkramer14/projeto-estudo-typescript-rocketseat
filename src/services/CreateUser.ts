/*
 * Cria: Name, Email, Password
 */

interface PhoneObject {
  number: string,
  active: number,
}

interface CreateUserData {
  name?: string,
  email: string,
  password: string,
  phones: Array<PhoneObject>,
}

 export default function CreateUser({ name, email, password, phones }: CreateUserData) {
  const user = {
    name,
    email,
    password,
    phones,
  };

  return user;
 }