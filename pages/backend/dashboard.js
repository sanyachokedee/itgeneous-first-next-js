import React from 'react'
import styles from './Backend.module.css'

const dashboard = () => {
    return (
        <div>
            <h1 className={styles.heading}>This is dahsboard page</h1>
            <p className="mytitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facilis doloribus explicabo dolorum quia nisi nemo rerum similique, nulla fugit incidunt laboriosam facere rem dolore consequuntur ad ab voluptates soluta!</p>
            <img src="../../images/1.jpg" alt="" widht="200"/>
        </div>
    )
}

export default dashboard

// http://localhost:3000/backend/dashboard
