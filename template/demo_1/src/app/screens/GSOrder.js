import React from 'react'
import  { Form, ProgressBar } from 'react-bootstrap'

const GSOrder = () => {
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
                                  <select className="form-control"    id="stoneBrand">
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
                                <Form.Control  type="text"  name='goldSmithName'  className="form-control" id="goldSmithName" placeholder="Gold Smith Name" />
                                </div>
                            </Form.Group>
                        </div>

                      </div> 

                      <div className='row'>
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="itemName" className="col-sm-4 col-form-label">Item Name</label>
                                <div className="col-sm-8">
                                <Form.Control  type="text"   name='itemName'  className="form-control" id="itemName" placeholder="Item Name" />
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                        <Form.Group className="row">
                            <label  htmlFor="itemQty" className="col-sm-4 col-form-label">Item Quantity</label>
                            <div className="col-sm-8">
                            <Form.Control  type="text"  name='itemQty'  className="form-control" id="itemQty" placeholder="Item Quantity" />
                            </div>
                        </Form.Group>
                        </div>
                     </div> 

                      <div className='row'>
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="AlloQty" className="col-sm-4 col-form-label"> Allocated Quantity</label>
                                <div className="col-sm-8">
                                <Form.Control  type="text"  name='AlloQty'  className="form-control" id="AlloQty" placeholder="Allocated Quantity" />
                                </div>
                            </Form.Group>
                        </div>
                        
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="productQuantity" className="col-sm-4 col-form-label"> Quantity To Be Alloted</label>
                                <div className="col-sm-8">
                                <Form.Control  type="text"  name='productQuantity'  className="form-control" id="productQuantity" placeholder=" Quantity To Be Alloted" />
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
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td> 4 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td> 6 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td> 7 </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
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
                    <button type="submit" onClick={e=>e.preventDefault()} className="btn btn-primary mr-4">Create Gold Smith Order</button>
                  </div>
                  <div className="col-md-9">
                    <Form.Group className="row">
                      <label  htmlFor="GSONoGen" className="col-sm-3 col-form-label">GSO Number Generated </label>
                      <div className="col-sm-9">
                        <Form.Control  type="text"  name='GSONoGen'  className="form-control" id="GSONoGen" placeholder="GSO Number Generated" />
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
