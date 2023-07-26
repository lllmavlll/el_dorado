import React, { useState } from 'react'
import { Form } from 'react-bootstrap';




const GSreceive = () => {

  const [inputValue,setInputValue] = useState({
  })
  
  const handleInputChange = (event) => {}
  return (
    <>
        <div className="page-header">
          <h1 className="page-title"> Gold Smith Receive </h1>
        </div>
        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title">Customer Details</h4> */}
                <form className="forms-sample">
                <Form.Group className='row'>
                    <label htmlFor="receivedDate" className="col-sm-5 col-form-label" >Receive Date</label>
                    <div className="col-sm-7">
                    <Form.Control type="date"  value={inputValue.receivedDate} name='customerName' onChange={handleInputChange} className="form-control" id="receivedDate" placeholder="Customer Name" />
                    </div>
                  </Form.Group>
                <Form.Group className='row'>
                    <label htmlFor="GSName" className="col-sm-5 col-form-label" >Goldsmith Name</label>
                    <div className="col-sm-7">
                    <Form.Control type="text"  value={inputValue.GSName} name='GSName' onChange={handleInputChange} className="form-control" id="GSName" placeholder='Goldsmith Name' />
                    </div>
                  </Form.Group>
                <Form.Group className='row'>
                    <label htmlFor="RecNo" className="col-sm-5 col-form-label" >Rec Number</label>
                    <div className="col-sm-7">
                    <Form.Control type="text"  value={inputValue.RecNo} name='RecNo' onChange={handleInputChange} className="form-control" id="RecNo" placeholder='Rec Number' />
                    </div>
                  </Form.Group>
                <Form.Group className='row'>
                    <label htmlFor="CustomerOrderNo" className="col-sm-5 col-form-label" >Cust order Touch</label>
                    <div className="col-sm-7">
                    <Form.Control type="text"  value={inputValue.customerOrderTouch} name='customerOrderTouch' onChange={handleInputChange} className="form-control" id="CustomerOrderNo" placeholder="Cust order number" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="targetTouch" className="col-sm-5 col-form-label">Target Touch</label>
                    <div className="col-sm-7">
                    <Form.Control type="text"  value={inputValue.targetTouch} name='targetTouch' onChange={handleInputChange} className="form-control" id="targetTouch" placeholder="Target Touch" />
                    </div>
                  </Form.Group>

                  <Form.Group className='row'>
                    <label htmlFor="seal" className="col-sm-5 col-form-label">seal</label>
                    <div className="col-sm-7">
                    <select className="form-control"  value={inputValue.seal}  onChange={handleInputChange} name='seal' id="seal">
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
          <div className="col-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Product Details</h4>
                <form className="forms-sample">

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="qualitySeries" className="col-sm-4 col-form-label">Quality series</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.qualitySerires} name='qualitySerires'  onChange={handleInputChange}  className="form-control" id="qualitySeries" placeholder="Quality series" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="category" className="col-sm-4 col-form-label">Category</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.category} name='category'  onChange={handleInputChange}  className="form-control" id="category" placeholder="Category" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="groupName" className="col-sm-4 col-form-label">Group Name</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.groupName} name='groupName' onChange={handleInputChange}  className="form-control" id="groupName" placeholder="Group Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="subGrpName" className="col-sm-4 col-form-label">Sub Grp Name</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.subGroupName} name='subGroupName' onChange={handleInputChange}  className="form-control" id="subGrpName" placeholder="Sub Group Name" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="CoreProdName" className="col-sm-4 col-form-label">Core Prdt Name</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.coreProductName} name='coreProductName' onChange={handleInputChange}  className="form-control" id="CoreProdName" placeholder="Core Prdt Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="modelNo" className="col-sm-4 col-form-label">Model No.</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.modelNo} name='modelNo' onChange={handleInputChange}  className="form-control" id="modelNo" placeholder="Model No." />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="noOfStones" className="col-sm-4 col-form-label">No. Of Stones</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.noOfStones} name='noOfStones' onChange={handleInputChange}  className="form-control" id="noOfStones" placeholder="No. Of Stones" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="size" className="col-sm-4 col-form-label">Size</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.sizeofStone} name='sizeofStone' onChange={handleInputChange}  className="form-control" id="size" placeholder="Size" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="stoneClrPattren" className="col-sm-4 col-form-label">Stn Clr pattern</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.stoneColourPattern} name='stoneColourPattern' onChange={handleInputChange}  className="form-control" id="stoneClrPattren" placeholder="Stone Color pattern" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="screwType" className="col-sm-4 col-form-label">Screw Type </label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.screwType} name='screwType' onChange={handleInputChange}  className="form-control" id="screwType" placeholder="Screw Type " />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="saleName" className="col-sm-4 col-form-label">Sale Name</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.saleName} name='saleName' onChange={handleInputChange}  className="form-control" id="saleName" placeholder="Sale Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="itemStage" className="col-sm-4 col-form-label">Item Stage</label>
                        <div className="col-sm-8">
                        <select    value={inputValue.itemStage} name='itemStage' onChange={handleInputChange}  className="form-control" id="itemStage"  >
                          <option  value=""> Select</option>
                          <option  value="FINISHED">FINISHED </option>
                          <option  value="FINISHED-WO SCREW">FINISHED-WO SCREW </option>
                          <option  value="BLK-WO SCREW">BLK-WO SCREW </option>
                          <option  value="DP-WO SCREW">DP-WO SCREW </option>
                          <option  value="WO ST- DP-WO SCREW">WO ST- DP-WO SCREW </option>
                          <option  value="WO CUTTING-DP-WO SCREW">WO CUTTING-DP-WO SCREW </option>
                        </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="SKUNo" className="col-sm-4 col-form-label">SKU No.</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.SKUNo} name='SKUNo' onChange={handleInputChange}  className="form-control" id="SKUNo" placeholder="Enter/scan for SKU" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="targetTouch" className="col-sm-4 col-form-label">Image</label>
                        <div className="col-sm-8">
                        <Form.Control  type="d"  name='' onChange={''}  className="form-control" id="targetTouch"  />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  {/* <button type="submit"  value={inputValue.}  onChange={handleInputChange} className="btn btn-primary mr-2">Save</button> */}
                  {/* <button className="btn btn-dark">Cancel</button> */}
                </form>
              </div>
            </div>
          </div>
          </div>
    </>
  )
}

export default GSreceive
