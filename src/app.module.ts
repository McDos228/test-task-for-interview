import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

const port = Number(process.env.DB_PORT);
const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host,
      port,
      username,
      password,
      database,
      entities: [],
      synchronize: true,
    }),
    BookingModule, 
    AuthModule
  ],
})
export class AppModule {}
