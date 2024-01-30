import { UsersService } from '../users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(userName: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    verifyRefreshToken(refreshToken: string): any;
    getCookieWithJwtAccessToken(userId: string): {
        cookie: string;
        token: string;
    };
    getCookieWithJwtRefreshToken(userId: string): {
        cookie: string;
        token: string;
    };
}
