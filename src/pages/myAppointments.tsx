import {useState} from 'react'

interface Appointment {
    id:number,
    pratictionnerId:number,
    date:Date
}
const mockAppointments: Appointment[] = [
    {
        id:1,
        pratictionnerId: 1,
        date: new Date((new Date().getDate() - 5))
    },
    {
        id:2,
        pratictionnerId: 2,
        date: new Date((new Date().getDate() - 5))
    },
    {
        id:3,
        pratictionnerId: 3,
        date: new Date((new Date().getDate() - 8))
    }
];

export default function ErrorPage() {
    const [appointment,setAppointment] = useState(mockAppointments);

    return (
        <div id="error-page">
        <h1>My appointments</h1>
        </div>
    );
}