"use client"

import React from 'react'

interface PatientClientProps {
    patients: []
}

const PatientClient: React.FC<PatientClientProps> = ({ patients }) => {
    return (
        <div>{patients[0].name}</div>
    )
}

export default PatientClient