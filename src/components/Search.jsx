import React from 'react'
import NavBar from './NavBar'

const Search = () => {
    return (
        <div>
            <NavBar/>
            <br></br>
            <div className="container">
                <div className="row g-3">
                    <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" class="form-label">Student Name</label>
                                <input type="text" name="" id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" class="form-label">Adm No</label>
                                <input type="text" name="" id="" className="form-control" />
                            </div>
                            
                </div>
            </div>
            <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Search