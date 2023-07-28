import React, { useState } from 'react'
import  { Form} from 'react-bootstrap'

const GSOrder = () => {

  const [inputValue,setInputValue] = useState({
    GSOrderNo:'',
    OrderNo:'',
    GSName:'',
    ItemName:'',
    OrderedQty:'',
    allocdQty:'',
    QtyToBeAllocd:'',
    allocdWt:'',
    WtToBeAllocd:'',  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue, 
      [name]: value,
    });
  };

  const pushToDB= async(e)=>{
    e.preventDefault()
    console.log(inputValue)

    // for backend


    const {
      GSOrderNo,
      OrderNo,
      GSName,
      ItemName,
      OrderedQty,
      allocdQty,
      QtyToBeAllocd,
      allocdWt,
      WtToBeAllocd, 
    } = inputValue

    const res =await fetch('http://localhost:4000/GSO/createGSOrder',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        GSOrderNo,
        OrderNo,
        GSName,
        ItemName,
        OrderedQty,
        allocdQty,
        QtyToBeAllocd,
        allocdWt,
        WtToBeAllocd, 
      })
    })
    
    const data = await res.json();
    // if(data){
    //   window.location.reload();
    // }
    alert('GSO Created Sucessfully!')

  }

  return (
    <>
        <div className='row'>
            <div className="col-md-12 grid-margin stretch-card">
             <div className="card">
              <div className="card-body">
                <h4 className="card-title">Gold Smith Order</h4>
                    <form className="forms-sample">

                      <div className='row'>
                        
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="goldSmithName" className="col-sm-4 col-form-label">Order Number </label>
                                <div className="col-sm-8">
                                  <select className="form-control" name='OrderNo' value={inputValue.OrderNo} onChange={handleInputChange}    id="stoneBrand">
                                      <option  value=""> Select</option>
                                      <option value="Order Number_1">Order Number_1</option>
                                      <option value="Order Number_2">Order Number_2</option>
                                      <option value="Order Number_3">Order Number_3</option>
                                  </select>
                                </div>
                            </Form.Group>
                        </div>

                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="goldSmithName" className="col-sm-4 col-form-label">Gold Smith Name </label>
                                <div className="col-sm-8">
                                <Form.Control  type="text"  name='GSName'value={inputValue.GSName} onChange={handleInputChange}  className="form-control" id="goldSmithName" placeholder="Gold Smith Name" />
                                </div>
                            </Form.Group>
                        </div>

                      </div> 

                      <div className='row'>
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="itemName" className="col-sm-4 col-form-label">Item Name</label>
                                <div className="col-sm-8">
                                <Form.Control  type="text"   name='ItemName' value={inputValue.ItemName} onChange={handleInputChange} className="form-control" id="itemName" placeholder="Item Name" />
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                        <Form.Group className="row">
                            <label  htmlFor="orderQuantity" className="col-sm-4 col-form-label">Order Quantity</label>
                            <div className="col-sm-8">
                            <Form.Control  type="text"  name='OrderedQty' value={inputValue.OrderedQty} onChange={handleInputChange} className="form-control" id="orderQuantity" placeholder="Order Quantity" />
                            </div>
                        </Form.Group>
                        </div>
                     </div> 

                      <div className='row'>
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="allocdWt" className="col-sm-4 col-form-label"> Allocated Weight</label>
                                <div className="col-sm-8">
                                <Form.Control  type="text"  name='allocdWt' value={inputValue.allocdWt} onChange={handleInputChange} className="form-control" id="allocdWt" placeholder="Allocated Weight" />
                                </div>
                            </Form.Group>
                        </div>
                        
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="WtToBeAllocd" className="col-sm-4 col-form-label"> weight To Be Alloted</label>
                                <div className="col-sm-8">
                                <Form.Control  type="text"  name='WtToBeAllocd' value={inputValue.WtToBeAllocd} onChange={handleInputChange}  className="form-control" id="WtToBeAllocd" placeholder=" Weight To Be Alloted" />
                                </div>
                            </Form.Group>
                        </div>
                       
                      </div> 
                      <div className='row'>
                      <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="AlloQty" className="col-sm-4 col-form-label"> Allocated Quantity</label>
                                <div className="col-sm-8">
                                <Form.Control  type="text"  name='allocdQty' value={inputValue.allocdQty} onChange={handleInputChange} className="form-control" id="AlloQty" placeholder="Allocated Quantity" />
                                </div>
                            </Form.Group>
                        </div>
                        
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="productQuantity" className="col-sm-4 col-form-label"> Quantity To Be Alloted</label>
                                <div className="col-sm-8">
                                <Form.Control  type="text"  name='QtyToBeAllocd' value={inputValue.QtyToBeAllocd} onChange={handleInputChange}  className="form-control" id="productQuantity" placeholder=" Quantity To Be Alloted" />
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <div className='col'>
                                <button type="submit" onClick={e=>e.preventDefault()} className="btn btn-primary mr-4">Save</button>
                            </div>
                        </div>
                      </div>
                   </form>
                </div>
                </div>
            </div>  


            {/* table */}
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"> Order List</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> SL No. </th>
                        <th> Order Number </th>
                        <th> Item Name </th>
                        <th> Item Qty </th>
                        <th> Allocated Qty </th>
                        <th> Qty to be Allocated </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Allocated Qty " />
                        </td>
                        <td>
                            <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Qty To Be Allocate " />
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Allocated Qty " />
                        </td>
                        <td>
                          <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Qty To Be Allocate " />
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Allocated Qty " />
                        </td>
                        <td>
                          <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Qty To Be Allocate " />
                        </td>
                      </tr>
                      <tr>
                        <td> 4 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Allocated Qty " />
                        </td>
                        <td>
                          <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Qty To Be Allocate " />
                        </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Allocated Qty " />
                        </td>
                        <td>
                          <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Qty To Be Allocate " />
                        </td>
                      </tr>
                      <tr>
                        <td> 6 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Qty To Be Allocate"/>
                        </td>
                        <td>
                          <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Qty To Be Allocated  " />
                        </td>
                      </tr>
                      <tr>
                        <td> 7 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Allocated Qty " />
                        </td>
                        <td>
                          <Form.Control type="text"  className="form-control" id="CustomerName" placeholder="Qty To Be Allocated " />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 grid-margin">
             <div className="card">
              <div className="card-body">
                <div className='row'>
                  <div className="col-md-3">
                    <button type="submit" onClick={pushToDB} className="btn btn-primary mr-4">Create Gold Smith Order</button>
                  </div>
                  <div className="col-md-9">
                    <Form.Group className="row">
                      <label  htmlFor="GSONoGen" className="col-sm-3 col-form-label">GSO Number Generated </label>
                      <div className="col-sm-9">
                        <Form.Control  type="text"  name='GSOrderNo' value={inputValue.GSOrderNo} onChange={handleInputChange} className="form-control" id="GSONoGen" placeholder="GSO Number Generated" />
                      </div>
                    </Form.Group>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
    </>
  )
}

export default GSOrder
