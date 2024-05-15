import React, { useEffect, useState } from 'react'
import api from '../api'
import DashBoardItem from '../components/DashBoardItem'
import navigate from '../components/Form'
import {Link} from 'react-router-dom'
import DeleteProp from '../components/DeleteProp'
export default function Dashboard() {
    document.title='Dashboard'
    const [MyProperty, setMyProperty] = useState([])
    const getMYProperty = () => {
        api
            .get('api/property/MyProperty/')
            .then((res) => res.data).then((data) => setMyProperty(data))
            .catch((err) => { alert(err) })
    }
   

    useEffect(() => {
        getMYProperty();
    }, [])
    
    return (
        <>
        <h1>
            DashBoard
        </h1>
        <Link to ='/property/add'>
        <button style={
            {
                top:'5%',
                left:'91%',
                width:'85px',
                height:'35px',
                position: 'absolute',
                zIndex: '2',
                background: 'orange',
                }
        } type='button'>add
            </button>
            </Link>

        <div className='container my-3'>
            <div className='col-md-5'>
                <div className='col-md-16'>
                    {
                        MyProperty.length!==0?(MyProperty.map((item) => {
                            return <div key={item.id}>

                                <DashBoardItem
                                    id ={item.id}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    price={item.price}
                                    
                                     />
                            </div>
                        }
                        )):  <center><h5>Your Properties will apper here</h5></center> 
                    }
                </div>

            </div>
        </div>
        </>
    )
}
