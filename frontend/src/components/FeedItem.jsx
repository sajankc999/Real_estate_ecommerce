import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function FeedItem({title,description,image,price,buttonFunc,btnName,id}) {
    const [isShown,setisShown]=useState(false)

 
 
    return (
        <>
        {/* {isShown && <AlertModal setisShown={setisShown}/>} */}
            {/* {ispressed?<PopupAlert/>:null} */}
        <div className='container my-3'>
            <div className="card h-100"  >
                <img src={image?image:'https://th.bing.com/th/id/OIP.kgfkdioyvqIrLPdA5bXckAHaE8?rs=1&pid=ImgDetMain'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}</p>
                    <button className="btn btn-primary" onClick={()=>{btnName==='delete' && buttonFunc(id)}}>
                        {btnName}
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

