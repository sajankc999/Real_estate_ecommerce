import React from 'react'
import NavBar from '../components/Navbar'
import { Link } from 'react-router-dom'
// import '../styles/Home.css'
function Home() {
  return (
    <div className='container'>
      <NavBar />
      <div style={{ fontSize: '100px', textColor: 'white' }}>

        <h1 className='text text-center font-monospace fw-bold '>

          <b>Real Nepal</b>
        </h1>
      </div>
      <section>
        <div className='container text-center border-bottom'>

          <img src="/Realestate1.jpeg" alt="..." className='img-fluid' />
          <div className='row'>
            <div className='col'>
              <Link to='/register'>
                <button className='btn'>signup</button>
              </Link>
            </div>
            <div className='col'>
              <Link to='/login'>
                <button className='btn'>login</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className='text-center '>Our services</h1>
        <div id="carouselExampleAutoplaying" className="carousel slide text-center" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src="/security.png" alt="..." style={{ width: '500px', height: "50%" }} />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="/save.jpeg" alt="..." style={{ width: '500px', height: "50%" }} />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="/trust2.jpeg" alt="..." style={{ width: '500px', height: "50%" }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>


      <footer>
        <div>
          <hr />
          <div>
            <table>
              <th>

                Home

              </th>

              <tr>career</tr>
              <tr>
                contact
              </tr>
            </table>
          </div>
          About us
        </div>
      </footer>
    </div>
  )
}

export default Home
