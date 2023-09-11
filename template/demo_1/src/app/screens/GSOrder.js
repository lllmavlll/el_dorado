import React, { useEffect, useState } from 'react'
import  { Form} from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import './CustomCssFile.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const GSOrder = () => {
  const navigate =useHistory()

  // const[orderFormData,setOrderFormData] = useState([])
  // const[itemQty,setItemQty] = useState([])
  // const[lineItemDD,setLineItemDD] = useState([])
  const [ getByOrderNo, setGetByOrderNo ]= useState([])
  const [ specificIname, setSpecificIname ]= useState([])
  const [ isOpen, setIsOpen ] = useState(true)
  const [ subOrderTable, setSubOrderTable ] = useState(false)
  const [ Suborder, setSuborder ] = useState([])
  const [ inputValue, setInputValue ] = useState({
    GSOrderNo:'',
    OrderNo:'',
    GSName:'',
    ItemName:'',
    OrderedQty:'',
    allocdQty:'',
    QtyToBeAllocd:'',
    allocdWt:'',
    WtToBeAllocd:'',  
  })

  //=============|| useLocation ||===================//
  
  const location = useLocation()
  const data = location.state.state
  console.log(data);
  
  //=============|| inputHandler ||===================//

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue, 
      [name]: value,
    });
  };
  
  //=============|| for calulating pending item Quantity ||===================//
  const convertToNum =(num)=>{
    return parseInt(num)
  }

  const quantityToBeAllocated = convertToNum(specificIname.availQuantity)-convertToNum(inputValue.allocdQty)



  //======== for updating item quantity By order number =====//
  
  const getByOrderNO =(orderRefNo)=>{
    console.log(orderRefNo);
    fetch(`http://localhost:4000/CustomerOrderForm/newCustOrdModel/getAllCustOrdByorderRefNo/${orderRefNo}`)
    .then(response => response.json())
    .then(data =>{
      setSpecificIname(data)
    })
    .catch(err=> console.log(err))
  }

  //======== for sub order table =====//
  const handleSubOrder = async(e)=>{
    e.preventDefault()

    //======|| Updataing the Item Quantity ||=========//
    const res =await fetch(`http://localhost:4000/CustomerOrderForm/newCustOrdModel/updateSpecificCustOrd/${specificIname.orderRefNo}`,{
      method:'PUT',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        availQuantity:quantityToBeAllocated
      })
    })
    
    const UdatedData = await res.json();
    console.log(UdatedData)

    setSubOrderTable(true)
    const newGSSO ={
      OrderNo:specificIname.OrderNo,
      orderRefNo:specificIname.orderRefNo,
      ItemName:specificIname.finalIname,
      availQuantity:specificIname.availQuantity,
      allocdWt:inputValue.allocdWt,
      allocdQty:inputValue.allocdQty,
      pendingQuantity:quantityToBeAllocated,
    }
    setSuborder([...Suborder,newGSSO])

  }
  const pushToDB= async(e)=>{
    e.preventDefault()
    console.log(inputValue)
    const { GSName } = inputValue
    console.log({
      GSName:GSName,
      subOrder:Suborder
    });

    // for backend

    // const { GSName } = inputValue
    // const res =await fetch('http://localhost:4000/GSO/createGSOrder',{
    //   method:'POST',
    //   headers:{
    //     "content-type":"application/json"
    //   },
    //   body:JSON.stringify({
    //     GSName, subOrder:Suborder
    //   })
    // })
    
    // const data = await res.json();
    // if(data){
    //   window.location.reload();
    // }
    // alert('GSO Created Sucessfully!')
    navigate.push('/customer-order-form/order-form-view')

  }
  useEffect(()=>{
    if(location.state.state){
      setIsOpen(false)
    }
  },[])

  return (
    <>
    {
      // location&&location.state===undefined?(
        isOpen?(
        <div>
          <p>manual open</p>
        </div>
      ):(<div className='row'>
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h5 className="card-title">Order Number: <span className=''>{data.OrderNo}</span></h5>
                <p className="card-description">Customer Name <span className='text-danger'>{data.customerName}</span></p> */}
                <div className="table-responsive OFtable-res ">
                  <table className="table table-bordered OFtable ">
                    <thead>
                      <tr>
                        <th>SL.No</th>
                        <th>Click </th>
                        <th>Order Number</th>
                        <th>Order reference Number</th>
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
                        <th>Available Quantity</th>
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
                          data.map((lineItem, index)=>{
                            return<tr>
                              <td>{index+1}</td>
                              <td><button className='btn btn-outline-primary mr-4' onClick={()=>{getByOrderNO(lineItem.orderRefNo)}}>get</button></td>
                              <td>{lineItem.orderNo}</td>
                              <td>{lineItem.orderRefNo}</td>
                              <td>{lineItem.finalIname}</td>
                              <td>{lineItem.itemQuantity}</td>
                              <td className='text-success'>{lineItem.availQuantity}</td>
                              <td>{lineItem.placedOrderDate}</td>
                              <td>{lineItem.requiredDate}</td>
                              <td>{lineItem.customerOrderTouch}</td>
                              <td>{lineItem.targetTouch}</td>
                              <td>{lineItem.seal}</td>
                              <td>{lineItem.qualitySeries}</td>
                              <td>{lineItem.saleName}</td>
                              <td>{lineItem.itemStage}</td>
                              <td>{lineItem.noOfDesign}</td>
                              <td>{lineItem.quantityPerDesign}</td>
                              <td>{lineItem.unitWT_UL}</td>
                              <td>{lineItem.unitWT_LL}</td>
                              <td>{lineItem.estimatedWeight}</td>
                              <td>{lineItem.screwMake}</td>
                              <td>{lineItem.screwSize}</td>
                              <td>{lineItem.cuttingType}</td>
                              <td>{lineItem.cuttingDesign}</td>
                              <td>{lineItem.stoneBrand}</td>
                              <td>{lineItem.polishType}</td>
                              <td>{lineItem.dimmyColType}</td>
                              <td>{lineItem.SILSURColouringType}</td>
                              <td>{lineItem.surfaceFinish}</td>
                              <td>{lineItem.coat}</td>
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
                </div>
              </div>
            </div>
            
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Gold Smith Order</h4>
                    <form className="forms-sample">
                      <div className='row'>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label  htmlFor="orderNO" className="col-sm-4 col-form-label">Order Number </label>
                            <div className="col-sm-8">
                              <Form.Control required  type="text"  name='orderNO' value={specificIname.orderNo} onChange={handleInputChange}  className="form-control" id="orderNO" placeholder="Order Number" />
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label  htmlFor="itemName" className="col-sm-4 col-form-label">Item Name</label>
                            <div className="col-sm-8">
                            <Form.Control required  type="text"  name='itemName' value={specificIname.finalIname} onChange={handleInputChange}  className="form-control" id="itemName" placeholder='Item Name'/>
                              {/* <select className="form-control" name='ItemName' value={specificIname.ItemName} onChange={handleInputChange}  id="itemName">
                                <option value=''>select</option>
                                {
                                  data.map((list)=>{
                                    return <option key={list.finalIname} value={list.finalIname}>{list.finalIname}</option>
                                  })
                                }
                              </select> */}
                            </div>
                          </Form.Group>
                        </div>
                      </div> 
                      <div className='row'>
                        <div className="col-md-6">
                        <Form.Group className="row">
                                <label  htmlFor="goldSmithName" className="col-sm-4 col-form-label">Gold Smith Name </label>
                                <div className="col-sm-8">
                                  <Form.Control required  type="text"  name='GSName' value={inputValue.GSName} onChange={handleInputChange}  className="form-control" id="goldSmithName" placeholder="Gold Smith Name" />
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                        <Form.Group className="row">
                            <label  htmlFor="orderQuantity" className="col-sm-4 col-form-label">Available Quantity</label>
                            <div className="col-sm-8">
                            <Form.Control required  type="text"  name='OrderedQty' value={specificIname.availQuantity} onChange={handleInputChange} className="form-control" id="orderQuantity" placeholder="Available Quantity" />
                            </div>
                        </Form.Group>
                        </div>
                     </div> 
                      <div className='row'>
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="allocdWt" className="col-sm-4 col-form-label"> Allocated Weight</label>
                                <div className="col-sm-8">
                                <Form.Control required  type="text"  name='allocdWt' value={inputValue.allocdWt} onChange={handleInputChange} className="form-control" id="allocdWt" placeholder="Allocated Weight" />
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="WtToBeAllocd" className="col-sm-4 col-form-label"> weight To Be Allocated</label>
                                <div className="col-sm-8">
                                <Form.Control required  type="text"  name='WtToBeAllocd' value={inputValue.WtToBeAllocd} onChange={handleInputChange}  className="form-control" id="WtToBeAllocd" placeholder=" Weight To Be Allocated" />
                                </div>
                            </Form.Group>
                        </div>
                      </div> 
                      <div className='row'>
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="AlloQty" className="col-sm-4 col-form-label"> Allocated Quantity</label>
                                <div className="col-sm-8">
                                <Form.Control required  type="text"  name='allocdQty' value={inputValue.allocdQty} onChange={handleInputChange} className="form-control" id="AlloQty" placeholder="Allocated Quantity" />
                                </div>
                            </Form.Group>
                        </div>
                        
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="productQuantity" className="col-sm-4 col-form-label"> Quantity To Be Allocated</label>
                                <div className="col-sm-8">
                                <Form.Control required  type="number"  name='QtyToBeAllocd' value={quantityToBeAllocated} onChange={handleInputChange}  className="form-control" id="productQuantity" placeholder=" Quantity To Be Allocated" />
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <div className='col'>
                                <button type="submit" onClick={handleSubOrder} className="btn btn-outline-primary mr-4">Save</button>
                            </div>
                        </div>
                      </div>
                   </form>
                </div>
                </div>
            </div>
            {/* table */}
            {
              subOrderTable? 
              <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Gold Smith Sub Orders</h4>
                <h5 className="card-title">Gold Smith Name: <span className='text-primary'>{inputValue.GSName}</span></h5>
                <div className="table-responsive OFtable-res">
                  <table className="table table-bordered OFtable">
                    <thead>
                      <tr>
                        <th> SL No. </th>
                        <th> Order No </th>
                        <th> Item Name </th>
                        <th> Item Quantity </th>
                        <th> Allocated Quantity </th>
                        <th> Allocated weight </th>
                        <th> Pending Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      Suborder.map((result,index,key)=>{
                        return<tr key={key}>
                          <td>{index+1}</td>
                          <td>{result.orderRefNo}</td>
                          <td>{result.ItemName}</td>
                          <td>{result.availQuantity}</td>
                          <td>{result.allocdQty}</td>
                          <td>{result.allocdWt}</td>
                          <td>{result.pendingQuantity}</td>
                        </tr>
                      })
                    }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
              :""
            }
          
          <div className="col-md-12 grid-margin">
             <div className="card">
              <div className="card-body">
                <div className='row'>
                  <div className="col-md-3">
                    <button type="submit" onClick={pushToDB} className="btn btn-primary mr-4">Create Gold Smith Order</button>
                  </div>
                  {/* <div className="col-md-9">
                    <Form.Group className="row">
                      <label  htmlFor="GSONoGen" className="col-sm-3 col-form-label">GSO Number Generated </label>
                      <div className="col-sm-9">
                        <Form.Control required  type="text"  name='GSOrderNo' value={inputValue.GSOrderNo} onChange={handleInputChange} className="form-control" id="GSONoGen" placeholder="GSO Number Generated" />
                      </div>
                    </Form.Group>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>)
        // (
        //   <div>
        //      from COFview  use
        //   </div>
        // )
                }
      </>
  )
}

export default GSOrder
