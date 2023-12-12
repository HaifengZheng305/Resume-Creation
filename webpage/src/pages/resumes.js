import React from 'react';
import { useState, useEffect } from 'react';

export default function Resume() {

    const [resume, setResume] = useState({});

    useEffect(() => {
        fetch("/create-resume-test").then(
            response => response.json([{}])
        ).then(
            data => {
                setResume(data)
            }
        )
    }, [])

    return(
        <div>
            <h1>Resume</h1>
            <p> {resume.message} </p>
        </div>
    )

}

