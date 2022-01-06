import { BorderOuterOutlined } from '@mui/icons-material';
import React, { Component } from 'react'
import RoomService from './RoomService'
import "./RoomList.css";
import OwnerSidebarComponent from './OwnerSidebarComponent';



export default class RoomList extends Component {
    constructor(props){
        super(props)

        this.state= {
            rooms: []
        }
        // this.state={
        //     roomsavl:[]
        // }

       
       
        this.deleteRoom=this.deleteRoom.bind(this);
    }

    componentDidMount(){
       RoomService.getRoom().then((res)=>{
           this.setState({rooms:res.data.allRoom});
             
        });
        // RoomService.getRoomAvl().then((res)=>{
        //     this.setState({roomsavl:res.data.allRoom});
              
        //  });
    }

        deleteRoom(Id){
        RoomService.deleteRoom(Id).then( res => {
             this.setState({rooms: this.state.rooms.filter(room => room.roomId !== Id)});
         });
         }


         
    render() {
        return (
            <div className='room'>

                <OwnerSidebarComponent/>
                <div className='content'><br/>

                    <h2  className="text-center">Room Details</h2>
                   
                    <br />
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead className='table__header'>
                                <tr>
                                    <th>Room Id</th>
                                    <th>Room Charges</th>
                                    <th>Room Type</th>
                                    <th>Room Description</th>
                                    {/* <th>Room Available</th> */}
                                    <th>Actions</th>
                                     
                                </tr>
                            </thead>


                            <tbody>
                                {
                                    this.state.rooms.map(
                                        room => 
                                        <tr key={room.roomId}>
                                             <td>{room.roomId}</td>
                                            <td>{room.roomCharges}</td>
                                            <td>{room.roomType}</td>
                                            <td>{room.roomDesc}</td>
                                            {/* <td>{room.roomAvl}</td> */}
                                            
                                            <td>
                                                 
                                                <button style={{marginLeft: "10px"}}onClick={ () => this.deleteRoom(room.roomId)} className="btn btn-danger">Delete </button>
                                               
                                                </td>
                                        </tr>
                                    )
                                }
                            </tbody>


                        </table>
                    </div>

                </div>

            </div>
        )
    }
}