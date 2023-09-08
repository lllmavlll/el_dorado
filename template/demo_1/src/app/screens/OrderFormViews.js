import React, { useEffect, useState } from 'react'
// import {Form} from 'react-bootstrap'
import './CustomCssFile.css'
import { useHistory } from "react-router-dom";
import { Form } from 'react-bootstrap';



// const initialState ={
//   loading:true,
//   error:'',
//   fetchData:{}
// }

// const reducer =(state,action)=>{
//   switch(action.type){
//     case 'FETCH_SUCCESS':
//       return{
//         loading:false,
//         fetchData:action.payload,
//         error:''
//       }
//     case 'FETCH_FAILED':
//       return{
//         loading:true,
//         fetchData:{},
//         error:'Sometihing went Wrong'
//       }
//       default:
//         return state
//   }
// }
const OrderFormViews = () => {

  const navigate =useHistory()

  // const [state, dispatch]=useReducer(reducer,initialState)

  const [orderFormData,setOrderFormData] = useState([])
  const [allTheCustomers,setAllTheCustomers] = useState([])
  const [orderViewByCust,setOrderViewByCust] = useState([])
  const [isCustView,setIsCustView] = useState(false)
  const [lineItemList,setLineItemList] = useState([])
  const [inputValue,setInputValue] = useState({
    itemStage:'',
    customerName:""
  })

const onClickHandler =(e)=>{
  const hiddenElement = e.currentTarget.nextSibling;
  hiddenElement.className.indexOf("collapse show") > -1 ? hiddenElement.classList.remove("show") : hiddenElement.classList.add("show");
 }

 const handleInputChange = (event) => {
  const { name, value } = event.target;
  // setClearInput(event.target.value)
  setInputValue({
    ...inputValue, 
    [name]: value,
  });

};

 //==============|| get Order Views By Customer Name||===================//

 const getByCustomerName = ()=>{
  setOrderViewByCust([])// to clear the previous state values 
  fetch(`http://localhost:4000/CustomerOrderForm/getAllByCust/${inputValue.customerName}`)
  .then(response => response.json())
  .then(data =>{
    setOrderViewByCust(data)
    setIsCustView(true)
   })
  .catch((err)=>{ 
    alert("Enter a valid Customer Name ")
    console.log(err)
  })

 }

 //==============|| to reroute to gso  via checkBox ||===================//

const reRouteViaCheckBox =(orderRefNo,orIndex)=>{
  console.log(orderRefNo,orIndex);
  fetch(`http://localhost:4000/CustomerOrderForm/getSpecificLineItem/${orderRefNo}/${orIndex}`)
  .then(response => response.json())
  .then(data =>{
    console.log(data);
    return data
  }) 
  .then(data=>{
    if (lineItemList.find(item => item.orderRefNo === data.orderRefNo)) {
      setLineItemList(lineItemList.filter(item => item.orderRefNo !== data.orderRefNo));
    } else {
      setLineItemList([...lineItemList,data])
      console.log(lineItemList);
    }
  })
  .catch(error => {
    console.error('Error fetching user data:', error);
  });
}


 //==============|| to reroute to gso ||===================//
 
 const reRouteFunc =()=>{
  navigate.push('/gold-smith/order',{state:lineItemList})
  
 }

  useEffect(()=>{

   fetch('http://localhost:4000/CustomerOrderForm/getAllOrders')
   .then(response => response.json())
   .then(data =>
    {console.log(data);
    return data
    })
    .then(data =>{
      setOrderFormData(data)
      
    })
   .catch(err=> console.log(err))

   fetch('http://localhost:4000/CustomerOrderForm/getAllCustomersFromOrders')
   .then(response => response.json())
   .then(data =>
    {console.log(data);
    return data
    })
    .then(data =>{
      setAllTheCustomers(data)
      console.log(allTheCustomers);
      
    })
   .catch(err=> console.log(err))



  },[])

  return (
    <>
        <div className='page-header'>
          <h1 className='page-title'>Order Form View</h1>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Filter</h5>
                <div className='row'>
                  <div className="col-md-4">
                    <Form.Group>
                      <div className="input-group">
                      <Form.Control autoComplete='off' type="text" value={inputValue.customerName} onChange={handleInputChange} name='customerName'  className="form-control" placeholder="Search by Customer Name"  />
                        <div className="input-group-append">
                          <button className="btn btn-sm btn-primary" onClick={()=>getByCustomerName(inputValue.customerName)} type="submit" >Search</button>
                          <div className="dropdown-menu DropDown">
                              {allTheCustomers.filter((item)=>{
                                const searchTerm = inputValue.customerName.toLowerCase()
                                const fullTerm = item.customerName.toLowerCase()
                                return searchTerm && fullTerm.startsWith(searchTerm) && fullTerm!==searchTerm
                              }).slice(0,10).map((item, index)=>{
                                  return(
                                    <option className='DropDown-row text-primary'onClick={()=>setInputValue({customerName:item.customerName})} key={index}>{item.customerName}</option>
                                  )
                                })
                              }
                          </div>
                        </div>
                      </div>
                    </Form.Group>
                    </div>
                  
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="itemStage" className="col-sm-3 col-form-label">Item Stage</label>
                        <div className="col-sm-8">
                          <select type="text" value={inputValue.itemStage} onChange={handleInputChange}  name='itemStage'  className="form-control" id="itemStage" >
                            <option value=""> Select</option>
                            <option value="FINISHED">FINISHED </option>
                            <option value="FINISHED-WO SCREW">FINISHED-WO SCREW </option>
                            <option value="BLK-WO SCREW">BLK-WO SCREW </option>
                            <option value="DP-WO SCREW">DP-WO SCREW </option>
                            <option value="WO ST- DP-WO SCREW">WO ST- DP-WO SCREW </option>
                            <option value="WO CUTTING-DP-WO SCREW">WO CUTTING-DP-WO SCREW </option>
                          </select>
                        </div>
                      </Form.Group>
                    </div> 

                    <div className='col-md-2'>
                      <button type="submit"  onClick={()=>{setIsCustView(false)}} className="btn btn-outline-primary mr-2">View All</button>
                    </div> 
                  
                </div>
              </div>
            </div>
          </div>
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title"></h4> */}
                <div className="table-responsive OFtable-res ">
                  <table className="table table-bordered OFtable ">
                    <thead>
                      <tr>
                        <th>SL.No</th>
                        <th>Customer Name</th>
                        <th>Order Number</th>
                      </tr>
                    </thead>
                    {
                      isCustView?
                    (<tbody style={{position:'relative'}}>
                        {
                             orderViewByCust&&orderViewByCust.map((result,index,key) =>{
                              return<>
                              <tr key={key} className='collapseRow' onClick={onClickHandler}>
                                <td>{index+1}</td>
                                <td>{result.customerName}</td>
                                <td>{result.OrderNo}</td>
                              </tr>
                              <tr className="collapse">
                                <td colSpan="6">
                                <h5 className="card-title">line item for Order No: {result.OrderNo}</h5>
                                <div className="table-responsive OFtable-res ">
                                <table className="table table-bordered OFtable ">
                                  <thead>
                                  <tr>
                                    <th>Select</th>
                                    <th>SL.No</th>
                                    <th>Order Ref No</th>
                                    <th>Placed Order Date</th>
                                    <th>required Date</th>
                                    <th>Cust order Touch</th>
                                    <th>Target Touch</th>
                                    <th>seal</th>
                                    <th>Quality series</th>
                                    <th>Final Iname</th>
                                    <th>Sale Name</th>
                                    <th>Item Stage</th>
                                    <th>No. Of Design</th>
                                    <th>Quantity/Design</th>
                                    <th>Item Quantity</th>
                                    <th>Available Quantity</th>
                                    <th>Unit Weight UL</th>
                                    <th>Unit Weight LL</th>
                                    <th>Estimated Weight</th>
                                    <th>Screw Make</th>
                                    <th>Screw Size</th>
                                    <th>Cutting Type</th>
                                    <th>Cutting Design</th>
                                    <th>Stone Brand</th>
                                    <th>Polish Type</th>
                                    <th>Dimmy Col Type</th>
                                    <th>SILSUR color Type</th>
                                    <th>Surface Finish</th>
                                    <th>Coat</th>
                                    <th>Card Type</th>
                                    <th>Card Fittin Plan</th>
                                    <th>Stone Setting Type</th>
                                    <th>Remarks</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      result.lineItem.map((lineItem,index,key)=>{
                                        return <tr key={key}>
                                        <td>
                                          <div className="form-check form-check-muted m-0">
                                            <label className="form-check-label">
                                              <input type="checkbox" 
                                              className="form-check-input" 
                                              onChange={()=>{reRouteViaCheckBox(lineItem.orderRefNo,lineItem.itemIndex)}}
                                              />
                                              <i className="input-helper"></i>
                                            </label>
                                          </div>
                                        </td>
                                        <td>{index+1}</td>
                                        <td>{lineItem.orderRefNo}</td>
                                        <td>{lineItem.placedOrderDate}</td>
                                        <td>{lineItem.requiredDate}</td>
                                        <td>{lineItem.customerOrderTouch}</td>
                                        <td>{lineItem.targetTouch}</td>
                                        <td>{lineItem.seal}</td>
                                        <td>{lineItem.qualitySeries}</td>
                                        <td>{lineItem.finalIname}</td>
                                        <td>{lineItem.saleName}</td>
                                        <td>{lineItem.itemStage}</td>
                                        <td>{lineItem.noOfDesign}</td>
                                        <td>{lineItem.QuantityPerDesign}</td>
                                        <td>{lineItem.itemQuantity}</td>
                                        <td className='text-success'>{lineItem.availQuantity}</td>
                                        <td>{lineItem.unitWT_UL}</td>
                                        <td>{lineItem.unitWT_LL}</td>
                                        <td>{lineItem.estimatedWeight}</td>
                                        <td>{lineItem.ScrewMake}</td>
                                        <td>{lineItem.screwSize}</td>
                                        <td>{lineItem.cuttingType}</td>
                                        <td>{lineItem.cuttingDesign}</td>
                                        <td>{lineItem.stoneBrand}</td>
                                        <td>{lineItem.polishType}</td>
                                        <td>{lineItem.dimmyColType}</td>
                                        <td>{lineItem.SILSURColouringType}</td>
                                        <td>{lineItem.surfaceFinish}</td>
                                        <td>{lineItem.Coat}</td>
                                        <td>{lineItem.cardType}</td>
                                        <td>{lineItem.cfPlan}</td>
                                        <td>{lineItem.stoneSettingType}</td>
                                        <td>{lineItem.remarks}</td>
                                      </tr>
                                      })
                                    }
                                   
                                  </tbody>
                                  </table>
                                  </div>
                                </td>
                              </tr>
                              </>
                             })
                        }
                    </tbody>):
                    (<tbody style={{position:'relative'}}>
                        {
                             orderFormData&&orderFormData.jewelrie&&orderFormData.jewelrie.map((result,index,key) =>{
                              return<>
                              <tr key={key} className='collapseRow' onClick={onClickHandler}>
                                <td>{index+1}</td>
                                <td>{result.customerName}</td>
                                <td>{result.OrderNo}</td>
                              </tr>
                              <tr className="collapse">
                                <td colSpan="6">
                                <h5 className="card-title">line item for Order No: {result.OrderNo}</h5>
                                <div className="table-responsive OFtable-res ">
                                <table className="table table-bordered OFtable ">
                                  <thead>
                                  <tr>
                                    <th>Select</th>
                                    <th>SL.No</th>
                                    <th>Order Ref No</th>
                                    <th>Placed Order Date</th>
                                    <th>required Date</th>
                                    <th>Cust order Touch</th>
                                    <th>Target Touch</th>
                                    <th>seal</th>
                                    <th>Quality series</th>
                                    <th>Final Iname</th>
                                    <th>Sale Name</th>
                                    <th>Item Stage</th>
                                    <th>No. Of Design</th>
                                    <th>Quantity/Design</th>
                                    <th>Item Quantity</th>
                                    <th>Available Quantity</th>
                                    <th>Unit Weight UL</th>
                                    <th>Unit Weight LL</th>
                                    <th>Estimated Weight</th>
                                    <th>Screw Make</th>
                                    <th>Screw Size</th>
                                    <th>Cutting Type</th>
                                    <th>Cutting Design</th>
                                    <th>Stone Brand</th>
                                    <th>Polish Type</th>
                                    <th>Dimmy Col Type</th>
                                    <th>SILSUR color Type</th>
                                    <th>Surface Finish</th>
                                    <th>Coat</th>
                                    <th>Card Type</th>
                                    <th>Card Fittin Plan</th>
                                    <th>Stone Setting Type</th>
                                    <th>Remarks</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      result.lineItem.map((lineItem,index,key)=>{
                                        return <tr key={key}>
                                        <td>
                                          <div className="form-check form-check-muted m-0">
                                            <label className="form-check-label">
                                              <input type="checkbox" 
                                              className="form-check-input" 
                                              onChange={()=>{reRouteViaCheckBox(lineItem.orderRefNo,lineItem.itemIndex)}}
                                              />
                                              <i className="input-helper"></i>
                                            </label>
                                          </div>
                                        </td>
                                        <td>{index+1}</td>
                                        <td>{lineItem.orderRefNo}</td>
                                        <td>{lineItem.placedOrderDate}</td>
                                        <td>{lineItem.requiredDate}</td>
                                        <td>{lineItem.customerOrderTouch}</td>
                                        <td>{lineItem.targetTouch}</td>
                                        <td>{lineItem.seal}</td>
                                        <td>{lineItem.qualitySeries}</td>
                                        <td>{lineItem.finalIname}</td>
                                        <td>{lineItem.saleName}</td>
                                        <td>{lineItem.itemStage}</td>
                                        <td>{lineItem.noOfDesign}</td>
                                        <td>{lineItem.QuantityPerDesign}</td>
                                        <td>{lineItem.itemQuantity}</td>
                                        <td className='text-success'>{lineItem.availQuantity}</td>
                                        <td>{lineItem.unitWT_UL}</td>
                                        <td>{lineItem.unitWT_LL}</td>
                                        <td>{lineItem.estimatedWeight}</td>
                                        <td>{lineItem.ScrewMake}</td>
                                        <td>{lineItem.screwSize}</td>
                                        <td>{lineItem.cuttingType}</td>
                                        <td>{lineItem.cuttingDesign}</td>
                                        <td>{lineItem.stoneBrand}</td>
                                        <td>{lineItem.polishType}</td>
                                        <td>{lineItem.dimmyColType}</td>
                                        <td>{lineItem.SILSURColouringType}</td>
                                        <td>{lineItem.surfaceFinish}</td>
                                        <td>{lineItem.Coat}</td>
                                        <td>{lineItem.cardType}</td>
                                        <td>{lineItem.cfPlan}</td>
                                        <td>{lineItem.stoneSettingType}</td>
                                        <td>{lineItem.remarks}</td>
                                      </tr>
                                      })
                                    }
                                   
                                  </tbody>
                                  </table>
                                  </div>
                                </td>
                              </tr>
                              </>
                             })
                        }
                    </tbody>)
                    }
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className='row'>
                  <div className="col-md-3">
                    <button type="submit" onClick={reRouteFunc} className="btn btn-primary mr-4">Create Gold Smith Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
</>
)

}

export default OrderFormViews
