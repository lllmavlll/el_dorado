import React, { useEffect, useState } from 'react'
// import {Form} from 'react-bootstrap'
import './CustomCssFile.css'


const OrderFormViews = () => {

  const[GSOform,setGSOForm] = useState([])


  useEffect(()=>{

    fetch('http://localhost:4000/GSO/getAllGSOrders')
    .then(response => response.json())
    .then(data =>
     {console.log(data);
     return data
     })
    .then(data =>setGSOForm(data))
    .catch(err=> console.log(err))
     // fetchData();
   },[])


  return (
    <>
        <div className='page-header'>
          <h1 className='page-title'>GSO View</h1>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title"></h4> */}
                <div className="table-responsive OFtable-res ">
                  <table className="table table-bordered OFtable ">
                    <thead>
                      <tr>
                        <th> SL No. </th>
                          <th>Order Number</th>
                          <th>GSO Order No.</th>
                          <th>Gold Smith Name</th>
                          <th>Item Name</th>
                          <th>order Quantity</th>
                          <th>Allocated Quantity</th>
                          <th>Quantity To Be Allocated</th>
                          <th>Allocated Weight</th>
                          <th>Weight To Be Allocated</th>
                      </tr>
                    </thead>
                    <tbody>
                     {
                        GSOform&&GSOform.orders&&GSOform.orders.map(result =>{
                          return <tr>
                            <td>1</td>
                            <td>{result.OrderNo}</td>
                            <td>{result.GSOrderNo}</td>
                            <td>{result.GSName}</td>
                            <td>{result.ItemName}</td>
                            <td>{result.OrderedQty}</td>
                            <td>{result.allocdQty}</td>
                            <td>{result.QtyToBeAllocd}</td>
                            <td>{result.allocdWt}</td>
                            <td>{result.WtToBeAllocd}</td>
                          </tr>

                        })

                     }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
      
    </>
  )
}

export default OrderFormViews
