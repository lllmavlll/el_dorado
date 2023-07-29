import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
// import DatePicker from "react-datepicker";



var joinedValue


const OrderItems = () => {

  const [inputValue,setInputValue] = useState({
    Category:'',
    Group:"",
    SubGroup:"",
    CoreProductName:"",
    ModelNo:"",
    Nstone:"",
    Size:"",
    StoneColourPattern:"",
    ScrewType:"",
})

const [show,setShow] = useState(false)

const values =[inputValue.Category,inputValue.SubGroup,inputValue.CoreProductName,inputValue.ModelNo,inputValue.Nstone,inputValue.Size,inputValue.StoneColourPattern,inputValue.ScrewType]

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
    const values =[inputValue.Category,inputValue.SubGroup,inputValue.CoreProductName,inputValue.ModelNo,inputValue.Nstone,inputValue.Size,inputValue.StoneColourPattern,inputValue.ScrewType]
    joinedValue = values.join('_')
    console.log(joinedValue);
    alert(`Iname is: ${joinedValue}`)
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
    // console.log(values)
    // console.log(inputValue)
  
  
    //for banckend

    const { Category, Group, SubGroup, CoreProductName, ModelNo, Nstone, Size, StoneColourPattern, ScrewType, SKUNo} = inputValue
    const res =await fetch('http://localhost:4000/iname/createIname',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        Category, Group, SubGroup, CoreProductName, ModelNo, Nstone, Size, StoneColourPattern, ScrewType, SKUNo
      })
    })
    
    const data = await res.json();
    if(data){
      window.location.reload();
    }
    alert('product name created sucessfully!')

}

  return (
    <>
      <div >
        <div className="page-header">
          <h3 className="page-title"> product</h3>
        </div>
        <div className="row">                       
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create New Product</h4>
                <form className="forms-sample">
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="Category" className="col-sm-5 col-form-label">Category</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.Category} onChange={handleInputChange}  name='Category'  className="form-control" id="Category" placeholder="Category" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="Group" className="col-sm-5 col-form-label">Group Name</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.Group} onChange={handleInputChange}    name='Group'  className="form-control" id="Group" placeholder="Group Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="subGrpName" className="col-sm-5 col-form-label">Sub Group Nmae</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.SubGroup} onChange={handleInputChange}    name='SubGroup'  className="form-control" id="subGrpName" placeholder="Sub Group Nmae" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="coreProdName" className="col-sm-5 col-form-label">Core Product Name</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.CoreProductName} onChange={handleInputChange}    name='CoreProductName'  className="form-control" id="coreProdName" placeholder="Core Product Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="ModelNo" className="col-sm-5 col-form-label">Model Number</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.ModelNo} onChange={handleInputChange}    name='ModelNo'  className="form-control" id="ModelNo" placeholder="Model Number" />
                        </div>
                      </Form.Group>
                    </div>
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
                <h4 className="card-title">Stone Properties</h4>
                <form className="forms-sample">
                  {/* <div className="col"> */}
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label  htmlFor="Nstone" className="col-sm-4 col-form-label">No.Of Stone</label>
                        <div className="col-sm-8">
                          <Form.Control  type="text" value={inputValue.Nstone} onChange={handleInputChange}  name='Nstone'  className="form-control" id="Nstone" placeholder="No.Of Stone" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label  htmlFor="Size" className="col-sm-4 col-form-label">Size Of.Stone</label>
                        <div className="col-sm-8">
                          <Form.Control  type="text" value={inputValue.Size} onChange={handleInputChange}    name='Size'  className="form-control" id="Size" placeholder="Size Of.Stone" />
                        </div>
                      </Form.Group>
                    </div>
                    
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label  htmlFor="Category" className="col-sm-4 col-form-label">Stone Colour Pattern</label>
                        <div className="col-sm-8">
                          <Form.Control  type="text" value={inputValue.StoneColourPattern} onChange={handleInputChange}  name='StoneColourPattern'  className="form-control" id="StoneColourPattern" placeholder="Stone Colour Pattern" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label  htmlFor="ScrewType" className="col-sm-4 col-form-label">Screw Type</label>
                        <div className="col-sm-8">
                          <Form.Control  type="text" value={inputValue.ScrewType} onChange={handleInputChange}    name='ScrewType'  className="form-control" id="ScrewType" placeholder="Screw Type" />
                        </div>
                      </Form.Group>
                    </div>

                  {/* </div> */}
                  <div className='row'>
                    <div className='col'>
                      <p></p>
                      <button type="submit" onClick={inputHandler} className="btn btn-primary mr-4">Submit</button>
                    </div>
                    <div className='col'>
                      <p></p>
                      <button type="submit" onClick={showProductName} className="btn btn-primary mr-4">Show Product Name</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
            <div className="col-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">View Item Name</h4>
                  <form className="forms-sample">
                    <div className='col'>
                    <div id='displayName'>
                      <h4 className='col'>
                        <label>Final Product Name: </label>{show && <p name='productIName' value={joinedValue} onChange={handleInputChange}>{joinedValue}</p>}  
                      </h4>
                      <div className='row'>

                      <Form.Group id='#col1' className='col'>
                          <div className="col">
                          <button type="submit" onClick={pushToDB} className="btn btn-primary mr-4">submit the data</button>
                          </div>
                      </Form.Group>
                      </div>
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
