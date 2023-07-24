import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import $ from 'jquery';


export class orderItems extends Component {
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

    const showStoneProperties = document.querySelector( '.showStoneProperties')
    const showPropBtn = document.querySelector('.showBtn')

  //  const onClickHandler=(e)=>{
  //       e.preventDefault()
  //     }

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> product</h3>
        </div>
        
        <div className="row">                       
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <form className="forms-sample">
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="coreProductName" className="col-sm-5 col-form-label">Core Product Name </label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="coreProductName" placeholder="Core Product Name" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="groupName" className=" col-sm-5 col-form-label">Group Name</label>
                      <div className="col">
                        
                      <Form.Control type="text" className="form-control" id="groupName" placeholder="Group Name" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="subGroupName" className="col-sm-5 col-form-label ">Sub Group Name</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="subGroupName" placeholder="Sub Group Name" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="modelNo" className="col-sm-5 col-form-label">Model No.</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="modelNo" placeholder="Model No." />
                      </div>
                    </Form.Group>
                    {/* <Form.Group className='col'>
                      <label htmlFor="isStone" className=" col-sm-5 col-form-label">Is Stone</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="isStone" placeholder="Is Stone" />
                      </div>
                    </Form.Group> */}
                    <Form.Group className='col'>
                      <label htmlFor="stoneProperties" className="col-sm-5 col-form-label ">Stone Properties</label>

                      <div className="col">
                      {/* <Form.Control type="button" value='show' onClick={(e)=>{e.preventDefault();}}className="form-control showBtn" id="stoneProperties"  /> */}
                      <button onClick={''} className='form-control' id="stoneProperties">show</button>
                      </div>
                    </Form.Group>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row showStoneProperties">                       
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <form className="forms-sample">
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="noOfStones" className="col-sm-5 col-form-label">No. Of Stones </label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="noOfStones" placeholder="No. Of Stones" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="sizeofStone" className=" col-sm-5 col-form-label">Size of Stone</label>
                      <div className="col">
                        
                      <Form.Control type="text" className="form-control" id="sizeofStone" placeholder="Size of Stone" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="stoneColourPattern" className="col-sm-6 col-form-label ">Stone Colour Pattern</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="stoneColourPattern" placeholder="Stone Colour Pattern" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="screwType" className="col-sm-5 col-form-label">Screw Type</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="screwType" placeholder="Screw Type" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="SKUNo" className=" col-sm-5 col-form-label">SKU No.</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="SKUNo" placeholder="SKU No." />
                      </div>
                    </Form.Group>
                    
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

export default orderItems
