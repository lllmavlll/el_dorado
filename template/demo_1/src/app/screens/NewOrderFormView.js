import React, { useEffect, useState } from 'react'
import './CustomCssFile.css'


const NewOrderFormView = () => {

    const [orderFOrmData,setOrderFormData] =useState([])
    const [lineItems,setLineItems] =useState([])
    const [lineItemList,setLineItemList] = useState([])


    // const uniqueArr = [...new Set(orderFOrmData)];


    // const [unicArray,setUnicArray] =useState([])

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
                    {/* <h4 className="card-title"> GSO View</h4> */}
                    <div className="table-responsive OFtable-res ">
                      <table className="table table-bordered OFtable ">
                        <thead>
                          <tr>
                            <th> SL No. </th>
                            <th>GSO Order No.</th>
                            <th>Gold Smith</th>
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
                                                      onChange={()=>{reRouteViaCheckBox(list.orderRefNo,list.itemIndex)}}
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
                                                <td>{list.QuantityPerDesign}</td>
                                                <td>{list.unitWT_UL}</td>
                                                <td>{list.unitWT_LL}</td>
                                                <td>{list.estimatedWeight}</td>
                                                <td>{list.ScrewMake}</td>
                                                <td>{list.screwSize}</td>
                                                <td>{list.cuttingType}</td>
                                                <td>{list.cuttingDesign}</td>
                                                <td>{list.stoneBrand}</td>
                                                <td>{list.polishType}</td>
                                                <td>{list.dimmyColType}</td>
                                                <td>{list.SILSURColouringType}</td>
                                                <td>{list.surfaceFinish}</td>
                                                <td>{list.Coat}</td>
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
