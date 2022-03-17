import { Injectable } from '@nestjs/common';
import { genPin, delPin } from './utils/generator.utils';

let pins: string[] = [];

@Injectable()
export class AppService {
  Bm(): string {
    return "BoostMachine - Sempre no topo!!!"
  }

  genPin(authorization: string): string {
    const token = authorization.replace("Bearer ", "").trim();


    if (token === process.env.BM_KEY) {
      const pin = genPin();
      pins.push(pin);

      delPin(pins);
      return pin;
    }

    return "Token invalido";

  }

  checkPin(pin: string): string {

    if (!pins.includes(pin)) return "false";

    return pin;
  }
}
