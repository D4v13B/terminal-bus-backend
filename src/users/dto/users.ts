
export class GetUserDto{
  name: string;
  email: string;
}


export class CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export class RegisterUserDto {
  name: string;
  email: string;
  password: string;
}

export class UpdateUserDto {
  id: number;
  name: string;
  email: string;
  password: string;
}

export class DeleteUserDto {
  id: number;
  name: string;
}
