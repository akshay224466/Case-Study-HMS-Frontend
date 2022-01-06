import React from 'react'
import OwnerSidebarComponent from './OwnerSidebarComponent'
import './OwnerHomePage.css' 
import CardItem from './CardItem'

function OwnerHomePage() {
    return (
        <div >
            <OwnerSidebarComponent/>
            <div className='OwnerHeader'>
               <h1> Welcome Owner!</h1>

            <div className='Ownercardslist'>

            <ul className='cards__items'>
                    <CardItem 
                    src="https://st3.depositphotos.com/8027762/18412/v/1600/depositphotos_184129016-stock-illustration-isometric-vector-illustration-flat-office.jpg"
                    text='Department-Info'
                    to='/owner/department'
                    />

                    <CardItem 
                    src="https://cdn4.vectorstock.com/i/1000x1000/91/08/office-staff-vector-18029108.jpg"
                    text='Staff-Info'
                    to='/owner/staff'
                    
                   
                    />  
                     
            </ul>


            <ul className='cards__items'>
                    <CardItem 
                    src="https://media.istockphoto.com/vectors/vector-cartoon-illustration-interior-orangeblue-bedroom-a-living-room-vector-id813176832?k=20&m=813176832&s=170667a&w=0&h=npp82VGp7auAOqbRV-MyfDw7W9vDH5MpVXVoZEyPCfY="
                    text='Rooms-Info'
                    to='/owner/room'
                    />

                    <CardItem 
                    src="https://img.freepik.com/free-vector/data-report-illustration-concept_114360-883.jpg?size=338&ext=jpg"
                    text='Reports-Info'
                    to='/owner/report'
                    />  

            </ul>

            </div>
            

            



            </div>


        </div>
    )
}

export default OwnerHomePage
