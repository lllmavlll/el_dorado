import React from 'react'
import  { Form, ProgressBar } from 'react-bootstrap'

const GSOrder = () => {
  return (
    <>
        <div className='row'>
            <div className="col-md-12 grid-margin stretch-card">
             <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title">Customer Details</h4> */}
                <form className="forms-sample">

                    <div className='row'>
                        <div className="col-md-12">
                            <Form.Group className="row">
                                <label  htmlFor="goldSmithName" className="col-sm-2 col-form-label">Gold Smith Name </label>
                                <div className="col-sm-10">
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
                                <label  htmlFor="itemQty" className="col-sm-4 col-form-label">Item Quantity</label>
                                <div className="col-sm-8">
                                <Form.Control  type="text"  name='itemQty'  className="form-control" id="itemQty" placeholder="Item Quantity" />
                                </div>
                            </Form.Group>
                        </div>
                        
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="productQuantity" className="col-sm-4 col-form-label">Product Quantity</label>
                                <div className="col-sm-8">
                                <Form.Control  type="text"  name='productQuantity'  className="form-control" id="productQuantity" placeholder="Product Quantity" />
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
                <h4 className="card-title">Gold Smith Order List</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> SL No. </th>
                        <th> Gols Smith Name </th>
                        <th> Item Name </th>
                        <th> Item Quantity </th>
                        <th> Product Name </th>
                        <th> Product Quantity </th>
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
        
        </div>
    </>
  )
}

export default GSOrder
