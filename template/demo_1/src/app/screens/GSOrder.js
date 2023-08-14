import React, { useEffect, useState } from 'react'
import  { Form} from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import './CustomCssFile.css'


const GSOrder = () => {
  
  const location = useLocation()
  const data =location.state

  const[orderFormData,setOrderFormData] = useState([])
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
      orderNo:"123",
      goldSmithName:"123",
      itemName:"123",
      orderQuantity:"123",
      allocatedWeight:"123",
      allocatedQuantity:"123",
      WeightToBeAllocated:"123",
      quantityToBeAllocated:"123",
    }
    setSuborder([...Suborder,newGSSO])

  }

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
    if(data){
      window.location.reload();
    }
    alert('GSO Created Sucessfully!')

  }

  useEffect(()=>{

    fetch('http://localhost:4000/CustomerOrderForm/getAllOrders')
    .then(response => response.json())
    .then(data =>
     {console.log(data);
     return data
     })
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
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="row">
                                <label  htmlFor="goldSmithName" className="col-sm-4 col-form-label">Gold Smith Name </label>
                                <div className="col-sm-8">
                                <Form.Control  type="text"  name='GSName'value={data.lineItem} onChange={handleInputChange}  className="form-control" id="goldSmithName" placeholder="Gold Smith Name" />
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
                      Suborder.map((result, index)=>{
                        return<tr>
                          <td>{index+1}</td>
                          <td>{result.data}</td>
                          <td>{result.data1}</td>
                          <td>{result.data2}</td>
                          <td>{result.data3}</td>
                          <td>{result.data4}</td>
                          <td>{result.data}</td>
                          <td>{result.data1}</td>
                          <td>{result.data2}</td>
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
