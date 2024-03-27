export interface IBookingService {
      bookRoom (id: string, userId: string)
      listRooms ()
      getRoom (id: string)
      cancelRoom (id: string)
}