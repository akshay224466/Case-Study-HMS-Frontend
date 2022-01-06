import React from 'react';
import {Link} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
function ReceptionistSidebar() {
  
    return (
     <>
     
     <div className='sidebar__' >   
     
     <nav className='sidebar__ '>

     <label >
         
         <DashboardIcon/>  DashBoard</label>
     
         <br/>
         <br/>
            
              
                <Link to="/receptionist/room" className='sidebar__text'><span>RoomAvl</span></Link>
                <br/>
                <br/>
                <Link to="/receptionist/reservation" className='sidebar__text'><span>Reservation</span></Link>
              
              
        </nav>
         
        </div>
       
        </>
    )
}

export default ReceptionistSidebar
