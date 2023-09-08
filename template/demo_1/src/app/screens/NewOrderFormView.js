import React, { useEffect, useState } from 'react'
import './CustomCssFile.css'
import { Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";




const NewOrderFormView = () => {
  const navigate =useHistory()


    const [orderFOrmData,setOrderFormData] =useState([])
     const [orderViewByCust,setOrderViewByCust] = useState([])
    const [isCustView,setIsCustView] = useState(false)
    const [lineItemList,setLineItemList] = useState([])
    const [inputValue,setInputValue] = useState({
      itemStage:'',
      customerName:""
    })

    //=============|| to capture all the customername ||==================//
    const customerArray = orderFOrmData.map(item=>item.customerName)

    const removeDup =(arr)=>{
      return [...new Set(arr)]
    }
    const filteredCustNames=removeDup(customerArray)
    const finalCUstNames = filteredCustNames.map((element)=>{
      return {customerName:element}
    })

    //=============|| to capture values in input ||==================//
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setInputValue({
        ...inputValue, 
        [name]: value,
      });
    
    };

    //=============|| find by customer Name||==================//

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

    //=============|| for table expansion ||==================//
    const onClickHandler =(e)=>{
      const hiddenElement = e.currentTarget.nextSibling;
      hiddenElement.className.indexOf("collapse show") > -1 ? hiddenElement.classList.remove("show") : hiddenElement.classList.add("show");
    }
 
  //=============|| to get multiple element once ||==================//
  
  const uniqueObjectMap = new Map();
  for (const obj of orderFOrmData) {
    uniqueObjectMap.set(obj.orderNo, obj);
  }
  const uniqueObjects = Array.from(uniqueObjectMap.values());
  
  //=============|| to get lineItems based on the matched OrderNo||==================//

  const reRouteViaCheckBox =(orderRefNo)=>{
    console.log(orderRefNo);
    fetch(`http://localhost:4000/CustomerOrderForm/newCustOrdModel/getAllCustOrdByorderRefNo/${orderRefNo}`)
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
    fetch('http://localhost:4000/CustomerOrderForm/getAllFromNew')
    .then(response => response.json())
    .then(data =>
        {console.log(data);
        return data
        })
        .then(data =>{
            setOrderFormData(data)
        })
    .catch(err=> console.log(err))


    },[])

    return (
        <>
            <div className='page-header'>
              <h1 className='page-title'>New Order Form View</h1>
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
                              {finalCUstNames.filter((item)=>{
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
                    {/* <h4 className="card-title"> GSO View</h4> */}
                    <div className="table-responsive OFtable-res ">
                      <table className="table table-bordered OFtable ">
                        <thead>
                          <tr>
                            <th> SL No. </th>
                            <th>Customer Name</th>
                            <th>Order NO</th>
                          </tr>
                        </thead>
                        <tbody>
                         {
                            uniqueObjects.map((orderArray,index) =>{
                              return <>
                                <tr className='collapseRow' onClick={onClickHandler}>
                                  <td>{index+1}</td>
                                  <td>{orderArray.customerName}</td>
                                  <td>{orderArray.orderNo}</td>
                                </tr>
                                <tr className="collapse">
                                  <td colSpan="6">
                                    <div className="table-responsive OFtable-res ">
                                      <table className="table table-bordered OFtable ">
                                        <thead>
                                          <tr>
                                            <th>Select</th>
                                            <th>SL.No</th>
                                            <th>Order Ref No</th>
                                            <th>Final Iname</th>
                                            <th>Item Quantity</th>
                                            <th>Available Quantity</th>
                                            <th>Placed Order Date</th>
                                            <th>required Date</th>
                                            <th>Cust order Touch</th>
                                            <th>Target Touch</th>
                                            <th>seal</th>
                                            <th>Quality series</th>
                                            <th>Sale Name</th>
                                            <th>Item Stage</th>
                                            <th>No. Of Design</th>
                                            <th>Quantity/Design</th>
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
                                          orderFOrmData.filter(item=>item.orderNo === orderArray.orderNo)
                                          .map((list,index,key)=>{
                                            return<>
                                              <tr key={key}>
                                                <td>
                                                  <div className="form-check form-check-muted m-0">
                                                    <label className="form-check-label">
                                                      <input type="checkbox" 
                                                      className="form-check-input" 
                                                      onChange={()=>{reRouteViaCheckBox(list.orderRefNo)}}
                                                      />
                                                      <i className="input-helper"></i>
                                                    </label>
                                                  </div>
                                                </td>
                                                <td>{index+1}</td>
                                                <td>{list.orderRefNo}</td>
                                                <td>{list.finalIname}</td>
                                                <td>{list.itemQuantity}</td>
                                                <td className='text-success'>{list.availQuantity}</td>
                                                <td>{list.placedOrderDate}</td>
                                                <td>{list.requiredDate}</td>
                                                <td>{list.customerOrderTouch}</td>
                                                <td>{list.targetTouch}</td>
                                                <td>{list.seal}</td>
                                                <td>{list.qualitySeries}</td>
                                                <td>{list.saleName}</td>
                                                <td>{list.itemStage}</td>
                                                <td>{list.noOfDesign}</td>
                                                <td>{list.quantityPerDesign}</td>
                                                <td>{list.unitWT_UL}</td>
                                                <td>{list.unitWT_LL}</td>
                                                <td>{list.estimatedWeight}</td>
                                                <td>{list.screwMake}</td>
                                                <td>{list.screwSize}</td>
                                                <td>{list.cuttingType}</td>
                                                <td>{list.cuttingDesign}</td>
                                                <td>{list.stoneBrand}</td>
                                                <td>{list.polishType}</td>
                                                <td>{list.dimmyColType}</td>
                                                <td>{list.SILSURColouringType}</td>
                                                <td>{list.surfaceFinish}</td>
                                                <td>{list.coat}</td>
                                                <td>{list.cardType}</td>
                                                <td>{list.cfPlan}</td>
                                                <td>{list.stoneSettingType}</td>
                                                <td>{list.remarks}</td>
                                              </tr>
                                            </>
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
                       </tbody>
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
    // return(
    //     <div>
    //     <h1>Unique Objects</h1>
    //     <ul>
    //       {objectElements}
    //     </ul>
    //   </div>
    // )
}

export default NewOrderFormView
