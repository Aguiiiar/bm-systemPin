import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    Bm(): string;
    checkPin(pin: string): string;
    genPin(authorization: string): string;
}
