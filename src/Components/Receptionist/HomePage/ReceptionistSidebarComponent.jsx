import React from 'react';
import {Link} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { width } from '@mui/system';




function ReceptionistSidebarComponent() {
  
    return (
     <>

    
         
        
        <div className='sidebar__'>

        
       
            
            <nav className='sidebar__ '>
             
            
            <label>
                
                <DashboardIcon/>DashBoard</label>
                 <br></br>
                
                 
                
                
                
                {/* //<Link  className='sidebar__text'><span>Reports</span></Link><br /><br /> */}
               
                <Link to="/receptionist/roomavl" className='sidebar__text'><span>RoomAvl</span></Link><br/>
                <Link to="/receptionist/reservation" className='sidebar__text'><span>Reservation</span></Link><br/>
                {/* <Link to="/owner/room" className='sidebar__text'><span>Room</span></Link> */}
                {/* <img src='images/photo.png' style={{padding:"0 0 0 180px"}}/>  */}
                
            </nav>    

           



              
        </div>
                  
        </>
    )
}

export default ReceptionistSidebarComponent
