import React, { useEffect, useState } from 'react'
import api from '../api'
import FeedItem from '../components/FeedItem'
import navigate from '../components/Form'
export default function Dashboard() {
    
    const [MyPropery, setMyProperty] = useState([])
    const getMYProperty = () => {
        api
            .get('api/property/MyProperty/')
            .then((res) => res.data).then((data) => setMyProperty(data))
            .catch((err) => { alert(err) })
    }
    const DltFunc=(id)=>{
        api
        .delete(`api/property/MyProperty/delete/${id}/`)
        .then((res)=>{
            if (res.status===204) alert('item deleted')
            else alert('couldnt delete property')
        }).catch((err)=>alert(err))
        getMYProperty();
    }

    useEffect(() => {
        getMYProperty();
    }, [])
    
    return (
        <div className='container my-3'>
            <div className='col-md-5'>
                <h1>
                    DashBoard
                </h1>
                <div className='col'>
                    {
                        MyPropery?(MyPropery.map((item) => {
                            return <div key={item.id}>

                                <FeedItem
                                    id ={item.id}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    price={item.price}
                                    buttonFunc={DltFunc}
                                    btnName='delete' />
                            </div>
                        }
                        )):   <h5>Your Properties will apper here</h5>
                    }
                </div>

            </div>
        </div>
    )
}
