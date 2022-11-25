import { Outlet } from "react-router-dom";
import './root.css';
import listIcon from '../assets/list-icon.png';
import appointmentIcon from "../assets/appointment-icon.png";

export default function Root() {
    return (
        <>
            <div>
                <div id="detail">
                    <Outlet />
                </div>
                <div className="bottom-navbar">
                    <nav style={{width:'80%', display:"flex"}}>
                        <div className="navbarItem">
                            <a className="iconCentered" href={`my-appointments`}><img className="navbarIcon" src={listIcon} alt="my appointments"/></a>
                        </div>
                        <div className="navbarItem">   
                            <a className="iconCentered" href={`find-practitioner`}><img className="navbarIcon" src={appointmentIcon} alt="find practionners"/></a>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
  }