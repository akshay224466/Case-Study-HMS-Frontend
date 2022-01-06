
import axios from 'axios';

const  Reservation_API_URL="http://localhost:8084/reservation/ShowAllReservations";
const  Reservation_Add_API_URL="http://localhost:8084/reservation/addReservation";
 const Reservation_GetById_API_URL="http://localhost:8084/reservation/getByreservation";
 const Reservation_Delete_API_URL="http://localhost:8084/reservation/cancelReservation";
class ReservationService{
    getReservation(){
        return axios.get( Reservation_API_URL);
    }

    addReservation(book){
        return axios.post(Reservation_Add_API_URL,book);
    }
   
    getReservationById(bookingId){
        return axios.get(Reservation_GetById_API_URL+ '/' + bookingId);
    }
    

//     updateDepartment(departmentId,department)
//     {
//         return axios.put(Department_Update_API_URL + '/' +departmentId,department);
//     }

    deleteReservation(bookingId){
        return axios.delete(Reservation_Delete_API_URL + '/' +bookingId);
    }

}
   


export default new ReservationService ()