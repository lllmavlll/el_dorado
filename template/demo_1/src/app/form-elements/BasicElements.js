import React, { useState } from 'react';
import { Form } from 'react-bootstrap';



const BasicElements = () => {


  const [inputValue,setInputValue] = useState({
    customerName:'',
    placedOrderDate:'',
    requiredDate:'',
    customerOrderTouch:'',
    targetTouch:'',
    seal:'',
    qualitySerires:'',
    category:'',
    groupName:"",
    subGroupName:"",
    coreProductName:"",
    modelNo:"",
    noOfStones:"",
    sizeofStone:"",
    stoneColourPattern:"",
    screwType:"",
    saleName:'',
    itemStage:'',
    SKUNo:'',
    noOfDesign:'',
    QuantityPerDesign:'',
    itemquantity:'',
    unitWT_UL:'',
    unitWT_LL:'',
    estimatedWeight:'',
    ScrewMake:'',
    screwSize:'',
    cuttingType:'',
    cuttingDesign:'',
    stoneBrand:'',
    polishType:'',
    dimmyColType:'',
    SILSURColoringType:'',
    surfaceFinish:'',
    Coat:'',
    cardType:'',
    stoneSettingType:'',
    remarks:''
     
  })


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue, 
      [name]: value,
    });
  };

  const pushToDB= async(e)=>{
    e.preventDefault()

    console.log(inputValue)

    //for banckend
    const {
        customerName,
        placedOrderDate,
        requiredDate,
        customerOrderTouch,
        targetTouch,
        seal,
        qualitySerires,
        category,
        groupName,
        subGroupName,
        coreProductName,
        modelNo,
        noOfStones,
        sizeofStone,
        stoneColourPattern,
        screwType,
        saleName,
        itemStage,
        SKUNo,
        noOfDesign,
        QuantityPerDesign,
        itemquantity,
        unitWT_UL,
        unitWT_LL,
        estimatedWeight,
        ScrewMake,
        screwSize,
        cuttingType,
        cuttingDesign,
        stoneBrand,
        polishType,
        dimmyColType,
        SILSURColoringType,
        surfaceFinish,
        Coat,
        cardType,
        stoneSettingType,
        remarks 
      } = inputValue


    const res =await fetch('http://localhost:4000/order-form',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        customerName,
        placedOrderDate,
        requiredDate,
        customerOrderTouch,
        targetTouch,
        seal,
        qualitySerires,
        category,
        groupName,
        subGroupName,
        coreProductName,
        modelNo,
        noOfStones,
        sizeofStone,
        stoneColourPattern,
        screwType,
        saleName,
        itemStage,
        SKUNo,
        noOfDesign,
        QuantityPerDesign,
        itemquantity,
        unitWT_UL,
        unitWT_LL,
        estimatedWeight,
        ScrewMake,
        screwSize,
        cuttingType,
        cuttingDesign,
        stoneBrand,
        polishType,
        dimmyColType,
        SILSURColoringType,
        surfaceFinish,
        Coat,
        cardType,
        stoneSettingType,
        remarks,

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
      <div>
        <div className="page-header">
          <h1 className="page-title"> Customer Order Form </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {/* <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
              <li className="breadcrumb-item active" aria-current="page">Form elements</li> */}
            </ol>
          </nav>
        </div>
        <div className="row">
        <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Customer Details</h4>
                <form className="forms-sample">
                <Form.Group className='row'>
                    <label htmlFor="CustomerName" className="col-sm-5 col-form-label" >Customer Name</label>
                    <div className="col-sm-7">
                    <Form.Control type="text"  value={inputValue.customerName} name='customerName' onChange={handleInputChange} className="form-control" id="CustomerName" placeholder="Customer Name" />
                    </div>
                  </Form.Group>
                <Form.Group className='row'>
                    <label htmlFor="placedOrderDate" className="col-sm-5 col-form-label" >Place Order Date</label>
                    <div className="col-sm-7">
                    <Form.Control type="date"  value={inputValue.placedOrderDate} name='placedOrderDate' onChange={handleInputChange} className="form-control" id="placedOrderDate" />
                    </div>
                  </Form.Group>
                <Form.Group className='row'>
                    <label htmlFor="RequiredDate" className="col-sm-5 col-form-label" >Required Date</label>
                    <div className="col-sm-7">
                    <Form.Control type="date"  value={inputValue.requiredDate} name='requiredDate' onChange={handleInputChange} className="form-control" id="requiredDate"  />
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
          <div className="col-8 grid-margin ">
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
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Quantity Details</h4>
                {/* <p className="card-description"> Basic form elements </p> */}
                <form className="forms-sample">
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="NoOfdesign" className="col-sm-5 col-form-label">No. Of Design </label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.noOfDesign}  name='noOfDesign' onChange={handleInputChange} className="form-control" id="NoOfdesign" placeholder="No. Of Design" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="quantityPerDesign" className=" col-sm-5 col-form-label">Quantity/Design</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.QuantityPerDesign}  name='QuantityPerDesign' onChange={handleInputChange} className="form-control" id="quantityPerDesign" placeholder="Quantity/Design" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="itemQuantity" className="col-sm-5 col-form-label ">Item Quantity</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.itemquantity}  name='itemquantity' onChange={handleInputChange} className="form-control" id="itemQuantity" placeholder="Item Quantity" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="unitWtUL" className="col-sm-5 col-form-label">Unit Weight UL</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.unitWT_UL}  name='unitWT_UL' onChange={handleInputChange} className="form-control" id="unitWtUL" placeholder="Unit Weight UL" />
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series & touch band)</i></span>
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="unitWtLL" className=" col-sm-5 col-form-label">Unit Weight LL</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.unitWT_LL}  name='unitWT_LL' onChange={handleInputChange} className="form-control" id="unitWtLL" placeholder="Unit Weight LL" />
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series & touch band)</i></span>

                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="estimatedWeight" className="col-sm-5 col-form-label ">Estimated Weight</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.estimatedWeight}  name='estimatedWeight' onChange={handleInputChange} className="form-control" id="estimatedWeight" placeholder="Estimated Weight" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className='col'>
                    <button type="submit"    onClick={''} className="btn btn-primary mr-4">Save</button>
                  </div>

                  {/*  custom image and remarks feild */}

                  {/* <Form.Group>
                    <label>Image</label>
                    <div className="custom-file">
                      <Form.Control type="file"  value={inputValue.}  onChange={handleInputChange} className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="Remarks">Remarks</label>
                    <textarea className="form-control" id="Remarks" rows="4"></textarea>
                  </Form.Group>
                  <button type="submit"  value={inputValue.}  onChange={handleInputChange} className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button> */}
                </form>
              </div>
            </div>
          </div>
          
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Other Attributes</h4>
                {/* <p className="card-description"> Basic form elements </p> */}
                <form className="forms-sample">
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="screwMake" className="col-sm-5 col-form-label">Screw Make </label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.ScrewMake} name='ScrewMake' onChange={handleInputChange} className="form-control" id="screwMake" placeholder="Screw Make" />
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series & touch band)</i></span>

                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="screwSize" className=" col-sm-5 col-form-label">Screw Size</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.screwSize} name='screwSize' onChange={handleInputChange} className="form-control" id="screwSize" placeholder="Screw Size" />
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series )</i></span>

                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="cuttingType" className="col-sm-5 col-form-label ">Cutting Type</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.cuttingType} name='cuttingType' onChange={handleInputChange} className="form-control" id="cuttingType" placeholder="Cutting Type" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="cuttingDesign" className="col-sm-5 col-form-label">Cutting Design</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.cuttingDesign} name='cuttingDesign' onChange={handleInputChange} className="form-control" id="cuttingDesign" placeholder="Cutting Design" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="stoneBrand" className="col-sm-5 col-form-label">Stone Brand</label>
                      <div className="col">
                      <select className="form-control"  value={inputValue.stoneBrand} name='stoneBrand' onChange={handleInputChange}  id="stoneBrand">
                        <option  value=""> Select</option>
                        <option value="STONE_BRAND_1">STONE_BRAND_1</option>
                        <option value="STONE_BRAND_2">STONE_BRAND_2</option>
                        <option value="STONE_BRAND_3">STONE_BRAND_3</option>
                      </select>
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series & touch band)</i></span>

                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="polishType" className="col-sm-5 col-form-label">Polish Type</label>
                      <div className="col">
                      <select className="form-control"  value={inputValue.polishType} name='polishType' onChange={handleInputChange}  id="polishType">
                        <option  value=""> Select</option>
                        <option value="MP">MP</option>
                        <option value="Single Buff">Single Buff</option>
                        <option value="Double Buff">Double Buff</option>
                      </select>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="dimmyColType" className="col-sm-5 col-form-label">Dimmy Col Type</label>
                      <div className="col">
                      <select className="form-control"  value={inputValue.dimmyColType} name='dimmyColType' onChange={handleInputChange}  id="dimmyColType">
                        <option value=" ">select</option>
                        <option value="RC-GPC">RC-GPC</option>
                        <option value="1st ONLY-CN">1st ONLY-CN</option>
                        <option value="RC-CN">RC-CN</option>
                        <option value="1st-GPC">1st-GPC</option>
                      </select>
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="SILSURColoringType" className="col-sm-5 col-form-label">SILSUR color Type</label>
                      <div className="col">
                        <select className="form-control"  value={inputValue.SILSURColoringType} name='SILSURColoringType' onChange={handleInputChange}  id="SILSURColoringType">
                          <option value=" ">select</option>
                          <option value="RC-GPC">RC-GPC</option>
                          <option value="1st ONLY-CN">1st ONLY-CN</option>
                          <option value="RC-CN">RC-CN</option>
                          <option value="1st-GPC">1st-GPC</option>
                        </select>
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="surfaceFinish" className="col-sm-5 col-form-label">Surface Finish</label>
                      <div className="col">
                      <select className="form-control"  value={inputValue.surfaceFinish} name='surfaceFinish' onChange={handleInputChange} id="surfaceFinish">
                        <option value=" ">select</option>
                        <option value="Cut">Cut</option>
                        <option value="SB">SB</option>
                      </select>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                  <Form.Group className='col'>
                      <label htmlFor="coat" className="col-sm-5 col-form-label">Coat</label>
                      <div className="col">
                      <select className="form-control"  value={inputValue.Coat} name='Coat' onChange={handleInputChange}  id="coat">
                        <option value=" ">select</option>
                        <option value="CMF">CMF</option>
                        <option value="MBD">MBD</option>
                        <option value="ANC">ANC</option>
                      </select>
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="cardType" name='cardType' className="col-sm-5 col-form-label">Card Type</label>
                      <div className="col">
                      <select className="form-control" value={inputValue.cardType} onChange={handleInputChange} name='cardType' id="cardType">
                        <option value=" ">select</option>
                        <option value="20-CB-W">20-CB-W</option>
                        <option value="20-CB-B">20-CB-B</option>
                        <option value="10A-PL-W">10A-PL-W</option>
                        <option value="10A-CB-W">10A-CB-W</option>
                        <option value="6A-PL-B">6A-PL-B</option>
                      </select>
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series & touch band)</i></span>

                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="cfPlan" className="col-sm-5 col-form-label">Card Fittin Plan</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.cfPlan} name='cfPlan' onChange={handleInputChange} className="form-control" id="cfPlan"  />
                      </div>
                    </Form.Group>
                  
                  </div>
                  <div className='row'>
                  <Form.Group className='col'>
                      <label htmlFor="stoneSettingType" className="col-sm-5 col-form-label">Stone Setting Type</label>
                      <div className="col">
                      <select className="form-control col-sm-4 "  value={inputValue.stoneSettingType} name='stoneSettingType' onChange={handleInputChange}  id="stoneSettingType">
                        <option value=" ">select</option>
                        <option value="GUBBA ST SET">GUBBA ST SET</option>
                        <option value="DSAD ST SET">DSAD ST SET</option>
                        <option value="PR SET (HS)">PR SET (HS)</option>
                        <option value="WAX SET">WAX SET</option>
                        <option value="JAVA ST SET">JAVA ST SET</option>
                        <option value="GUM SET">GUM SET</option>
                        <option value="PR CAST SET">PR CAST SET</option>
                        <option value="BAND SET">BAND SET</option>
                        <option value="PAVE SET">PAVE SET</option>
                      </select>
                      </div>
                    </Form.Group>
                    {/* <Form.Group>
                      <label htmlFor="Remarks"  className="col-sm-5 col-form-label">Remarks</label>
                      <textarea className="form-control " value={inputValue.remarks} name='remarks' onChange={handleInputChange} id="Remarks" rows="" placeholder='Remarks...' ></textarea>
                    </Form.Group> */}
                    
                  </div>

                  <div className='col'>
                    <Form.Group>
                      <label htmlFor="Remarks">Remarks</label>
                      <textarea className="form-control " value={inputValue.remarks} name='remarks' onChange={handleInputChange} id="Remarks" rows="4" placeholder='Remarks...' ></textarea>
                    </Form.Group>
                  </div>
                  <div className='col'>
                    <button type="submit"  onClick={pushToDB} className="btn btn-primary mr-4">Save</button>
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

export default BasicElements


// export class BasicElements extends Component {
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
//     return (
      
//     )
//   }
// }

// export default BasicElements
