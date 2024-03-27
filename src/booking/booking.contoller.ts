import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { IBookingService } from './interfaces/i.booking.service';

@Controller()
export class BookingController {
  constructor(private readonly bookingService: IBookingService) {}

  @Post()
  bookRoom (@Body() bookRoomParams) {
      const userId = '';
      return this.bookingService.bookRoom(bookRoomParams.id, userId);
  }

  @Get()
  getRoomsList () {
      return this.bookingService.listRooms();
  }

  @Get(':id')
  getRoomById (@Param('id') id: string) {
      return this.bookingService.getRoom(id);
  }

  @Put(':id')
  cancelRoom (@Param('id') id: string) {
      return this.bookingService.cancelRoom(id);
  }
}
