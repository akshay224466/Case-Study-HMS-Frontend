import React, { Component } from 'react'
import './AddReservation.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



import ReservationService from './ReservationService';

 class AddReservation extends Component {
   

    constructor(props){
        super(props)

        this.state={
            bookingId:'',
            roomId: '',
            checkin:'',
           checkout:''  ,
           numOfGuests: '',
          
           noOfNight:''  
        }
        this.changebookingIdHandler = this.changebookingIdHandler.bind(this);
        this.changeroomIdHandler = this.changeroomIdHandler.bind(this);
        this.changecheckinHandler = this.changecheckinHandler.bind(this);
        this.changecheckoutHandler = this.changecheckoutHandler.bind(this);
        this.changenumOfGuestsHandler = this.changenumOfGuestsHandler.bind(this);
        
        this.saveOrUpdateRservation = this.saveOrUpdateRservation.bind(this);
    }

    saveOrUpdateRservation= (event) => {
        event.preventDefault();
        let reservation = {bookingId:parseInt(this.state.bookingId), roomId:parseInt(this.state.roomId), checkin:this.state.checkin,checkout:this.state.checkout,numOfGuests:parseInt(this.state.numOfGuests),noOfNight:parseInt(this.state.noOfNight)};
        console.log('reservation => ' + JSON.stringify(reservation));

        ReservationService.addReservation(reservation).then(res =>{
            this.props.history.push('/receptionist/reservation');
        });

    }

    changebookingIdHandler= (event) => {
        this.setState({bookingId: event.target.value});
    }

    changeroomIdHandler= (event) => {
        this.setState({roomId: event.target.value});
    }

    changecheckinHandler=date=>{
        // let selectedDateFromCalender = date.toUTCString();
        this.setState({checkin: date});}

    changecheckoutHandler=date=>{
        // let selectedDateFromCalender = date.toUTCString();
        this.setState({checkout: date});}

    changenumOfGuestsHandler=(event) => {
        this.setState({numOfGuests: event.target.value});
    }
    changenoOfNightHandler=(event) => {
        this.setState({noOfNight: event.target.value});
    }
    
    changefinalPriceHandler=(event) => {
        this.setState({finalPrice: event.target.value});
    }

    cancel(){
        this.props.history.push('/receptionist/reservation');
    }


   

    render() {
        return (
            <div className='bg'>
                <br/>
                <div className='container '>
                    <div className='row'>
                  <div className='card  col-md-4 offset-md-1 offset-md-2'>
                         <br/>
                            <h3 className='text-center bg-light text-bold '>Add Reservation</h3>
                            <div className='card-body  '>


                                <form action="">
                                        <div className = "form-group ">
                                            <label> Booking Id: </label>
                                            <input  name="bookingId" className="form-control" 
                                                value={this.state.bookingId} onChange={this.changebookingIdHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Room Id: </label>
                                            <input name="roomId" className="form-control" 
                                                value={this.state.roomId} onChange={this.changeroomIdHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Check In: </label>
                                            <DatePicker className='col-md-12'
                                selected={this.state.checkin}
                                onChange={this.changecheckinHandler}
                                dateFormat='dd/MM/yyyy'
                                minDate={new Date()}
                            />                        
                                        </div>

                                        <div className = "form-group">
                                            <label> Check out: </label>
                                            <DatePicker  className='col-md-12'
                                selected={this.state.checkout}
                                onChange={this.changecheckoutHandler}
                                dateFormat='dd/MM/yyyy'
                                minDate={new Date()}
                            />                        
                                        </div>

                                        <div className = "form-group">
                                            <label>  Num Of Guests: </label>
                                            <input name="numOfGuests" className="form-control" 
                                                value={this.state.numOfGuests} onChange={this.changenumOfGuestsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>  noOfNight: </label>
                                            <input name="noOfNight" className="form-control" 
                                                value={this.state.noOfNight} onChange={this.changenoOfNightHandler}/>
                                        </div>

                                        {/* <div className = "form-group">
                                            <label>Final Price </label>
                                            <input  name="finalPrice" className="form-control" 
                                                value={this.state.finalPrice} onChange={this.changefinalPriceHandler}/>
                                        </div> */}
                                                                                <button className="btn btn-success" onClick={this.saveOrUpdateRservation}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="reports__footer">
               <span>Receptionist's Dashboard © 2022 !</span>
               </div>

            </div>
        )
    }
}
export default AddReservation