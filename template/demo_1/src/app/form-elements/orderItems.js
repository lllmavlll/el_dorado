import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
// import DatePicker from "react-datepicker";



var joinedValue


const OrderItems = () => {

  const [inputValue,setInputValue] = useState({
    coreProductName:"",
    groupName:"",
    subGroupName:"",
    modelNo:"",
    noOfStones:"",
    sizeofStone:"",
    stoneColourPattern:"",
    screwType:"",
    productIName:''
})

const [show,setShow] = useState(false)

const values =[inputValue.coreProductName,inputValue.groupName,inputValue.subGroupName,inputValue.modelNo,inputValue.noOfStones,inputValue.sizeofStone,inputValue.stoneColourPattern,inputValue.screwType,inputValue.productIName]

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue, 
      [name]: value,
    });
  };



const inputHandler= async(e)=>{
    e.preventDefault()
    // console.log(inputValue)
    const values =[inputValue.coreProductName,inputValue.groupName,inputValue.subGroupName,inputValue.modelNo,inputValue.noOfStones,inputValue.sizeofStone,inputValue.stoneColourPattern,inputValue.screwType]
    joinedValue = values.join('_')
    console.log(joinedValue);
    alert(joinedValue)
    // if (joinedValue) {
    //   window.location.reload();
    // }
  }
  
  const showProductName=(e)=>{
    e.preventDefault()
    setShow(true)

}
const pushToDB= async(e)=>{
    e.preventDefault()
    console.log(values)
    console.log(inputValue)
  
  
    //for banckend

    // const {coreProductName, groupName, subGroupName,modelNo,noOfStones,sizeofStone,stoneColourPattern ,screwType,productIName } = inputValue
    // const res =await fetch('http://localhost:4000/product-name',{
    //   method:'POST',
    //   headers:{
    //     "content-type":"application/json"
    //   },
    //   body:JSON.stringify({
    //     coreProductName, groupName, subGroupName, modelNo, noOfStones, sizeofStone, stoneColourPattern, screwType,productIName
    //   })
    // })
    
    // const data = await res.json();
    // if(data){
    //   window.location.reload();
    // }
    alert('product name created sucessfully!')

}

  return (
    <>
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
                      <Form.Control  name='coreProductName' value={inputValue.coreProductName} onChange={handleInputChange} type="text" className="form-control" id="coreProductName" placeholder="Core Product Name" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="groupName" className=" col-sm-5 col-form-label">Group Name</label>
                      <div className="col">
                        
                      <Form.Control  name='groupName' value={inputValue.groupName} onChange={handleInputChange} type="text" className="form-control" id="groupName" placeholder="Group Name" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="subGroupName" className="col-sm-5 col-form-label ">Sub Group Name</label>
                      <div className="col">
                      <Form.Control  name='subGroupName' value={inputValue.subGroupName} onChange={handleInputChange} type="text" className="form-control" id="subGroupName" placeholder="Sub Group Name" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="modelNo" className="col-sm-5 col-form-label">Model No.</label>
                      <div className="col">
                      <Form.Control  name='modelNo' value={inputValue.modelNo} onChange={handleInputChange} type="text" className="form-control " id="modelNo" placeholder="Model No." />
                      </div>
                    </Form.Group>
                    {/* <Form.Group className='col'>
                      <label htmlFor="isStone" className=" col-sm-5 col-form-label">Is Stone</label>
                      <div className="col">
                      <Form.Control  name='' value={inputValue.} onChange={handleInputChange} type="text" className="form-control" id="isStone" placeholder="Is Stone" />
                      </div>
                    </Form.Group> */}
                    <Form.Group className='col'>
                      <label htmlFor="stoneProperties" className="col-sm-5 col-form-label ">Stone Properties</label>

                      <div className="col">
                      {/* <Form.Control  name='' value={inputValue.} onChange={handleInputChange} type="button" value='show' onClick={(e)=>{e.preventDefault();}}className="form-control showBtn" id="stoneProperties"  /> */}
                      <button  className='form-control' id="stoneProperties">show</button>
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
                      <Form.Control  name='noOfStones' value={inputValue.noOfStones} onChange={handleInputChange} type="text" className="form-control" id="noOfStones" placeholder="No. Of Stones" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="sizeofStone" className=" col-sm-5 col-form-label">Size of Stone</label>
                      <div className="col">
                        
                      <Form.Control  name='sizeofStone' value={inputValue.sizeofStone} onChange={handleInputChange} type="text" className="form-control" id="sizeofStone" placeholder="Size of Stone" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="stoneColourPattern" className="col-sm-6 col-form-label ">Stone Colour Pattern</label>
                      <div className="col">
                      <Form.Control  name='stoneColourPattern' value={inputValue.stoneColourPattern} onChange={handleInputChange} type="text" className="form-control" id="stoneColourPattern" placeholder="Stone Colour Pattern" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="screwType" className="col-sm-5 col-form-label">Screw Type</label>
                      <div className="col">
                      <Form.Control  name='screwType' value={inputValue.screwType} onChange={handleInputChange} type="text" className="form-control" id="screwType" placeholder="Screw Type" />
                      </div>
                    </Form.Group>
                    {/* <Form.Group className='col'>
                      <label htmlFor="SKUNo" className=" col-sm-5 col-form-label">SKU No.</label>
                      <div className="col">
                      <Form.Control type="text" className="form-control" id="SKUNo" placeholder="SKU No." />
                      </div>
                    </Form.Group> */}
                    <div className='col'>
                      <p></p>
                      <button type="submit" onClick={inputHandler} className="btn btn-primary mr-4">Submit</button>
                    </div>
                    <div className='col'>
                      <p></p>
                      <button type="submit" onClick={showProductName} className="btn btn-primary mr-4">Show Product Name</button>
                    </div>

                  </div>

                  {/* <div className='col'>
                    <button type="submit" className="btn btn-primary mr-4">Save</button>
                  </div> */}
                    <div id='displayName'>
                      <h4 className='col'>
                        <label>Final Product Name: </label>{show && <p name='productIName' value={joinedValue} onChange={handleInputChange}>{joinedValue}</p>}  
                      </h4>
                      <div className='row'>

                      <Form.Group id='#col1' className='col'>
                          <div className="col">
                          <button type="submit" onClick={pushToDB} className="btn btn-primary mr-4">submit the data</button>
                          {/* <button id='inbtn' onClick={pushToDB} type='submit' >submit the data</button> */}
                          </div>
                      </Form.Group>
                      </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default OrderItems


// export class orderItems extends Component {
//   state = {
//     startDate: new Date()
//   };
 
//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   };

//   componentDidMount() {
//     bsCustomFileInput.init()
//   }



//   render() {

//     const showStoneProperties = document.querySelector( '.showStoneProperties')
//     const showPropBtn = document.querySelector('.showBtn')

//   //  const onClickHandler=(e)=>{
//   //       e.preventDefault()
//   //     }

//     return (
      
//     )
//   }
// }

// export default orderItems
