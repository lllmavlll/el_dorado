import React from 'react'
import  { Form } from 'react-bootstrap'


const GSIssuance = () => {

    return(
        <>
        <div className="page-header">
          <h3 className="page-title"> Gold Smith Issuance</h3>
        </div>
        <div className="row">                       
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">GSO Number</h4>
                <form className="forms-sample">
                  <div className="row">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row showStoneProperties">                       
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">pure gold</h4>
                 <form className="forms-sample">
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="goldQuantity" className="col-sm-4 col-form-label">Gold Quantity </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name=''  className="form-control" id="goldQuantity" placeholder="Gold Quantity" />
                        </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="goldAmount" className="col-sm-4 col-form-label">Gold Amount </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name=''  className="form-control" id="goldAmount" placeholder="Gold Amount" />
                        </div>
                    </Form.Group>
                  </div>
                </form>
              </div>
            </div>
          </div>
            <div className="col-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Components</h4>
                  <form className="forms-sample">
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="goldQuantity" className="col-sm-4 col-form-label">Gold Quantity </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name=''  className="form-control" id="goldQuantity" placeholder="Gold Quantity" />
                        </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="goldAmount" className="col-sm-4 col-form-label">Gold Amount </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name=''  className="form-control" id="goldAmount" placeholder="Gold Amount" />
                        </div>
                    </Form.Group>
                  </div>
                  <button type="submit"  className="btn btn-primary mr-4">Add  another component</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </>  
    )
//   return (
//     <>
//         <h1>GSI</h1>
//         <div className='row'>
//         <div className="col-md-12 grid-margin stretch-card">
//              <div className="card">
//               <div className="card-body">
//                     <form className="forms-sample">
//                       <div className='row'>
//                         <div className="col-md-4">
//                              <h4  className='card-title'>Material  <button style={{marginLeft:"25px"}} type="submit" onClick={e=>e.preventDefault()} className="btn btn-primary mr-4">add +</button></h4>
//                         </div>
                       
//                         <div className="col-md-4">
//                             <Form.Group className="row">
//                                 <label  htmlFor="goldQuantity" className="col-sm-4 col-form-label">GSO Number </label>
//                                 <div className="col-sm-8">
//                                 <select className="form-control"    id="stoneBrand">
//                                     <option  value=""> Select</option>
//                                     <option value="GSO NUMBER">GSO NUMBER</option>
//                                     <option value="GSO NUMBER">GSO NUMBER</option>
//                                     <option value="GSO NUMBER">GSO NUMBER</option>
//                                 </select>
//                                 </div>
//                             </Form.Group>
//                         </div>

//                      </div> 
//                       <div className='row'>
//                         <div className="col-md-4">
//                             <Form.Group className="row">
//                                 <label  htmlFor="materialName" className="col-sm-4 col-form-label">Name</label>
//                                 <div className="col-sm-8">
//                                 <Form.Control  type="text"   name='materialName'  className="form-control" id="materialName" placeholder="Material Name" />
//                                 </div>
//                             </Form.Group>
//                         </div>
//                         {/* <div className="col-md-4">
//                         <Form.Group className="row">
//                             <label  htmlFor="materialType" className="col-sm-4 col-form-label"> Type</label>
//                             <div className="col-sm-8">
//                             <Form.Control  type="text"  name='materialType'  className="form-control" id="materialType" placeholder="Material Type" />
//                             </div>
//                         </Form.Group>
//                         </div> */}
//                         <div className="col-md-4">
//                         <Form.Group className="row">
//                             <label  htmlFor="materialQty" className="col-sm-4 col-form-label">Quantity </label>
//                             <div className="col-sm-8">
//                             <Form.Control  type="text"  name='materialQty'  className="form-control" id="materialQty" placeholder="Material Quantity" />
//                             </div>
//                         </Form.Group>
//                         </div>

//                      </div> 

//                      {/* <span className="menu-icon">  <h4 className="card-title">Components <i className="mdi mdi-plus"></i></h4></span> */}
                               
//                      <h4 style={{marginTop:"45px"}}  className='card-title'>components  <button style={{marginLeft:"15px"}}  type="submit" onClick={e=>e.preventDefault()} className="btn btn-primary mr-4">add +</button></h4>

//                       <div className='row'>
                        
//                         <div className="col-md-4">
//                             <Form.Group className="row">
//                                 <label  htmlFor="productQuantity" className="col-sm-4 col-form-label"> </label>
//                                 <div className="col-sm-8">
//                                 <select className="form-control"    id="stoneBrand">
//                                     <option  value=""> Select</option>
//                                     <option value="Component_1">Component_1</option>
//                                     <option value="Component_2">Component_2</option>
//                                     <option value="Component_3">Component_3</option>
//                                 </select>
//                                 </div>
//                             </Form.Group>
//                         </div>
                        
//                         <div className="col-md-4">
//                             <Form.Group className="row">
//                                 <label  htmlFor="productQuantity" className="col-sm-4 col-form-label"> </label>
//                                 <div className="col-sm-8">
//                                 <select className="form-control"    id="stoneBrand">
//                                     <option  value=""> Select</option>
//                                     <option value="Component_1">Component_1</option>
//                                     <option value="Component_2">Component_2</option>
//                                     <option value="Component_3">Component_3</option>
//                                 </select>
//                                 </div>
//                             </Form.Group>
//                         </div>
                        
//                         <div className="col-md-4">
//                             <Form.Group className="row">
//                                 <label  htmlFor="productQuantity" className="col-sm-4 col-form-label"> </label>
//                                 <div className="col-sm-8">
//                                 <select className="form-control"    id="stoneBrand">
//                                     <option  value=""> Select</option>
//                                     <option value="Component_1">Component_1</option>
//                                     <option value="Component_2">Component_2</option>
//                                     <option value="Component_3">Component_3</option>
//                                 </select>
//                                 </div>
//                             </Form.Group>
//                         </div>
//                         <div className="col-md-6">
//                             {/* <div className='col'>
//                                 <button type="submit" onClick={e=>e.preventDefault()} className="btn btn-primary mr-4">Save</button>
//                             </div> */}
//                         </div>
//                       </div> 
//                    </form>
//                 </div>
//                 </div>
//             </div>  

//         </div>
//     </>
//   )
}

export default GSIssuance
