
import React, { Component } from 'react'

import ReceptionistSidebar from './ReceptionistSidebar'
import ReservationService from './ReservationService';
import { Link } from 'react-router-dom';



 class ReservationList extends Component {
    constructor(props){
        super(props)

        this.state= {
            reservations: []
        }

        this.addReservation = this.addReservation.bind(this);
        this.editReservation = this.editReservation.bind(this);
        this.deleteReservation=this.deleteReservation.bind(this);
    }

    componentDidMount(){
        ReservationService.getReservation().then((res)=>{
           this.setState({reservations:res.data.resList});
             
        }); 
    }
    addReservation(){
        this.props.history.push('/add-reservation');
    
}
editReservation(Id){
    this.props.history.push(`/update-reservation/${Id}`);
}

deleteReservation(bookingId){
   ReservationService.deleteReservation(bookingId).then( res => {
        this.setState({reservations: this.state.reservations.filter(reservation => reservation.bookingId !== bookingId)});
    });
    }


    render() {
        return (
            <div className='department'>

                <ReceptionistSidebar/>
                  <div className='content'>                 
                    <br/>
                    <h1  >Reservation Details</h1>
                    <div><br/>
                        <button className='btn btn-success' onClick={this.addReservation}>Add</button>
                    </div>
                    <br />
                    <div className="table-responsive-lg">
                    <div className="row">
                        <table className="table  table-bordered ">
                            <thead className=' table_header '>
                                <tr>
                                    <th>Booking Id</th>
                                    <th>Room Id</th>
                                    <th>Check In</th>
                                    <th>Check Out</th>
                                    <th>Number of Guests</th>
                                    {/* <th>Final Price</th> */}
                                    <th>No Of Nights</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.reservations.map(
                                        reservation => 
                                        <tr key={reservation.bookingId}>
                                            <td>{reservation.bookingId}</td>
                                            <td>{reservation.roomId}</td>
                                            <td>{reservation.checkin}</td>
                                            <td>{reservation.checkout}</td>
                                            <td>{reservation.numOfGuests}</td>
                                            {/* <td>{reservation.finalPrice}</td> */}
                                            <td>{reservation.noOfNight}</td>

                                            <td>
                                                 <button onClick={ () => this.editReservation(reservation.bookingId)} className="btn btn-dark">Update </button>
                                                <button style={{marginLeft: "10px"}}onClick={ () => this.deleteReservation(reservation.bookingId)} className="btn btn-danger">Delete </button>
                                                {/* <PaytmButton/> */}

                                                <Link to={{pathname:'/receptionist/reservation/checkout',
                                                           state:{ 
                                                            reservation:{
                                                               roomId:reservation.roomId,
                                                               noOfNight:reservation.noOfNight,    
                                                            }
                                                        },
                                                    }}  className='delete_button'>Checkout</Link> 
                                                </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>

{/*           
               <div className="reports__footer">
               <span>Receptionist's Dashboard © 2022 !</span>
               </div> */}
               </div>
            </div>
        )
    }
}
export default ReservationList