
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Listdept from './Components/Owner/Department/Listdept';

import AddDepartmentComponent from './Components/Owner/Department/AddDepartmentComponent';
import AddStaffComponent from './Components/Owner/Staff/AddStaffComponent';
// import OwnerSidebarComponent from './Components/Owner/HomePage/OwnerSidebarComponent';

import UpdateDepartmentComponent from './Components/Owner/Department/UpdateDepartmentComponent';
import Home from './Components/MainHomePage/Home';
import StaffList from './Components/Owner/Staff/StaffList';
import RoomList from './Components/Owner/Room/RoomList';
import Login from './Components/MainHomePage/Login';
import OwnerHomePage from './Components/Owner/HomePage/OwnerHomePage';
import Navbar from './Components/MainHomePage/Navbar';
import ManagerComponent from './Components/ManagerComponent';
// import ReceptionistComponent from './Components/ReceptionistComponent';
import Cards from './Components/MainHomePage/Cards';
import SignUp from './Components/MainHomePage/SignUp';
import Reports from './Components/Owner/Reports';
import ReceptionistHomePage from './Components/Receptionist/HomePage/ReceptionistHomePage';
import ReservationList from './Components/Receptionist/Reservation/ReservationList';
import AddReservation from './Components/Receptionist/Reservation/AddReservation';
import ReceptionistRoom from './Components/Receptionist/RoomAvl/ReceptionistRoom';
import Checkout from './Components/Receptionist/Reservation/Checkout';
import PaymentSuccessPage from './Components/Receptionist/Reservation/PaymentSuccessPage';


function App() {
  return (
    <div>
       <Router>
              {/* <HeaderComponent/>       */}

              <Navbar/>
              
            
              <Switch> 
                <Route path="/" exact component={Home}/>
                <Route path="/cards" exact component={Cards}/>
                  <Route path="/owner" exact component={OwnerHomePage} /> 
                 
                  <Route path="/manager" exact component={ManagerComponent} /> 
                  <Route path="/owner/report" exact component={Reports} /> 
                  <Route exact path="/owner/department" component={Listdept} />
               
                  <Route exact path = "/add-department" component = {AddDepartmentComponent}></Route>
                  <Route exact path = "/add-staff" component = {AddStaffComponent}></Route>
                  <Route  exact path="/update-department/:Id" component={UpdateDepartmentComponent} />
                  <Route exact path="/owner/room" component={RoomList} />
                  <Route exact path="/owner/staff" component={StaffList} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/sign-up" component={SignUp} />

                  <Route path="/receptionist" exact component={ReceptionistHomePage} />
                  <Route path="/receptionist/room" exact component={ReceptionistRoom} />
                  <Route exact path="/receptionist/reservation" component={ReservationList} />
                  <Route exact path = "/add-reservation" component = {AddReservation}></Route>
                  <Route exact path = "/receptionist/reservation/checkout" component = {Checkout}></Route>
                  <Route exact path = "/receptionist/reservation/success" component = {PaymentSuccessPage}></Route>
              </Switch>
             
        </Router> 
    </div>
  );
}

export default App;
