import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useState,useEffect } from 'react';
import { auth, db } from '../main';

interface practitionner{
    uid:string,
    email:string,
    firstname:string,
    lastname:string,
    qualifications:string[]
}

export default function PractitionnerList() {
    const [currentDate,setCurrentDate] = useState('');
    const [practitionners,setPractitionners]:any[]  = useState([])

    const handleChange = (event:any) => {
        setCurrentDate(event.target.value);
    };

    async function takeAppointment(uid_practitionner:string){
        const appointmentCreated = await addDoc(collection(db, 'appointments'), {
            uid_user: auth.currentUser !== null ? auth.currentUser.uid : '0',
            uid_practitionner: uid_practitionner,
            date: currentDate
          })
          .catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage)
            console.log(error);
          });
    }

    function practitionnerRow(practitionner:practitionner){
        return (
            <div style={{display:'inline-block',width:'100%',background:'white'}}>
                <p style={{display:'inline-block',color:'black'}}>{practitionner.firstname} {practitionner.lastname}</p>
                <button style={{display:'inline-block'}} onClick={() => takeAppointment(practitionner.uid)} disabled={currentDate.length === 0}>Prendre rdv</button>
            </div>
        )
    }

    const fetchData = async () => {
        const getPractitionners = await getDocs(collection(db, 'practitionners'));
        let listPractitionnersTemp:any[] = []
        getPractitionners.forEach((doc) => {
            listPractitionnersTemp.push(doc.data())
        });
        setPractitionners(listPractitionnersTemp);
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <div> 
            <h1>Practitionners list</h1>
            <label>Appointment date</label>
            <input type="date" value={currentDate} onChange={handleChange}></input>
            {
                practitionners.map((practitioner:practitionner) => {
                    return practitionnerRow(practitioner); 
                })
            }
        </div>
    );
}