import { Injectable } from "@nestjs/common";
import { IBookingService } from "./interfaces/i.booking.service";

@Injectable()
export class BookingService implements IBookingService {
      listRooms() {
            throw new Error("Method not implemented.");
      }
      bookRoom (id: string, userId: string) {
            throw new Error("Method not implemented.");
      }
      getRoom (id: string) {
            throw new Error("Method not implemented.");
      }
      cancelRoom (id: string) {
            throw new Error("Method not implemented.");
      }     
}