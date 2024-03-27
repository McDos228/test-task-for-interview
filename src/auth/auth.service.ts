import { Injectable } from "@nestjs/common";
import { IAuthService } from "./interfaces/i.auth.service";

@Injectable()
export class AuthService implements IAuthService {
      signUp() {
            throw new Error("Method not implemented.");
      }
      signIn() {
            throw new Error("Method not implemented.");
      }
      signOut() {
            throw new Error("Method not implemented.");
      }
}