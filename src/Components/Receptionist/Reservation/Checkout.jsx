import React from 'react'
import RoomService from '../../Owner/Room/RoomService';
import { useState ,useEffect} from 'react';
import './Checkout.css'
import { useLocation } from 'react-router-dom';
import GpayButton from './GpayButton';
// import { PaytmButton } from './paytmButton';

function Checkout() {

    const location = useLocation();
    const reservation=location.state.reservation

    const [roomCharges, setroomRent] = useState("")
    const [total, settotal] = useState("")

    const getRoom=async ()=>{
        console.log("hello there"+reservation);
        RoomService.getRoomById(reservation.roomId).then((res)=>{
            setroomRent(res.data.roomCharges);
            settotal(parseInt(roomCharges)*parseInt(reservation.noOfNight));
        });
    }


    useEffect(() => {
        getRoom();
    }, []);

    return (
        <div className='checkout__details'>
            <div className="checkout__content">
                <div className="checkout__row">
                    <label>Room rent</label>
                    <span>{roomCharges}</span>
                </div>
                <div className="checkout__row">
                    <label>Number of Night(s)</label>
                    <span>{reservation.noOfNight}</span>
                </div>
                <div className="checkout__row__footer">
                    <span>Total bill:</span> {parseInt(roomCharges)*parseInt(reservation.noOfNight)}
                </div>
                <GpayButton total={(parseInt(roomCharges)*parseInt(reservation.noOfNight)).toString()}/>

            </div>
            

        </div>
    )
}

export default Checkout
