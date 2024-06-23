import React, { useEffect } from 'react'
import FeedItem from '../components/FeedItem'
import { useState } from 'react';
import api from '../api';
import { useNavigate ,Link} from 'react-router-dom';

import NavBar from '../components/Navbar';

export default function Feed() {
  document.title = 'Home'
  const navigate = useNavigate()
  const [property,setProperty]=useState([])
  const [filtered_data,setFiltered_data]= useState([]);
  const handleInput =(value)=>{
          setFiltered_data(property.filter((f)=>{f.title.toLowerCase().includes(value)}))
          console.log(filtered_data)
  }
  function GotoPropertyDetail(){
      navigate('/property-detail')
  }
  const getProperty = async () => {
      await api
          .get("/api/property/")
          .then((res) => res.data)
          .then((data) => {
              setProperty(data);
              
              // console.log(data);
          })
          .catch((err) => alert(err));
  };
  useEffect(()=>{getProperty();
    // console.log(property.image)
  },[])
  return (

    <>
      
    <div className='bg-primary'>

      {/* <h1>REAL STATE NEAR YOU</h1>  */}
      {/* <div className="position-absolute top-0 end-0">
        <button > <Link to="/dashboard">My property</Link>
        </button>
      </div> */}
    <NavBar/>
    </div>
      <div className='text-center'>
      <input onChange={e=>handleInput(e.target.value)} placeholder='search' />
    </div>
        
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        {console.log(property)}
        {property.map(
          (prop)=>{
            return(
              <div key={prop.id} >
                <FeedItem title={prop.title} 
                description={prop.description} 
                image={prop.image} 
                price={prop.price} 
                is_available={prop.is_available}
                is_negotiable={prop.is_negotiable}
                onclickFunc={()=>GotoPropertyDetail} btnName='learn more'/>
              </div>
           )
          }
        )}
        </div>
      
    </>
  )
}
