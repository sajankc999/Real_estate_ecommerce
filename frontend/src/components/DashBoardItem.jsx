import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import DeleteProp from './DeleteProp'
import UpdateProperty from '../pages/UpdateProperty'
export default function DashBoardItem({ title, description, image, price, id }) {

   
    return (
        <>
            {/* {isShown && <AlertModal setisShown={setisShown}/>} */}
            {/* {ispressed?<PopupAlert/>:null} */}
            <div className='container my-3'>
                <div className="card h-100"  >
                    <img src={image ? image : 'https://th.bing.com/th/id/OIP.kgfkdioyvqIrLPdA5bXckAHaE8?rs=1&pid=ImgDetMain'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{price}</p>
                        <div className="d-flex justify-content-between">

                            <Link to={`/property/update/${id}`} className='btn btn-info btn-sm text-decoration-none'>Update</Link>
                            <DeleteProp id={id}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

