import {useState, useEffect} from 'react'
import { auth, db } from '../main';
import { collection, getDocs, doc, updateDoc, query, where} from 'firebase/firestore';
import { atcb_action } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';

interface Appointment {
    uid:string,
    uid_user: string,
    uid_practitionner: string,
    date: string,
    cancelled?: boolean
}


export default function MyAppointments() {

    const [appointments,setAppointments]:any[] = useState([]);

    const uid_user = auth.currentUser !== null ? auth.currentUser.uid : '0';


    async function cancelAppointment(uid:string){
        const docRef = doc(db,"appointments", uid);
        updateDoc(docRef,{cancelled: true}).then(() => {
            alert('Cancelled !');
            fetchData();
        }).catch((e) => {
            alert('Couldn\'t be cancelled');
            console.log(e);
        });
    }

    function appointmentRow(appointment:{uid:string,data:Appointment}){
        return (
            <div style={{display:'inline-block',width:'100%',background:'white'}}>
                <p style={{display:'inline-block',color:'black'}}>{appointment.data.date}</p>
                <button style={{display:'inline-block'}} onClick={() => cancelAppointment(appointment.uid)}>Cancel appointment</button>

                <form onSubmit={e => {
                    e.preventDefault();
                    atcb_action({
                        name: `Appointment ${appointment.uid}`,
                        startDate: appointment.data.date,
                        endDate: appointment.data.date,
                        options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'Yahoo'],
                        timeZone: "Europe/Berlin",
                        iCalFileName: "Appointment",
                    });
                    }}>
                    <input type="submit" value="save" />
                </form>
            </div>
        )
    }

    const fetchData = async () => {

        const queryConstraints = []
        queryConstraints.push(where("uid_user", "==", uid_user));
        queryConstraints.push(where("cancelled", "==", false));
        const q = query(collection(db, "appointments"),...queryConstraints  );
        const querySnapshot = await getDocs(q);
        let listAppointments:any[] = [];
        querySnapshot.forEach((doc) => {
            listAppointments.push(
                {
                    uid: doc.id,
                    data: doc.data()
                }
            )
        });
        setAppointments(listAppointments);
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <div>
            <h1>My appointments</h1>
            {
                appointments.map((appointment:{uid:string,data:Appointment}) => {
                    return appointmentRow(appointment); 
                })
            }
        </div>
    );
}