import React, { useState, useEffect } from 'react';

function RelogioDigital() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const Interval = setInterval(() => {
            setHora(new
                Dete().toLocaleTimeString())
        }
        )
    }
    )

    return (
        <>
            <h2>RelogioDigital</h2>
            <p>{hora}</p>
        </>
    );
}

export default RelogioDigital