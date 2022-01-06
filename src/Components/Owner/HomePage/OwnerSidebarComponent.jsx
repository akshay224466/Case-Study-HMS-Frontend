import React from 'react';
import {Link} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { width } from '@mui/system';




function OwnerSidebarComponent() {
  
    return (
     <>

    
         
        
        <div className='sidebar__'>

        
       
            
            <nav className='sidebar__ '>
             
            
            <label>
                
                <DashboardIcon/>DashBoard</label>
                 <br></br>
                
                 <br/>
                
                
                
                {/* //<Link  className='sidebar__text'><span>Reports</span></Link><br /><br /> */}
               
                <Link to="/owner/department" className='sidebar__text'><span>Department</span></Link><br/><br/>
                <Link to="/owner/staff" className='sidebar__text'><span>Staff</span></Link><br/><br/>
                <Link to="/owner/room" className='sidebar__text'><span>Room</span></Link><br/>
                {/* <Link to="/owner/report" className='sidebar__text'><span>Reports</span></Link> */}
                {/* <img src='images/photo.png' style={{padding:"0 0 0 180px"}}/>  */}
                
            </nav>    

           



              
        </div>
                  
        </>
    )
}

export default OwnerSidebarComponent
