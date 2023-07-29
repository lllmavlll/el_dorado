import React, { useEffect, useState } from 'react'
// import {Form} from 'react-bootstrap'
import './CustomCssFile.css'


const OrderFormViews = () => {

  const[orderFormData,setOrderFormData] = useState([])

  console.log(orderFormData.length)

  useEffect(()=>{

   fetch('http://localhost:4000/CustomerOrderForm/getAllOrders')
   .then(response => response.json())
   .then(data =>
    {console.log(data);
    return data
    })
   .then(data =>setOrderFormData(data))
   .catch(err=> console.log(err))
    // fetchData();
  },[])

  return (
    <>
        <h1>Order Form View</h1>
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title"></h4> */}
                <div className="table-responsive OFtable-res ">
                  <table className="table table-bordered OFtable ">
                    <thead>
                      <tr>
                        <th> SL No. </th>
                        <th>Customer Name</th>
                        <th>Order Number</th>
                        <th>Placed Order Date</th>
                        <th>required Date</th>
                        <th>Cust order Touch</th>
                        <th>Target Touch</th>
                        <th>seal</th>
                        <th>Quality series</th>
                        <th>category</th>
                        <th> Group Name</th>
                        <th> Sub Group Name</th>
                        <th> Core Product Name</th>
                        <th> model Number</th>
                        <th> No.Of Stones</th>
                        <th> Size Of Stone</th>
                        <th> Stone Color pattern</th>
                        <th> Screw Type</th>
                        <th>Sale Name</th>
                        <th>Item Stage</th>
                        <th>SKUNo</th>
                        <th>No. Of Design</th>
                        <th>Quantity/Design</th>
                        <th>Item Quantity</th>
                        <th>Unit Weight UL</th>
                        <th>Unit Weight LL</th>
                        <th>Estimated Weight</th>
                        <th>Screw Make</th>
                        <th>Screw Size</th>
                        <th>Cutting Type</th>
                        <th>Cutting Design</th>
                        <th>Stone Brand</th>
                        <th>Polish Type</th>
                        <th>Dimmy Col Type</th>
                        <th>SILSUR color Type</th>
                        <th>Surface Finish</th>
                        <th>Coat</th>
                        <th>Card Type</th>
                        <th>Card Fittin Plan</th>
                        <th>Stone Setting Type</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        orderFormData&&orderFormData.jewelrie&&orderFormData.jewelrie.map(result =>{
                    return <tr  >
                            <td>
                            {}
                            </td>
                            <td>{result.customerName}</td>
                            <td>{result.OrderNo}</td>
                            <td>{result.placedOrderDate}</td>
                            <td>{result.requiredDate}</td>
                            <td>{result.customerOrderTouch}</td>
                            <td>{result.targetTouch}</td>
                            <td>{result.seal}</td>
                            <td>{result.qualitySeries}</td>
                            <td>{result.category}</td>
                            <td>{result.groupName}</td>
                            <td>{result.subGroupName}</td>
                            <td>{result.coreProductName}</td>
                            <td>{result.modelNo}</td>
                            <td>{result.noOfStones}</td>
                            <td>{result.sizeofStone}</td>
                            <td>{result.stoneColourPattern}</td>
                            <td>{result.screwType}</td>
                            <td>{result.saleName}</td>
                            <td>{result.itemStage}</td>
                            <td>{result.SKUNo}</td>
                            <td>{result.noOfDesign}</td>
                            <td>{result.QuantityPerDesign}</td>
                            <td>{result.itemQuantity}</td>
                            <td>{result.unitWT_UL}</td>
                            <td>{result.unitWT_LL}</td>
                            <td>{result.estimatedWeight}</td>
                            <td>{result.ScrewMake}</td>
                            <td>{result.screwSize}</td>
                            <td>{result.cuttingType}</td>
                            <td>{result.cuttingDesign}</td>
                            <td>{result.stoneBrand}</td>
                            <td>{result.polishType}</td>
                            <td>{result.dimmyColType}</td>
                            <td>{result.SILSURColouringType  }</td>
                            <td>{result.surfaceFinish}</td>
                            <td>{result.Coat}</td>
                            <td>{result.cardType}</td>
                            <td>{result.cfPlan}</td>
                            <td>{result.stoneSettingType}</td>
                            <td>{result.remarks}</td>
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
