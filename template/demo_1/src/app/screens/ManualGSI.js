import React, { useState } from 'react'
import  { Form } from 'react-bootstrap'
import './CustomCssFile.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'



const ManualGSI = () => {
  const navigate =useHistory()
    
  const [getByGSO, setGetByGSO]= useState([])
  const [compList, setCompList]= useState([])
  const [compTable, setCompTable]= useState(false)
  const [gsoTable, setGsoTable]= useState(false)
  const [inputValue, setInputValue]=useState({
    GSONo:'',
    pureGoldValueQnty:'',
    pureGoldValueAmt:'',
    compType:'',
    compName:'',
    compQnty:'',
    compAmt:'',
  })


  //==============|| to handel input cahnges ||=============//
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue, 
      [name]: value,
    });
  };
  
  //==============|| to handel input cahnges ||=============//

  const RerouteToViewPage =()=>{
    navigate.push('/gold-smith/GSOrder-view')
  
   } 
  //==============|| to fetch based on GSO no ||=============//
  const getGSO=(e)=>{
    e.preventDefault()
    console.log(inputValue.GSONo);
    fetch(`http://localhost:4000/GSO/GetSpecificGSOrder/${inputValue.GSONo}`)
    .then(response => response.json())
    .then(data =>{
        setGetByGSO(data)
        console.log(getByGSO);
        if(data){
            setGsoTable(true)
            setInputValue({ GSONo:'',})
        }else{
            alert('Enter A valid Order Number')
            setInputValue({ GSONo:'',})
        }
    }) 
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
}


