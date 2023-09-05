import React, { useState } from 'react'
import './CustomCssFile.css'
import  { Form} from 'react-bootstrap'


const ManualGSO = () => {

    const [dataByOrNo, setDataByOrNo] = useState([])
    const [isOrdertable, setIsTable] =useState(false)
    const [inputValue,setInputValue] = useState({
        orderNo:'',
      })

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        // setClearInput(event.target.value)
        setInputValue({
          ...inputValue, 
          [name]: value,
        });
      
      };

      
 const getByOrderNo = (e)=>{
    e.preventDefault()
    // setDataByOrNo([])
    fetch(`http://localhost:4000/CustomerOrderForm/getOrderNo/${inputValue.orderNo}`)
    .then(response => response.json())
    .then(data =>{
        setDataByOrNo(data)
        if(data){
            setIsTable(true)
        }else{
            alert('Enter A valid Order Number')
            setInputValue({ orderNo:'',})
        }
     })
    .catch((err)=>{ 
      console.log(err)
    })
  
   }
   const getByOrderNO =(OrderNo,orderRefNo,itemIndex)=>{
  
    
    //===============  fetch for global order ======//
    fetch(`http://localhost:4000/CustomerOrderForm/getSpecificLineItem/${orderRefNo}/${itemIndex}`)
    .then(response => response.json())
    .then(data =>{
    //   setSpecificIname(data)
    })
    .catch(err=> console.log(err))
    // setIsFetching(true)
  }

   const handleSubOrder =(e)=>{
    e.preventDefault()
    // setSubOrderTable(true)
    const newGSSO ={
      OrderNo:inputValue.OrderNo,
      orderRefNo:inputValue.orderRefNo,
      ItemName:inputValue.finalIname,
      availQuantity:inputValue.availQuantity,
      allocdWt:inputValue.allocdWt,
      allocdQty:inputValue.allocdQty,
      pendingQuantity:inputValue.QtyToBeAllocd,
    }
    // setSuborder([...Suborder,newGSSO])

  }

  return (
    <>
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
              <h4 className="card-title">Search for Orders</h4>
                <form className='forms-sample'>
                    <div className='row'>
                        <div className='col-md-5'>
                        <Form.Group>
                            <div className="input-group">
                                <Form.Control autoComplete='off' type="text" value={inputValue.orderNo} onChange={handleInputChange} name='orderNo' className="form-control" placeholder="Search by Order Number"/>
                                <div className="input-group-append">
                                    <button className="btn btn-sm btn-primary" onClick={getByOrderNo}>Search</button>
                                </div>
                            </div>
                        </Form.Group>
                        </div>
                    </div>
                </form>
              </div>
            </div>
        </div>  
        {
            isOrdertable?
        
        (<div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
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
                          dataByOrNo&&dataByOrNo.lineItem.map((lineItem, index)=>{
                            return<tr>
                              <td>{index+1}</td>
                              <td><button className='btn btn-outline-primary mr-4'>get</button></td>
                              <td>{lineItem.OrderNo}</td>
                              <td>{lineItem.orderRefNo}</td>
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
                              <td className='text-success'>{lineItem.availQuantity}</td>
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
                </div>
            </div>
        </div>)
        :''
        }

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
                              <Form.Control required  type="text"  name='orderNO' value={inputValue.OrderNo} onChange={handleInputChange}  className="form-control" id="orderNO" placeholder="Order Number" />
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label  htmlFor="itemName" className="col-sm-4 col-form-label">Item Name</label>
                            <div className="col-sm-8">
                                <Form.Control required  type="text"  name='itemName' value={inputValue.finalIname} onChange={handleInputChange}  className="form-control" id="itemName" placeholder='Item Name'  />
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
                            <Form.Control required  type="text"  name='OrderedQty' value={inputValue.availQuantity} onChange={handleInputChange} className="form-control" id="orderQuantity" placeholder="Available Quantity" />
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
                                <Form.Control required  type="text"  name='QtyToBeAllocd' value={inputValue.QtyToBeAllocd} onChange={handleInputChange}  className="form-control" id="productQuantity" placeholder=" Quantity To Be Allocated" />
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
    </>
  )
}

export default ManualGSO
