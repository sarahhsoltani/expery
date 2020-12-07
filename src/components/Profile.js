import React from 'react';
import '../Css/style.css'
import {FaUserCircle} from 'react-icons/fa';


 function Profile() {
    return (
        <div >
         <div className="icon-user"><FaUserCircle/></div>
       <ul  className="mt-5 text-center ml-1"> 
       
       <li className="row"><i class="fab fa-meetup fa-1x mr-2 mb-3 meet"></i><h5 >Meetings</h5></li> 
        <li className="row"><i class="fas fa-comment-dots  fa-1x mr-2 mb-3  meet"></i><a href=""><h5>Messages</h5></a></li>
        <li className="row"><i class="fas fa-calendar-alt fa-1x mr-2 mb-3  meet"></i><a href=""><h5>Calender</h5></a></li>
        <li className="row"><i class="fas fa-file-invoice-dollar fa-1x mr-2 mb-3  meet"></i><a href=""><h5>Payement</h5></a></li>
        <li className="row"><i class="fas fa-cogs fa-1x mr-2 mb-3 meet"></i><a href="" ><h5>Settings</h5></a></li>
           
       </ul>
        
        </div>
    )
}
export default Profile;