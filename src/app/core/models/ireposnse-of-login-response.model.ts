import { LoginResponse } from './login-response.model';
export interface IResponseOfLoginResponse {
    code: number;
    responseMessage: string;
    requestDate: Date;
    success: boolean;
    statusCode: number;
    dataResponse: LoginResponse;
}
