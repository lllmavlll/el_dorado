import React, { useEffect, useState } from 'react'
import './CustomCssFile.css'


const NewOrderFormView = () => {

    const [Oview,setOview] =useState([])
    const [lineItems,setLineItems] =useState([])

    // const uniqueArr = [...new Set(Oview)];


    // const [unicArray,setUnicArray] =useState([])

    const onClickHandler =(e)=>{
      const hiddenElement = e.currentTarget.nextSibling;
      hiddenElement.className.indexOf("collapse show") > -1 ? hiddenElement.classList.remove("show") : hiddenElement.classList.add("show");
    }
 
  //=============|| to get multiple element once ||==================//
  
  const uniqueObjectMap = new Map();
  for (const obj of Oview) {
    uniqueObjectMap.set(obj.orderNo, obj);
  }
  const uniqueObjects = Array.from(uniqueObjectMap.values());
  
  //=============|| to get lineItems based on the matched OrderNo||==================//

    useEffect(()=>{
    fetch('http://localhost:4000/CustomerOrderForm/getAllFromNew')
    .then(response => response.json())
    .then(data =>
        {console.log(data);
        return data
        })
        .then(data =>{
            setOview(data)
        })
    .catch(err=> console.log(err))
    
    

    },[])

    return (
        <>
            <div className='page-header'>
              <h1 className='page-title'>New Order Form View</h1>
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
                            uniqueObjects.map((orderArray,index) =>{
                              return <>
                                <tr className='collapseRow' onClick={onClickHandler}>
                                  <td>{index+1}</td>
                                  <td>{orderArray.customerName}</td>
                                  <td>{orderArray.orderNo}</td>
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
                                          uniqueObjects.filter(item=>item.orderNo===orderArray.orderNo)
                                          .map((list)=>{
                                            console.log(list);
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
    // return(
    //     <div>
    //     <h1>Unique Objects</h1>
    //     <ul>
    //       {objectElements}
    //     </ul>
    //   </div>
    // )
}

export default NewOrderFormView
