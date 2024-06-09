import React from 'react'
import NavBar from './NavBar'

const Settings = () => {
  return (
    <div>
        <NavBar/>
        <br></br>
            <div className="container">
                <div className="row g-3">
                    <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary">Action</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary">Another Action</button> 
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary">Something Else</button>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
    </div>
  )
}

export default Settings