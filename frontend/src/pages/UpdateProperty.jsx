import React, { useEffect, useState } from 'react'
import api from '../api'
import { useParams } from 'react-router-dom'

function UpdateProperty() {
  const {id} = useParams()
  const [Prop,setProp]=useState([])
  const  getProp =async ()=>{
    await api.get(`api/property/MyProperty/${id}/`)
    .then((res)=>{setProp(res.data)})
    .catch(err=>console.error(err))

  }
  const [NewPropertyInfo, setInfo] = useState({
    title: '',
    description: '',
    price: '',
    is_negotiable: true,
    is_available: true,
    location: '',
  });

  const [image, setImage] = useState(null)
  console.log(Prop)
  useEffect(() => {
    const getProp = async () => {
      try {
        const res = await api.get(`api/property/MyProperty/${id}/`);
        setProp(res.data);
        setInfo(res.data); // Synchronize NewPropertyInfo with the fetched data
      } catch (err) {
        console.error(err);
      }
    };

    getProp();
  }, [id]);

 

  const handleChange = (e) => {
    const { name, value, type ,files} = e.target;
    if ([name] == 'image' && files.length >0) {
      setImage({ image: e.target.files, })
      // console.log(files[0])
    }
    if ([name] == 'title' || [name]=='description') {
      setInfo((prev) => ({ ...prev, [name]: value.trim() }));
    } else {
      setInfo((prev) => ({ ...prev,[name]: type === 'checkbox' ? e.target.checked : value }));

    }
  };

  const FormHandle = async (e) => {
    e.preventDefault()
    console.log(NewPropertyInfo)
    var data = new FormData() 
    data.append('image', image.image[0])
    for (const key in NewPropertyInfo) {
      if(key!=='id'){

        data.append(key, NewPropertyInfo[key])
      }
    }
    // data.append('seller',1)
    // console.log(data.size)
    for (var key of data.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }
    
    try {
      const response =await api.patch(`/api/property/MyProperty/${id}/`,data)
      if(response.status===200){alert('property updated');}
      else{alert('error occurred')}

    } catch (error) {
      console.error(error)
      alert('error occurred')
    }
  };
    
    return (
      <div>
        <div>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <h3 className='"card-title text-center"'>
                Update
              </h3>
              <div className="card-body py-md-4">
                <form onSubmit={FormHandle}  encType="multipart/form-data">
                  <label htmlFor="title">title</label>
                  <div className='form-group'>
                    <input type="text"
                      name='title'
                      onChange={handleChange}
                      placeholder="eg:property with this feature"
                      className='form-control' 
                      value={NewPropertyInfo.title}/>
                  </div>

                  <div className='form-group'>
                    <label htmlFor="Description">Description</label>
                    <input type="text"
                      name='description'
                      value={NewPropertyInfo.description}
                      onChange={handleChange}
                      placeholder="eg:your property special feature" className='form-control' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price" min="0" step="0.01"
                      value={NewPropertyInfo.price}
                      onChange={handleChange}
                      required
                      placeholder="in NRP" className='form-control' />
                  </div>

                  <div className='form-group'>
                    <input type="text"
                      name='location'
                      value={NewPropertyInfo.location}
                      onChange={handleChange}
                      placeholder='location' className='form-control' />
                  </div>
                  <div className='form-group'>
                    Negotiable:
                    <input type="checkbox"
                      name='is_negotiable'
                      // value={NewPropertyInfo.is_negotiable}
                      onChange={handleChange}
                      checked={NewPropertyInfo.is_negotiable}

                    />
                  </div>

                  <div className='form-group'>
                    Available:
                    <input type="checkbox"
                      name='is_available'
                      // value={NewPropertyInfo.is_negotiable}
                      onChange={handleChange}
                      checked={NewPropertyInfo.is_available}

                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor="image"  >image</label><br />
                    <input type="file" name='image'
                      style={{ float: 'left', height: "48", width: "48" }}
                      onChange={handleChange}
                       /><br />
                  </div>




                  <div className='d-flex flex-row align-items-center justify-content-between '>

                    <button type="submit" value="register" className="btn btn-primary" >Update</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    )
}

export default UpdateProperty
