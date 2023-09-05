import { FindOneRequest } from '@beherit/grpc/protobufs/user.pb';
import { Type } from 'class-transformer';
import { IsEmail } from 'class-validator';

export class FindOneDto implements FindOneRequest {
  @Type(() => String)
  @IsEmail()
  email: string;
}
