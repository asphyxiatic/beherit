import {
  Catch,
  RpcExceptionFilter as IRpcExceptionFilter,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Observable, throwError } from 'rxjs';

@Catch(RpcException)
export class RpcExceptionFilter implements IRpcExceptionFilter<RpcException> {
  catch(exception: RpcException): Observable<any> {
    return throwError(() => exception.getError());
  }
}
