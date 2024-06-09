import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const [data, setData]=useState({
        "First Name":"",
        "Last Name":"",
        "College":"",
        "dob":"",
        "course":"",
        
        "email":"",
        "address":"",
        "semester":""

    }
       
    )

    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(data)
    }

  return (
        <div>
            <NavBar/>
            <div className="container">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" class="form-label">First Name</label>
                                    <input type="text"  id="" className="form-control" name='First Name' value={data.name} onChange={inputHandler}/>
                                </div>
                                <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" class="form-label">Last Name</label>
                                    <input type="text"  id="" className="form-control" name='Last Name' value={data.name} onChange={inputHandler} />
                                </div>
                                <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">College</label>
                                    <input type="text" id="" className="form-control" name='College' value={data.name} onChange={inputHandler}  />
                                </div>
                                <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">Mobile</label>
                                    <input type="text" id="" className="form-control" name='Mobile' value={data.name} onChange={inputHandler}  />
                                </div>
                                <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">DOB</label>
                                    <input type="date"  id="" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                                </div>
                                <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" class="form-label">email id</label>
                                    <input type="email" id="" className="form-control" placeholder="email@example.com" name='email' value={data.colg} onChange={inputHandler}   />
                                 </div>
                                <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label for="" class="form-label">Address</label>
                                    <input type="text"id="" className="form-control"  name='address' value={data.name} onChange={inputHandler}  />
                                </div>
                                <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">Course</label>
                                    <select id="" className="form-control"  name='course' value={data.course} onChange={inputHandler} >
                                        <option value="Btech">Btech</option>
                                        <option value="Mtech">Mtech</option>
                                        <option value="MCA">MCA</option>
                                        <option value="MBA">MBA</option>
                                    </select></div>
                                </div>
                                
                                <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">semester</label>
                                    <select  id="" className="form-control" name='semester' value={data.semester} onChange={inputHandler} >
                                        <option value="college">S1</option>
                                        <option value="travel">S2</option>
                                        <option value="world">S3</option>
                                        <option value="college">S4</option>
                                        <option value="travel">S5</option>
                                        <option value="world">S6</option>
                                        <option value="travel">S7</option>
                                        <option value="world">S8</option>

                                    </select></div>
                                </div>
                                
                                
                        
                        
                                
                                <br></br>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readValue}>Add</button>
                            </div>
        </div>
        </div>
        </div>
                       


    
    
  )
}

export default Add