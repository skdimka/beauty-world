import { AuthService } from './services/auth/auth.service';
import { Response } from 'express';
export declare const ReqUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
declare class AuthDto {
    userName: string;
    password: string;
}
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(authData: AuthDto, response: Response): Promise<void>;
    logout(response: Response): Promise<void>;
    refreshToken(user: any, response: Response): Promise<void>;
    private _setAuthHeaders;
}
export {};
