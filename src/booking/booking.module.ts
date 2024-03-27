import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';

@Module({
  imports: [],
  providers: [{
      provide: 'IBookingService',
      useClass: BookingService
  }],
})
export class BookingModule {}
