import React, { useEffect, useState } from 'react'
// import {Form} from 'react-bootstrap'
import './CustomCssFile.css'
import { useHistory } from "react-router-dom";


const OrderFormViews = () => {

  const navigate =useHistory()

  const [orderNO, setOrderNo] =useState('')
  const[orderFormData,setOrderFormData] = useState([])
  // const [collapse,setCollapse] =useState(true)

  // const collapseBtnHandler = ()=>{
  //   setCollapse(!collapse)
  // }


   const onClickHandler =(e)=>{
  const hiddenElement = e.currentTarget.nextSibling;
  hiddenElement.className.indexOf("collapse show") > -1 ? hiddenElement.classList.remove("show") : hiddenElement.classList.add("show");
  // setCollapse(!collapse);

 }

 //==============|| to reroute to gso ||===================//
 
 const reRouteFunc =(orno)=>{
  // console.log(orno);
  fetch(`http://localhost:4000/CustomerOrderForm/getOrderNo/`+orno)
  .then(response => response.json())
  .then(data =>{
    // setOrderNo({OrderNo:orno,...data})
    setOrderNo(data.data)
    console.log(orderNO);
        navigate.push('/gold-smith/order',{state:orderNO})

    // return data
    }) 
    .catch(error => {
    console.error('Error fetching user data:', error);
  });
  
 

 }

  useEffect(()=>{

   fetch('http://localhost:4000/CustomerOrderForm/getAllOrders')
   .then(response => response.json())
   .then(data =>
    {console.log(data);
    return data
    })
    .then(data =>{
      setOrderFormData(data)
      
    })
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
                        <th>SL.No</th>
                        <th>Customer Name</th>
                        <th>Order Number</th>
                      </tr>
                    </thead>
                    <tbody style={{position:'relative'}}>
                        {
                             orderFormData&&orderFormData.jewelrie&&orderFormData.jewelrie.map((result,index) =>{
                              return<>
                              <button onClick={()=>{reRouteFunc(result.OrderNo)}} className="btn btn-primary mr-2 absBtn" > GSO</button>
                              <tr className='collapseRow' onClick={onClickHandler}>
                              {/* <tr className='collapseRow'> */}
                                <td>{index+1}</td>
                                <td>{result.customerName}</td>
                                <td>{result.OrderNo}</td>
                              </tr>
                              <tr className="collapse">
                                <td colSpan="6">
                                <div className="table-responsive OFtable-res ">
                                <table className="table table-bordered OFtable ">
                                  <thead>
                                  <tr>
                                    <th>Placed Order Date</th>
                                    <th>required Date</th>
                                    <th>Cust order Touch</th>
                                    <th>Target Touch</th>
                                    <th>seal</th>
                                    <th>Quality series</th>
                                    <th>Final Iname</th>
                                    <th>Sale Name</th>
                                    <th>Item Stage</th>
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
                                      result.lineItem.map((lineItem)=>{
                                        return <tr>
                                        <td>{lineItem.placedOrderDate}</td>
                                        <td>{lineItem.requiredDate}</td>
                                        <td>{lineItem.customerOrderTouch}</td>
                                        <td>{lineItem.targetTouch}</td>
                                        <td>{lineItem.seal}</td>
                                        <td>{lineItem.qualitySeries}</td>
                                        <td>{lineItem.finalIname}</td>
                                        <td>{lineItem.saleName}</td>
                                        <td>{lineItem.itemStage}</td>
                                        <td>{lineItem.noOfDesign}</td>
                                        <td>{lineItem.QuantityPerDesign}</td>
                                        <td>{lineItem.itemQuantity}</td>
                                        <td>{lineItem.unitWT_UL}</td>
                                        <td>{lineItem.unitWT_LL}</td>
                                        <td>{lineItem.estimatedWeight}</td>
                                        <td>{lineItem.ScrewMake}</td>
                                        <td>{lineItem.screwSize}</td>
                                        <td>{lineItem.cuttingType}</td>
                                        <td>{lineItem.cuttingDesign}</td>
                                        <td>{lineItem.stoneBrand}</td>
                                        <td>{lineItem.polishType}</td>
                                        <td>{lineItem.dimmyColType}</td>
                                        <td>{lineItem.SILSURColouringType}</td>
                                        <td>{lineItem.surfaceFinish}</td>
                                        <td>{lineItem.Coat}</td>
                                        <td>{lineItem.cardType}</td>
                                        <td>{lineItem.cfPlan}</td>
                                        <td>{lineItem.stoneSettingType}</td>
                                        <td>{lineItem.remarks}</td>
                                      
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
    {/* </>
  ) */}
{/* 
    <div className="col-lg-6">
    <div className="panel panel-default">
        <div className="panel-heading">
            <h3>Object Store</h3></div>
        <div className="panel-body">
            <table className="table table-condensed" style={{borderCollapse:"collapse"}}>

                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Job Name</th>
                        <th>Description</th>
                        <th>Provider Name</th>
                        <th>Region</th>
                        <th>Status</th>
                    </tr>
                </thead>

                  <tbody>
                    <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle">
                        <td>
                            <button className="btn btn-default btn-xs">ok</button>
                        </td>
                        <td>OBS Name</td>
                        <td>OBS Description</td>
                        <td>hpcloud</td>
                        <td>nova</td>
                        <td> created</td>

                    </tr>
                    <tr>
                        <td colspan="12" className="hiddenRow">
                            <div className="accordian-body collapse" id="demo1">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <td><a href="WorkloadURL">Workload link</a></td>
                                            <td>Bandwidth: Dandwidth Details</td>
                                            <td>OBS Endpoint: end point</td>
                                        </tr>
                                        <tr>
                                            <th>Access Key</th>
                                            <th>Secret Key</th>
                                            <th>Status </th>
                                            <th> Created</th>
                                            <th> Expires</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>access-key-1</td>
                                            <td>secretKey-1</td>
                                            <td>Status</td>
                                            <td>some date</td>
                                            <td>some date</td>
                                            <td>
                                                <button> click</button>
                                            </td>
                                        </tr>



                                    </tbody>
                                </table>

                            </div>
                        </td>
                    </tr>
                    <tr data-toggle="collapse" data-target="#demo2" className="accordion-toggle">
                        <td>
                            <button className="btn btn-default btn-xs">ok</button>
                        </td>
                        <td>OBS Name</td>
                        <td>OBS Description</td>
                        <td>hpcloud</td>
                        <td>nova</td>
                        <td> created</td>
                    </tr>
                    <tr>
                        <td colspan="6" className="hiddenRow">
                            <div id="demo2" className="accordian-body collapse">Demo2</div>
                        </td>
                    </tr>
                    <tr data-toggle="collapse" data-target="#demo3" className="accordion-toggle">
                        <td>
                            <button className="btn btn-default btn-xs">ok</button>
                        </td>
                        <td>OBS Name</td>
                        <td>OBS Description</td>
                        <td>hpcloud</td>
                        <td>nova</td>
                        <td> created</td>
                    </tr>
                    <tr>
                        <td colspan="6" className="hiddenRow">
                            <div id="demo3" className="accordian-body collapse">Demo3</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>

</div> */}
{/* <> */}
</>
)
}

export default OrderFormViews
