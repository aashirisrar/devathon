import React from 'react'

interface AppointmentClientProps {
    appointments: Appointment[]
}

const AppointmentClient: React.FC<AppointmentClientProps> = ({ appointments }) => {
    return (
        <div>{appointments.id}</div>
    )
}

export default AppointmentClient