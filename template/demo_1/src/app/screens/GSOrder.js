import React, { useEffect, useState } from 'react'
import  { Form} from 'react-bootstrap'
// import { useLocation } from "react-router-dom";
import './CustomCssFile.css'


const GSOrder = () => {
  const[orderFormData,setOrderFormData] = useState([])
  // const[itemQty,setItemQty] = useState([])
  // const[lineItemDD,setLineItemDD] = useState([])
  const[subOrderTable,setSubOrderTable] = useState(false)
  const[Suborder,setSuborder] = useState([])
  
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

    // const location = useLocation()
    // const data =location.state
    // console.log(location.state);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue, 
      [name]: value,
    });
  };


  //======== for sub order table =====//

  const handleSubOrder =(e)=>{
    e.preventDefault()
    setSubOrderTable(true)
    const newGSSO ={
      orderNo:inputValue.OrderNo,
      goldSmithName:inputValue.GSName,
      itemName:inputValue.ItemName,
      orderQuantity:inputValue.OrderedQty,
      allocatedWeight:inputValue.allocdWt,
      allocatedQuantity:inputValue.allocdQty,
      WeightToBeAllocated:inputValue.WtToBeAllocd,
      quantityToBeAllocated:inputValue.QtyToBeAllocd,
    }
    setSuborder([...Suborder,newGSSO])
    console.log(Suborder.orderNo);

  }


  // const getitemQty =(event)=>{
  //   const { name, value } = event.target;
  //   setInputValue({
  //     ...inputValue, 
  //     [name]: value,
  //   });
  //   event.preventDefault()
  //   const orderNumber = data.state.orderNo
  //     // Fetch user data by id
  //     fetch(`localhost:4000/CustomerOrderForm/getIQ/25`+orderNumber)
  //       .then(response => response.json())
  //      .then(data =>{
  //       setItemQty(data.data)
  //       console.log(itemQty)
  //     })
  //       .catch(error => {
  //         console.error('Error fetching user data:', error);
  //     });
  // }

  const pushToDB= async(e)=>{
    e.preventDefault()
    console.log(inputValue)

    // for backend
    
    const {
      OrderNo,
      // OrderedQty,
      
    } = inputValue
    
    // const OrderNo=location.state.orderNo
    const res =await fetch('http://localhost:4000/GSO/createGSOrder',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        OrderNo, subOrder:Suborder
      })
    })
    
    const data = await res.json();
    if(data){
      window.location.reload();
    }
    alert('GSO Created Sucessfully!')

  }

  useEffect(()=>{

    fetch('http://localhost:4000/CustomerOrderForm/getAllOrders')
    .then(response => response.json())
    // .then(data =>
    //  {console.log(data);
    //  return data
    //  })
    .then(data =>setOrderFormData(data))
    .catch(err=> console.log(err))
     // fetchData();
   },[])

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
                                <label  htmlFor="orderNO" className="col-sm-4 col-form-label">Order Number </label>
                                <div className="col-sm-8">
                                  <select className="form-control" name='OrderNo' value={inputValue.OrderNo} onChange={handleInputChange}    id="orderNO">
                                    <option value=''>select</option>
                                    {
                                       orderFormData&&orderFormData.jewelrie&&orderFormData.jewelrie.map(result =>{
                                return  <option value={result.OrderNo}>
                                          {result.OrderNo}
                                        </option>

                                       })

                                    }
                                  </select>
                                  {/* <Form.Control  type="text"  name='orderNO' value={data.state.orderNo} onChange={handleInputChange}  className="form-control" id="orderNO" placeholder="Order Number" /> */}

                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="goldSmithName" className="col-sm-4 col-form-label">Gold Smith Name </label>
                                <div className="col-sm-8">
                                  <Form.Control  type="text"  name='GSName' value={inputValue.GSName} onChange={handleInputChange}  className="form-control" id="goldSmithName" placeholder="Gold Smith Name" />
                                </div>
                            </Form.Group>
                        </div>

                      </div> 

                      <div className='row'>
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="itemName" className="col-sm-4 col-form-label">Item Name</label>
                                <div className="col-sm-8">
                                {/* <select className="form-control" name='ItemName' value={inputValue.ItemName} onChange={handleInputChange}  id="itemName">
                                    <option value=''>select</option>
                                  {
                                    data.state.lineItem.map((list)=>{
                                      return <option key={list.finalIname} value={list.finalIname}>{list.finalIname}</option>
                                    })
                                  }
                                  </select> */}
                                <Form.Control  type="text"   name='ItemName' value={inputValue.ItemName} onChange={handleInputChange} className="form-control" id="itemName" placeholder="Item Name" />
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                        <Form.Group className="row">
                            <label  htmlFor="orderQuantity" className="col-sm-4 col-form-label">Item Quantity</label>
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
                                <button type="submit" onClick={handleSubOrder} className="btn btn-primary mr-4">Save</button>
                            </div>
                        </div>
                      </div>
                   </form>
                </div>
                </div>
            </div>  


            {/* table */}
            {
              subOrderTable? 
              <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Gold Smith Sub Orders</h4>
                <div className="table-responsive OFtable-res">
                  <table className="table table-bordered OFtable">
                    <thead>
                      <tr>
                        <th> SL No. </th>
                        <th> GSO No.</th>
                        <th> Item Name </th>
                        <th> Item Quantity </th>
                        <th> Allocated Quantity </th>
                        <th> Allocated weight </th>
                        <th> Gold Smith Name </th>
                        <th> Quantity to be Allocated </th>
                        <th> Weight to be Allocated </th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      Suborder.map((result,index)=>{
                        return<tr>
                          <td>{index+1}</td>
                          <td>{result.orderNo}</td>
                          <td>{result.itemName}</td>
                          <td>{result.orderQuantity}</td>
                          <td>{result.allocatedQuantity}</td>
                          <td>{result.allocatedWeight}</td>
                          <td>{result.goldSmithName}</td>
                          <td>{result.quantityToBeAllocated}</td>
                          <td>{result.WeightToBeAllocated}</td>
                        </tr>
                      })
                    }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
              :""
            }
          
          <div className="col-md-12 grid-margin">
             <div className="card">
              <div className="card-body">
                <div className='row'>
                  <div className="col-md-3">
                    <button type="submit" onClick={pushToDB} className="btn btn-primary mr-4">Create Gold Smith Order</button>
                  </div>
                  {/* <div className="col-md-9">
                    <Form.Group className="row">
                      <label  htmlFor="GSONoGen" className="col-sm-3 col-form-label">GSO Number Generated </label>
                      <div className="col-sm-9">
                        <Form.Control  type="text"  name='GSOrderNo' value={inputValue.GSOrderNo} onChange={handleInputChange} className="form-control" id="GSONoGen" placeholder="GSO Number Generated" />
                      </div>
                    </Form.Group>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        
        </div>
    </>
  )
}

export default GSOrder