//==============||To add new COmponent ||=============//
const addComp = (e)=>{
    e.preventDefault()
    setCompTable(true)
    const arrayOfComponents={
      compType:inputValue.compType,
      compName:inputValue.compName,
      compQnty:inputValue.compQnty,
      compAmt:inputValue.compAmt,
    }
    setCompList([...compList, arrayOfComponents])
  }

    const pushToDB = async(e)=>{
        e.preventDefault()
        const {pureGoldValueQnty, pureGoldValueAmt} =inputValue
        console.log({
          GSOrderNo:getByGSO.GSOrderNo,
          GSName:getByGSO.GSName,
          pureGoldValueQnty,
          pureGoldValueAmt,
          components:compList
        });
    
        // ========= || Push the Data to DB || ===========//
    
        // const {pureGoldValueQnty, pureGoldValueAmt} =inputValue
    
        // const res =await fetch('http://localhost:4000/GSI/createGSI',{
        //   method:'POST',
        //   headers:{
        //     "content-type":"application/json"
        //   },
        //   body:JSON.stringify({
        //     GSOrderNo:getByGSO.GSOrderNo,
        //     GSName:getByGSO.GSName,
        //     pureGoldValueQnty,
        //     pureGoldValueAmt,
        //     components:compList
        //   })
        // })
        // const data = await res.json();
        // console.log(data)
        // alert("Material issued successfully ")
      }

    return(
        <>
        
        {/* <div className="page-header">
          <h3 className="page-title"> Gold Smith Issuance for GSO NO: {data.OrderNo}</h3>
          <h3 className="page-title"> Gold Smith Issuance </h3>
        </div> */}

        <div className="row">                       
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
              <h3 className="card-title">Gold Smith Issuance </h3>
                <form className='forms-sample'>
                    <div className='row'>
                        <div className='col-md-6'>
                          <p className='text-warning'>No Gold Smith Order Selected, go to Gold Smith View Page and Select Gold Smith Order.</p>
                        <Form.Group>
                        <button type="submit" onClick={RerouteToViewPage} className="btn btn-outline-primary mr-4">Go To GS View Page.</button>
                            {/* <div className="input-group">
                                <Form.Control autoComplete='off' type="text" value={inputValue.orderNo} onChange={handleInputChange} name='orderNo' className="form-control" placeholder="Search by Order Number"/>
                                <div className="input-group-append">
                                    <button className="btn btn-sm btn-primary" onClick={getByOrderNo}>Search</button>
                                </div>
                            </div> */}
                        </Form.Group>
                        </div>
                    </div>
                </form>
              </div>
            </div>
        </div> 

        {
            gsoTable?
        <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">GSO Number: <span className='text-primary'>{getByGSO.GSOrderNo}</span></h4>
                <h5 className="card-title">Gold Smith Name: <span className='text-primary'>{getByGSO.GSName}</span></h5>
                <div className='table-responsive OFtable-res'>
                  <table className="table table-bordered OFtable ">
                    <thead>
                      <tr>
                        <th>SL.NO</th>
                        <th>Sub Order Number</th>
                        <th>Item Name</th>
                        <th>Available Quantity</th>
                        <th>Allocated Quantity</th>
                        <th>Pending Quantity</th>
                        <th>Allocated Weight </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        getByGSO&&getByGSO.subOrder.map((order,index,key)=>{
                          return<>
                            <tr key={key}>
                              <td>{index+1}</td>
                              <td>{order.subOrderNo}</td>
                              <td>{order.ItemName}</td>
                              <td>{order.availQuantity}</td>
                              <td>{order.allocdQty}</td>
                              <td>{order.pendingQuantity}</td>
                              <td>{order.allocdWt}</td>
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
          :''
        }
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
                            <Form.Control  type="text"   name='pureGoldValueQnty' value={inputValue.pureGoldValueQnty} onChange={handleInputChange}  className="form-control" id="goldQuantity" placeholder="Gold Quantity" />
                        </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="goldAmount" className="col-sm-4 col-form-label">Gold Amount </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name='pureGoldValueAmt' value={inputValue.pureGoldValueAmt} onChange={handleInputChange} className="form-control" id="goldAmount" placeholder="Gold Amount" />
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
                        <label  htmlFor="compType" className="col-sm-4 col-form-label">Component Type </label>
                        <div className="col-sm-8">
                            <select  type="text" name='compType' value={inputValue.compType} onChange={handleInputChange}   className="form-control" id="compType" placeholder="Component Type">
                              <option value=''>Select</option>
                              <option value='Metal'>Metal</option>
                              <option value='Non metal'>Non Metal</option>
                              <option value='Stones'>Stones</option>
                            </select>
                        </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="compName" className="col-sm-4 col-form-label">Component Name </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name='compName' value={inputValue.compName} onChange={handleInputChange} className="form-control" id="compName" placeholder="Component Name" />
                        </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="compQuantity" className="col-sm-4 col-form-label">Componemt Quantity </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name='compQnty' value={inputValue.compQnty} onChange={handleInputChange}  className="form-control" id="compQuantity" placeholder="Componemt Quantity" />
                        </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="compamount" className="col-sm-4 col-form-label">Componemt Amount </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name='compAmt' value={inputValue.compAmt} onChange={handleInputChange}  className="form-control" id="compamount" placeholder="Componemt Amount" />
                        </div>
                    </Form.Group>
                  </div>
                  <button type="submit" onClick={addComp}  className="btn btn-primary mr-4">Add  another component</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {
            compTable?
            <div className="row">                       
            <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Components List</h4>
                  <div className="table-responsive OFtable-res ">
                    <table className="table table-bordered OFtable ">
                      <thead>
                        <th>SL.No</th>
                        <th>component Type</th>
                        <th>component Name</th>
                        <th>component Quantity</th>
                      </thead>
                      <tbody>
                        {
                          compList.map((comp, index)=>{
                            return<>
                            <tr>
                              <td>{index+1}</td>
                              <td>{comp.compType}</td>
                              <td>{comp.compName}</td>
                              <td>{comp.compQnty}</td>
                            </tr>
                            </>
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                  <div style={{margin:"2%  0 0 95%"}}>
                    <button type="submit" onClick={pushToDB}  className="btn btn-primary mr-4">Issue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :''
          }
      </>  
    )
}

export default ManualGSI
