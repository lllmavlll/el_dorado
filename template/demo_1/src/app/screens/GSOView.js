import React, { useEffect, useState } from 'react'
// import {Form} from 'react-bootstrap'
import './CustomCssFile.css'
import { useHistory } from "react-router-dom";


const OrderFormViews = () => {

  const navigate =useHistory()


  const[GSOform,setGSOForm] = useState([])


const reRouteFunc=(GSOno)=>{
  fetch(`http://localhost:4000/GSO/GetSpecificGSOrder/`+GSOno)
  .then(response => response.json())
  .then(data =>{
    // setOrderNo()
        // navigate.push('/gold-smith/order',{state:{OrderNo:orno,...data}})
        navigate.push('/gold-smith/issuance',{state:data})

    // return data
    }) 
    .catch(error => {
    console.error('Error fetching user data:', error);
  });
}


const onClickHandler =(e)=>{
  const hiddenElement = e.currentTarget.nextSibling;
  hiddenElement.className.indexOf("collapse show") > -1 ? hiddenElement.classList.remove("show") : hiddenElement.classList.add("show");
 }

  useEffect(()=>{

    fetch('http://localhost:4000/GSO/getAllGSOrders')
   .then(response => response.json())
   .then(data =>
    {console.log(data);
    return data
    })
   .then(data =>setGSOForm(data))
   .catch(err=> console.log(err))
   },[])


  return (
    <>
        <div className='page-header'>
          <h1 className='page-title'>Gold Smith Order View</h1>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title"> GSO View</h4> */}
                <div className="table-responsive OFtable-res ">
                  <table className="table table-bordered OFtable ">
                    <thead>
                      <tr>
                        <th> SL No. </th>
                        <th>GSO Order No.</th>
                        <th>Gold Smith</th>
                      </tr>
                    </thead>
                    <tbody>
                     {
                        GSOform.map((result,index) =>{
                          return <>
                            <button onClick={()=>{reRouteFunc(result.GSOrderNo)}} className="btn btn-primary mr-2 absBtn" >Issue material</button>
                            <tr className='collapseRow' onClick={onClickHandler}>
                              <td>{index+1}</td>
                              <td>{result.GSOrderNo}</td>
                              <td>{result.GSName}</td>
                            </tr>
                            <tr className="collapse">
                              <td colSpan="6">
                                <div className="table-responsive OFtable-res ">
                                  <table className="table table-bordered OFtable ">
                                    <thead>
                                      <tr>
                                        <th> Sl.No</th>
                                        <th>Sub Order No</th>
                                        <th>Item Name </th>
                                        <th>Available Quantity </th>
                                        <th>Allocated Quantity </th>
                                        <th>Pending Quantity </th>
                                        <th>Allocated Weight </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {
                                        result.subOrder.map((result, index)=>{
                                          return<tr>
                                            <td>{index+1}</td>
                                            <td>{result.subOrderNo}</td>
                                            <td>{result.ItemName}</td>
                                            <td>{result.availQuantity}</td>
                                            <td>{result.allocdQty}</td>
                                            <td>{result.pendingQuantity}</td>
                                            <td>{result.allocdWt}</td>
                                          </tr>
                                        })
                                      }
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </>
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


//     return(
//     <div className="col-lg-6">
//     <div className="panel panel-default">
//         <div className="panel-heading">
//             <h3>Object Store</h3></div>
//         <div className="panel-body">
//             <table className="table table-condensed" style={{borderCollapse:"collapse"}}>

//                 <thead>
//                     <tr>
//                         <th><button>drop</button></th>
//                         <th>Job Name</th>
//                         <th>Description</th>
//                         <th>Provider Name</th>
//                         <th>Region</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle">
//                         <td>
//                             <button className="btn btn-default btn-xs"><span className="glyphicon glyphicon-eye-open"></span></button>
//                         </td>
//                         <td>OBS Name</td>
//                         <td>OBS Description</td>
//                         <td>hpcloud</td>
//                         <td>nova</td>
//                         <td> created</td>

//                     </tr>
//                     <tr>
//                         <td colspan="12" className="hiddenRow">
//                             <div className="accordian-body collapse" id="demo1">
//                                 <table className="table table-striped">
//                                     <thead>
//                                         <tr>
//                                             <td><a href="WorkloadURL">Workload link</a></td>
//                                             <td>Bandwidth: Dandwidth Details</td>
//                                             <td>OBS Endpoint: end point</td>
//                                         </tr>
//                                         <tr>
//                                             <th>Access Key</th>
//                                             <th>Secret Key</th>
//                                             <th>Status </th>
//                                             <th> Created</th>
//                                             <th> Expires</th>
//                                             <th>Actions</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>access-key-1</td>
//                                             <td>secretKey-1</td>
//                                             <td>Status</td>
//                                             <td>some date</td>
//                                             <td>some date</td>
//                                             <td>
//                                                 <button> click</button>
//                                             </td>
//                                         </tr>



//                                     </tbody>
//                                 </table>

//                             </div>
//                         </td>
//                     </tr>
//                     <tr data-toggle="collapse" data-target="#demo2" className="accordion-toggle">
//                         <td>
//                             <button className="btn btn-default btn-xs"><span className="glyphicon glyphicon-eye-open"></span></button>
//                         </td>
//                         <td>OBS Name</td>
//                         <td>OBS Description</td>
//                         <td>hpcloud</td>
//                         <td>nova</td>
//                         <td> created</td>
//                     </tr>
//                     <tr>
//                         <td colspan="6" className="hiddenRow">
//                             <div id="demo2" className="accordian-body collapse">Demo2</div>
//                         </td>
//                     </tr>
//                     <tr data-toggle="collapse" data-target="#demo3" className="accordion-toggle">
//                         <td>
//                             <button className="btn btn-default btn-xs"><span className="glyphicon glyphicon-eye-open"></span></button>
//                         </td>
//                         <td>OBS Name</td>
//                         <td>OBS Description</td>
//                         <td>hpcloud</td>
//                         <td>nova</td>
//                         <td> created</td>
//                     </tr>
//                     <tr>
//                         <td colspan="6" className="hiddenRow">
//                             <div id="demo3" className="accordian-body collapse">Demo3</div>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>

//     </div>

// </div>
//   )
}

export default OrderFormViews
