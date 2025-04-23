// import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
// TODO: class validator jó cucc?

export class CreateUserInputDto {
  //   @IsNotEmpty()
  username: string;

  //   @IsEmail()
  email: string;

  //   @MinLength(6)
  password: string;

  //   @IsNotEmpty()
  firstName: string;

  //   @IsNotEmpty()
  lastName: string;
}
