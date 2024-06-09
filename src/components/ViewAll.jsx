import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([])
        const fetchData=()=>{
           axios.get(" https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
           ).catch().finally() 
        }
       // useEffect(()=>{fetchData()},[])
    
    return (
        <div>
            <NavBar/>
            <div className="container">
            <button onClick={fetchData} className="btn btn-primary">click</button>
                <div className="row">
                    
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                      <thead>
                        
                        <tr>
                        <th scope="col">id</th>
                          <th scope="col">Firstname</th>
                          <th scope="col">Lastname</th>
                          <th scope="col">College</th>
                          <th scope="col">dob</th>
                          <th scope="col">course</th>
                          <th scope="col">mobile</th>
                          <th scope="col">email</th>
                          <th scope="col">address</th>

                         
                        </tr>
                      </thead>
                      </table> 
                      {data.map(
                        (value, index) => {
                          return <table class="table"><tbody>
                                  <tr>
                                    <td>{value._id} </td>
                                    <td>{value.firstname} </td>
                                    <td>{value.lastname} </td>
                                    <td>{value.college} </td>
                                    <td>{value.dob} </td>
                                    <td>{value.course} </td>
                                    <td>{value.mobile} </td>
                                    <td>{value.email} </td>
                                    <td>{value.address} </td>
                                    
                                    
                                  </tr>
                                
                                </tbody>
                                </table>
                                
                } 
                    
                )} 
          </div>
        </div>
        </div>
   

    </div>
  )
}
export default ViewAll