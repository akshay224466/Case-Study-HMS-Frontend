
import axios from 'axios';

const  Room_API_URL="http://localhost:8086/rooms/findAllRoom";
const  Room_GetById_API_URL="http://localhost:8086/rooms/findById";
const   Room_Delete_API_URL="http://localhost:8086/rooms/delete";
const   Room_Avl_API_URL="http://localhost:8086/rooms/findRoomAvl";



class RoomService{
    getRoom(){
        return axios.get( Room_API_URL);
    }

   
   
    getRoomById(roomId){
        return axios.get( Room_GetById_API_URL+ '/' + roomId);
    }


    deleteRoom(roomId){
        return axios.delete( Room_Delete_API_URL + '/' +roomId);
    }

    getRoomAvl(){
        return axios.get( Room_Avl_API_URL  );
    }

}

export default new RoomService ()