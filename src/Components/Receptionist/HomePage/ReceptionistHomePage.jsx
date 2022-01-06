import React from 'react'
import ReceptionistSidebarComponent from './ReceptionistSidebarComponent'
import './ReceptionistHomePage.css' 
import CardItem from './CardItem'

function ReceptionistHomePage() {
    return (
        <div >
            <ReceptionistSidebarComponent/>
            <div className='ReceptionistHeader'><br/><br/>
               <h1> Welcome to Receptionist !!</h1><br/><br/>

            <div className='Receptionistcardslist'>

            <ul className='cards__items'>
                    <CardItem 
                    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/12/c5.jpg"
                    text='RoomAvl-Info'
                    to='/receptionist/room'
                    />

                    <CardItem 
                    src="https://i.ytimg.com/vi/3I8-py8Eo3A/maxresdefault.jpg"
                    text='Reservation-Info'
                    to='/receptionist/reservation'
                    
                    />  
                     
            </ul>

{/* 
            <ul className='cards__items'>
                    <CardItem 
                    src="https://media.istockphoto.com/vectors/vector-cartoon-illustration-interior-orangeblue-bedroom-a-living-room-vector-id813176832?k=20&m=813176832&s=170667a&w=0&h=npp82VGp7auAOqbRV-MyfDw7W9vDH5MpVXVoZEyPCfY="
                    text='Rooms-Info'
                    to='/Guest'
                    />

                    <CardItem 
                    src="https://img.freepik.com/free-vector/data-report-illustration-concept_114360-883.jpg?size=338&ext=jpg"
                    text='Reports-Info'
                    to='/owner/report'
                    />  

            </ul> */}

            </div>
            

            



            </div>


        </div>
    )
}

export default ReceptionistHomePage
