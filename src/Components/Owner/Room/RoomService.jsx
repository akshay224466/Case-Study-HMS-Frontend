import axios from 'axios';

const  Room_API_URL="http://localhost:8086/rooms/findAllRoom";
//const  Room_GetByRoom_API_URL="http://localhost:8086/rooms/findRoomAvl";
const  Room_GetById_API_URL="http://localhost:8086/rooms/findById";
const   Room_Delete_API_URL="http://localhost:8086/rooms/delete";


class RoomService{
    getRoom(){
        return axios.get( Room_API_URL);
    }

   
   
    getRoomById(roomId){
        return axios.get( Room_GetById_API_URL+ '/' + roomId);
    }

    // getRoomAvl(){
    //     return axios.get( Room_GetByRoom_API_URL);
    // }
    

   

    deleteRoom(roomId){
        return axios.delete( Room_Delete_API_URL + '/' +roomId);
    }

}

export default new RoomService ()