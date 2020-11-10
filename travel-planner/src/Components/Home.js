import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div style={{justifyContent: "center", alignItems: "center"}}>
            <p>
                WIP here is a <Link to="/login">link</Link> to the Login.
            </p>
        </div>
    )
}

export default Home