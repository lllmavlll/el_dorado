import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';

export class BasicElements extends Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  componentDidMount() {
    bsCustomFileInput.init()
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title"> Customer Order Form </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {/* <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
              <li className="breadcrumb-item active" aria-current="page">Form elements</li> */}
            </ol>
          </nav>
        </div>
        <div className="row">
        <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Customer Details</h4>
                <form className="forms-sample">
                <Form.Group className='row'>
                    <label htmlFor="CustomerName" className="col-sm-5 col-form-label" >Customer Name</label>
                    <div className="col-sm-7">
                    <Form.Control type="text" className="form-control" id="CustomerName" placeholder="Customer Name" />
                    </div>
                  </Form.Group>
                <Form.Group className='row'>
                    <label htmlFor="placedOrderDate" className="col-sm-5 col-form-label" >Place Order Date</label>
                    <div className="col-sm-7">
                    <Form.Control type="date" className="form-control" id="placedOrderDate" />
                    </div>
                  </Form.Group>
                <Form.Group className='row'>
                    <label htmlFor="RequiredDate" className="col-sm-5 col-form-label" >Required Date</label>
                    <div className="col-sm-7">
                    <Form.Control type="date" className="form-control" id="RequiredDate"  />
                    </div>
                  </Form.Group>
                <Form.Group className='row'>
                    <label htmlFor="CustomerOrderNo" className="col-sm-5 col-form-label" >Cust order Touch</label>
                    <div className="col-sm-7">
                    <Form.Control type="text" className="form-control" id="CustomerOrderNo" placeholder="Cust order number" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="targetTouch" className="col-sm-5 col-form-label">Target Touch</label>
                    <div className="col-sm-7">
                    <Form.Control type="text" className="form-control" id="targetTouch" placeholder="Target Touch" />
                    </div>
                  </Form.Group>

                  <Form.Group className='row'>
                    <label htmlFor="Seal" className="col-sm-5 col-form-label">Seal</label>
                    <div className="col-sm-7">
                    <select className="form-control" name='Seal' id="Seal">
                      <option  value=""> Select</option>
                      <option  value="oval VA">oval VA </option>
                      <option  value="sun VA">sun VA </option>
                      <option  value="R">R </option>
                      <option  value="VA">VA </option>
                      <option  value="VA6">VA6 </option>
                      <option  value="VA916">VA916 </option>
                    </select>
                    </div>
                  </Form.Group>
                 
                  {/* <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button> */}
                </form>
              </div>
            </div>
          </div>
          <div className="col-8 grid-margin ">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Product Details</h4>
                <form className="forms-sample">

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="qualitySeries" className="col-sm-4 col-form-label">Quality series</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="qualitySeries" placeholder="Quality series" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="category" className="col-sm-4 col-form-label">Category</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="category" placeholder="Category" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="groupName" className="col-sm-4 col-form-label">Group Name</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="groupName" placeholder="Group Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="subGrpName" className="col-sm-4 col-form-label">Sub Grp Name</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="subGrpName" placeholder="Sub Group Name" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="CoreProdName" className="col-sm-4 col-form-label">Core Prdt Name</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="CoreProdName" placeholder="Core Prdt Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="modelName" className="col-sm-4 col-form-label">Model Name</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="modelName" placeholder="Model Name" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="noOfStones" className="col-sm-4 col-form-label">No. Of Stones</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="noOfStones" placeholder="No. Of Stones" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="size" className="col-sm-4 col-form-label">Size</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="size" placeholder="Size" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="stoneClrPattren" className="col-sm-4 col-form-label">Stn Clr pattern</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="stoneClrPattren" placeholder="Stone Color pattern" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="screwType" className="col-sm-4 col-form-label">Screw Type </label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="screwType" placeholder="Screw Type " />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="saleName" className="col-sm-4 col-form-label">Sale Name</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="saleName" placeholder="Sale Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="itemStage" className="col-sm-4 col-form-label">Item Stage</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="itemStage" placeholder="Item Stage" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="SKUNo" className="col-sm-4 col-form-label">SKU No.</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  className="form-control" id="SKUNo" placeholder="Enter/scan for SKU" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="targetTouch" className="col-sm-4 col-form-label">Image</label>
                        <div className="col-sm-8">
                        <Form.Control  type="d"  className="form-control" id="targetTouch"  />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  {/* <button type="submit" className="btn btn-primary mr-2">Save</button> */}
                  {/* <button className="btn btn-dark">Cancel</button> */}
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Quantity Details</h4>
                {/* <p className="card-description"> Basic form elements </p> */}
                <form className="forms-sample">
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="NoOfdesign" className="col-sm-5 col-form-label">No. Of Design </label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="NoOfdesign" placeholder="No. Of Design" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="quantityPerDesign" className=" col-sm-5 col-form-label">Quantity/Design</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="quantityPerDesign" placeholder="Quantity/Design" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="itemQuantity" className="col-sm-5 col-form-label ">Item Quantity</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="itemQuantity" placeholder="Item Quantity" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="unitWtUL" className="col-sm-5 col-form-label">Unit Weight UL</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="unitWtUL" placeholder="Unit Weight UL" />
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series & touch band)</i></span>
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="unitWtLL" className=" col-sm-5 col-form-label">Unit Weight LL</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="unitWtLL" placeholder="Unit Weight LL" />
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series & touch band)</i></span>

                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="estimatedWeight" className="col-sm-5 col-form-label ">Estimated Weight</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="estimatedWeight" placeholder="Estimated Weight" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className='col'>
                    <button type="submit" className="btn btn-primary mr-4">Save</button>
                  </div>

                  {/*  custom image and remarks feild */}

                  {/* <Form.Group>
                    <label>Image</label>
                    <div className="custom-file">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="Remarks">Remarks</label>
                    <textarea className="form-control" id="Remarks" rows="4"></textarea>
                  </Form.Group>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button> */}
                </form>
              </div>
            </div>
          </div>
          
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title">Order Form</h4> */}
                {/* <p className="card-description"> Basic form elements </p> */}
                <form className="forms-sample">
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="AvgUn.Wt" className="col-sm-5 col-form-label">Average unit weight </label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="AvgUn.Wt" placeholder="Average unit weight" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="NoOfDES" className=" col-sm-5 col-form-label">Number of DES</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="NoOfDES" placeholder="N Stone" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="Quantity" className="col-sm-5 col-form-label ">Quantity</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="Quantity" placeholder="Quantity" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="TotalQuantity" className="col-sm-5 col-form-label">Total quantity</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="TotalQuantity" placeholder="Total quantity" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="EstWT" className=" col-sm-5 col-form-label">Esitmate  weight</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="EstWT" placeholder="Esitmate  weight" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="PureEst" className="col-sm-5 col-form-label ">Pure estimate</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="PureEst" placeholder="Pure estimate" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="AvgUn.Wt" className="col-sm-5 col-form-label">Average unit weight </label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="AvgUn.Wt" placeholder="Average unit weight" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="NoOfDES" className=" col-sm-5 col-form-label">Number of DES</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="NoOfDES" placeholder="N Stone" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="Quantity" className="col-sm-5 col-form-label ">Quantity</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="Quantity" placeholder="Quantity" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="TotalQuantity" className="col-sm-5 col-form-label">Total quantity</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="TotalQuantity" placeholder="Total quantity" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="EstWT" className=" col-sm-5 col-form-label">Esitmate  weight</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="EstWT" placeholder="Esitmate  weight" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="PureEst" className="col-sm-5 col-form-label ">Pure estimate</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="PureEst" placeholder="Pure estimate" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className='col'>
                    <Form.Group>
                      <label htmlFor="Remarks">Remarks</label>
                      <textarea className="form-control" id="Remarks" rows="4" placeholder='Remarks...' ></textarea>
                    </Form.Group>
                  </div>
                  <div className='col'>
                    <button type="submit" className="btn btn-primary mr-4">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BasicElements
