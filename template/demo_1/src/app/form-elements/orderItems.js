import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios'
import { dependentDropDown } from '../screens/rawDataFortest';

var joinedValue
const OrderItems = () => {

  const [showPhoto, setShowPhoto]= useState(false)
  const [subGroupNameDD,setSubGroupNameDD] = useState([]) // for sub groupname  dropdown
  const [inputValue,setInputValue] = useState({
    mainClass:'',
    category:'',
    group:"",
    subGroup:"",
    coreProductName:"",
    saleName:"",
    stickerName:"",
    commonName:"",
    appName:"",
    numberOfStones:"",
    defaultStoneSchemeNo:"",
    modelNo:"",
    defaultScrewType:"",
    defaultCardType:"",
    defaultStone:"",
    defaultFinalColur:"",
    unitWeightLowerLimit:"",
    unitWeightUpperLimit:"",
    defaultStoneSettingType:"",
    defaultCuttingPattern:"",
    defaultSurfaceFinish:"",
    noOfDesign:"",
    dyeNo:"",
    defaultQualitySeries:"",
    defaultScrewSize:"",
    makingType:"",
    defaultStoneSize:"",
})
const [show,setShow] = useState(false)
const [selectedFile, setSelectedFile] = useState('');


//===================|| for checkebox values ||====================//
const [screwType, setScrewType] = useState([]);
const [cardType, setCardType] = useState([]);
const [stoneNo, setStoneNo] = useState([]);
const [stineSettingType, setStoneSettingType] = useState([]);
const [cuttingPattern, setCuttingPattern] = useState([]);
const [surfaceFinish, setSurfaceFinish] = useState([]);
const [qualitySeries, setQualitySeries] = useState([]);
const [screwSize, setScrewSize] = useState([]);
const [spares, setSpares] = useState([]);
const [stoneSize, setStoneSize] = useState([]);

//===================|| for checkebox values ||====================//

//Screw Type
const getScrewType =(e)=>{
  const {value, checked} = e.target
  if(checked){
    setScrewType([...screwType, value])
  }else{
    setScrewType(screwType.filter(e => e !== value))
  }
}

//Card Type
const getCardType =(e)=>{
  const {value, checked} = e.target
  if(checked){
    setCardType([...cardType, value])
  }else{
    setCardType(cardType.filter(e => e !== value))
  }
}

//Stone No
const getStoneNo =(e)=>{
  const {value, checked} = e.target
  if(checked){
    setStoneNo([...stoneNo, value])
  }else{
    setStoneNo(stoneNo.filter(e => e !== value))
  }
}

//Stone Setting type
const getStoneSettingType =(e)=>{
  const {value, checked} = e.target
  if(checked){
    setStoneSettingType([...stineSettingType, value])
  }else{
    setStoneSettingType(stineSettingType.filter(e => e !== value))
  }
}

//Cutting Pattern
const getCuttingPattern =(e)=>{
  const {value, checked} = e.target
  if(checked){
    setCuttingPattern([...cuttingPattern, value])
  }else{
    setCuttingPattern(cuttingPattern.filter(e => e !== value))
  }
}

//Surface Finish
const getSurfaceFinish =(e)=>{
  const {value, checked} = e.target
  if(checked){
    setSurfaceFinish([...surfaceFinish, value])
  }else{
    setSurfaceFinish(surfaceFinish.filter(e => e !== value))
  }
}

//Quality Series
const getQualitySeries =(e)=>{
  const {value, checked} = e.target
  if(checked){
    setQualitySeries([...qualitySeries, value])
  }else{
    setQualitySeries(qualitySeries.filter(e => e !== value))
  }
}

//Screw Size
const getScrewSize =(e)=>{
  const {value, checked} = e.target
  if(checked){
    setScrewSize([...screwSize, value])
  }else{
    setScrewSize(screwSize.filter(e => e !== value))
  }
}

//Spares
const getSparreValues =(e)=>{
  const {value, checked} = e.target
  if(checked){
    setSpares([...spares, value])
  }else{
    setSpares(spares.filter(e => e !== value))
  }
}

//Spares
const getStoneSizes =(e)=>{
  const {value, checked} = e.target
  if(checked){
    setStoneSize([...stoneSize, value])
  }else{
    setStoneSize(stoneSize.filter(e => e !== value))
  }
}

//===================|| for inputvalues values ||====================//

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue, 
      [name]: value,
    });
  };

//================= || handles filed input values || ===========================//
const dropDownHandle =(event)=>{
  const { name, value } = event.target;
  setInputValue({
    ...inputValue, 
    [name]: value,
  });
setSubGroupNameDD(dependentDropDown.find(gname => gname.groupName===value).subGroupName)
}



  const handleUpload = async(newImage)=>{
    try {
     await axios.post('http://localhost:4000/iname/uploadImage',newImage)
    } catch (error) {
      console.log(error);
    }
  }
  const fileUploadhandle = async(e)=>{
    const file =e.target.files[0]
    const Base64 = await converToBase64(file)
    console.log(Base64);
    setSelectedFile(Base64)
  }

const inputHandler= async(e)=>{
  e.preventDefault()
  const values =[inputValue.category,inputValue.subGroup,inputValue.coreProductName,inputValue.modelNo,inputValue.numberOfStones,inputValue.defaultStone,inputValue.ScrewType,]
  joinedValue = values.join('_')
  console.log(joinedValue);
  setShow(true)
  setShowPhoto(true)
  }
  
const pushToDB= async(e)=>{
  e.preventDefault()
  // console.log(values)
  console.log(inputValue)
  
  
  
  //for banckend
  
  const {classs,category,group,subGroup,modelNo,coreProductName,saleName,stickerName,defaultStoneSchemeNo,commonName,appName,numberOfStones,defaultScrewType,defaultStoneSize,defaultCardType,defaultStone,defaultFinalColur,unitWeightLowerLimit,unitWeightUpperLimit,defaultStoneSettingType,defaultCuttingPattern,defaultSurfaceFinish,noOfDesign,dyeNo,defaultQualitySeries,defaultScrewSize,makingType} = inputValue
  const res =await fetch('http://localhost:4000/iname/createIname',{
    method:'POST',
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
      classs,
      category,
      group,
      subGroup,
      modelNo,
      coreProductName,
      saleName,
      stickerName,
      defaultStoneSchemeNo,
      commonName,
      appName,
      numberOfStones,
      screwTypesApplicable:screwType,
      defaultScrewType,
      cardTypesApplicable:cardType,
      defaultCardType,
      stoneSchemeNosApplicable:stoneNo,
      defaultStone,
      defaultStoneSize,
      defaultFinalColur,
      unitWeightLowerLimit,
      unitWeightUpperLimit,
      stoneSettingTypesApplicable:stineSettingType,
      defaultStoneSettingType,
      cuttingPatternsApplicable:cuttingPattern,
      defaultCuttingPattern,
      surfaceFinishesApplicable:surfaceFinish,
      defaultSurfaceFinish,
      noOfDesign,
      dyeNo,
      qualitySeriesApplicable:qualitySeries,
      defaultQualitySeries,
      screwSizesApplicable:screwSize,
      stoneSizesApplicable:screwSize,
      defaultScrewSize,
      makingType,
      SparesInvolved:spares,
      image:selectedFile
    })
  })
  
  const data = await res.json();
  if(data){
    window.location.reload();
  }
  if(res.status===400 || !data){
    window.alert(`already exist`)
  }
  else{
    alert('product name created sucessfully!')
  }
  handleUpload(selectedFile)
  console.log(selectedFile)
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
                        <label  htmlFor="mainClass" className="col-sm-5 col-form-label">Class</label>
                        <div className="col-sm-7">
                          <select type="text" value={inputValue.mainClass} onChange={handleInputChange}  name='mainClass'  className="form-control" id="mainClass" placeholder="Class" >
                            <option value=''>select</option>
                            <option value='RM'>RM</option>
                            <option value='FG'>FG</option>
                            <option value='SF'>SF</option>
                            <option value='COMP'>COMP</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="category" className="col-sm-5 col-form-label">Category</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.category} onChange={handleInputChange}  name='category'  className="form-control" id="Category" placeholder="Category" >
                            <option value=""> Select</option>
                            <option value="BAALI">BAALI </option>
                            <option value="BRING">BRING </option>
                            <option value="BUKUDI">BUKUDI </option>
                            <option value="CHAIN">CHAIN </option>
                            <option value="COMP">COMP </option>
                            <option value="LOLAK">LOLAK </option>
                            <option value="LRING">LRING </option>
                            <option value="MATTI">MATTI </option>
                            <option value="NP">NP </option>
                            <option value="PENDENT">PENDENT </option>
                            <option value="TOPS">TOPS </option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="group" className="col-sm-5 col-form-label">Group Name</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.group} onChange={dropDownHandle}    name='group'  className="form-control" id="Group" placeholder="Group Name" >
                          <option  value=""> Select</option>
                          {
                            dependentDropDown.map( gname =>{
                              return <option key={gname.toString()} value={gname.groupName}>{gname.groupName}</option>
                            })
                          }
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="subGroup" className="col-sm-5 col-form-label">Sub Group Name</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.subGroup} onChange={handleInputChange}    name='subGroup'  className="form-control" id="subGroup" placeholder="Sub Group Name" >
                          <option  value=""> Select</option>
                            {
                              subGroupNameDD.map(subGName =>{
                                return <option value={subGName}>{subGName}</option>
                              })
                            }
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="coreProdName" className="col-sm-5 col-form-label">Item Name</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.coreProductName} onChange={handleInputChange}    name='coreProductName'  className="form-control" id="coreProdName" placeholder="Item Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="saleName" className="col-sm-5 col-form-label">Sale Name</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.saleName} onChange={handleInputChange}    name='saleName'  className="form-control" id="saleName" placeholder="Sale Name" />
                        </div>
                      </Form.Group>
                    </div>
                    {/* <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="ModelNo" className="col-sm-5 col-form-label">Model Number</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.modelNo} onChange={handleInputChange}    name='ModelNo'  className="form-control" id="ModelNo" placeholder="Model Number" />
                        </div>
                      </Form.Group>
                    </div> */}
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="stickerName" className="col-sm-5 col-form-label">Sticker Name</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.stickerName} onChange={handleInputChange}    name='stickerName'  className="form-control" id="stickerName" placeholder="Sticker Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="commonName" className="col-sm-5 col-form-label">Common Name</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.commonName} onChange={handleInputChange}    name='commonName'  className="form-control" id="commonName" placeholder="Common Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="appName" className="col-sm-5 col-form-label">App Name</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.appName} onChange={handleInputChange}    name='appName'  className="form-control" id="appName" placeholder="App Name" />
                        </div>
                      </Form.Group>
                    </div>
                     <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="modelNo" className="col-sm-5 col-form-label">Model Number</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.modelNo} onChange={handleInputChange}    name='modelNo'  className="form-control" id="modelNo" placeholder="Model Number" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">                       
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Stone Properties</h4>
                <form className="forms-sample">
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="numberOfStones" className="col-sm-5 col-form-label">No Of Stones</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.numberOfStones} onChange={handleInputChange}  name='numberOfStones'  className="form-control" id="numberOfStones" placeholder="No Of Stones" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="screwTypeApplicable" className="col-sm-5 col-form-label">Screw Type applicable</label>
                        <div className="col-sm-7">
                          <div className='row'>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='BLR' className="form-check-input" onChange={getScrewType}/>
                                <i className="input-helper"></i>
                                BLR
                              </label>
                            </div>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='TN' className="form-check-input" onChange={getScrewType}/>
                                <i className="input-helper"></i>
                                TN
                              </label>
                            </div>
                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='AP' className="form-check-input" onChange={getScrewType}/>
                                <i className="input-helper"></i>
                                AP
                              </label>
                            </div>

                          </div>
                        </div>
                          {/* <input  type="checkbox" value={inputValue.screwTypeApplicable} onChange={handleInputChange}  name='screwTypeApplicable'  className="form-check-input" id="screwTypeApplicable" placeholder="Screw Type applicable" /> */}
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultScrewType" className="col-sm-5 col-form-label">Default Screw Type</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.defaultScrewType} onChange={handleInputChange}    name='defaultScrewType'  className="form-control" id="defaultScrewType" placeholder="Default Screw Type" >
                            <option value=''>Select</option>
                            {
                              screwType.map(((list,index) =>{
                                return<>
                                <option key={index} value={list}>{list}</option>
                                </>
                              }))
                            }
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="cardTypeApplicable" className="col-sm-5 col-form-label">Card Type applicable</label>
                        <div className="col-sm-7">
                        <div className='row'>

                          <div style={{marginLeft:'20px'}} className="form-check">
                            <label className="form-check-label">
                              <input type="checkbox" value='20CBW' className="form-check-input" onChange={getCardType}/>
                              <i className="input-helper"></i>
                              20CBW
                            </label>
                          </div>

                          <div style={{marginLeft:'20px'}} className="form-check">
                            <label className="form-check-label">
                              <input type="checkbox" value='10CBW' className="form-check-input" onChange={getCardType}/>
                              <i className="input-helper"></i>
                              10CBW
                            </label>
                          </div>
                          <div style={{marginLeft:'20px'}} className="form-check">
                            <label className="form-check-label">
                              <input type="checkbox" value='8CBB' className="form-check-input" onChange={getCardType}/>
                              <i className="input-helper"></i>
                              8CBB
                            </label>
                          </div>
                          <div style={{marginLeft:'20px'}} className="form-check">
                            <label className="form-check-label">
                              <input type="checkbox" value='10PBW' className="form-check-input" onChange={getCardType}/>
                              <i className="input-helper"></i>
                              10PBW
                            </label>
                          </div>

                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultCardType" className="col-sm-5 col-form-label">Default Card Type</label>
                        <div className="col-sm-7">
                          <select type="text" value={inputValue.defaultCardType} onChange={handleInputChange}    name='defaultCardType'  className="form-control" id="defaultCardType" placeholder="Default Card Type" >
                            <option value=''>Select</option>
                            {
                              cardType.map((list,index)=>{
                                return<>
                                <option key={index} value={list}>{list}</option>
                                </>
                              })
                            }
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="stoneSchemeNosApplicable" className="col-sm-5 col-form-label">St Scheme No applicable</label>
                        <div className="col-sm-7">
                          <div className='row'>

                            <div style={{marginLeft:'10px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='ADG-B.02.005' className="form-check-input" onChange={getStoneNo}/>
                                <i className="input-helper"></i>
                                ADG-B.02.005
                              </label>
                            </div>

                            <div style={{marginLeft:'10px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='ADG-B.78.008' className="form-check-input" onChange={getStoneNo}/>
                                <i className="input-helper"></i>
                                ADG-B.78.008
                              </label>
                            </div>

                            <div style={{marginLeft:'10px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='ADG-B.78.008' className="form-check-input" onChange={getStoneNo}/>
                                <i className="input-helper"></i>
                                ADG-B.78.008
                              </label>
                            </div>

                          </div>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultStoneSchemeNo" className="col-sm-5 col-form-label">Default Stone Schema No</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.defaultStoneSchemeNo} onChange={handleInputChange}    name='defaultStoneSchemeNo'  className="form-control" id="defaultStoneSchemeNo" placeholder="Default Stone" >
                            <option value=''> Select</option>
                            {
                              stoneNo.map((list,index)=>{
                                return<>
                                  <option key={index} value={list}>{list}</option>
                                </>
                              })
                            }
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultFinalColur" className="col-sm-5 col-form-label">Default Final Colour</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.defaultFinalColur} onChange={handleInputChange}    name='defaultFinalColur'  className="form-control" id="defaultFinalColur" placeholder="Default Final Colour" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="unitWeightLowerLimit" className="col-sm-5 col-form-label">Un.Wt LL</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.unitWeightLowerLimit} onChange={handleInputChange}    name='unitWeightLowerLimit'  className="form-control" id="unitWeightLowerLimit" placeholder="Un.Wt LL" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="unitWeightUpperLimit" className="col-sm-5 col-form-label">Un.Wt UL</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.unitWeightUpperLimit} onChange={handleInputChange}    name='unitWeightUpperLimit'  className="form-control" id="unitWeightUpperLimit" placeholder="Un.Wt UL" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="stoneSettingTypeApplicable" className="col-sm-5 col-form-label">St Setting Type Applicable</label>
                        <div className="col-sm-7">
                          <div className='row'>
                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='GUBBA' className="form-check-input" onChange={getStoneSettingType}/>
                                <i className="input-helper"></i>
                                GUBBA
                              </label>
                            </div>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='JAWA' className="form-check-input" onChange={getStoneSettingType}/>
                                <i className="input-helper"></i>
                                JAWA
                              </label>
                            </div>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='PAVE' className="form-check-input" onChange={getStoneSettingType}/>
                                <i className="input-helper"></i>
                                PAVE
                              </label>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultStoneSettingType" className="col-sm-5 col-form-label">Default St Setting Type</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.defaultStoneSettingType} onChange={handleInputChange}    name='defaultStoneSettingType'  className="form-control" id="defaultStoneSettingType" placeholder="Default St Setting Type" >
                            <option value=''>Select</option>
                            {
                              stineSettingType.map((list,index)=>{
                                return<>
                                  <option key={index} value={list}>{list}</option>
                                </>
                              })
                            }
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="cuttingPatternApplicable" className="col-sm-5 col-form-label">Cutting Pattern Applicable</label>
                        <div className="col-sm-7">
                          <div className='row'>
                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='C-CUT' className="form-check-input" onChange={getCuttingPattern}/>
                                <i className="input-helper"></i>
                                C-CUT
                              </label>
                            </div>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='S-CUT' className="form-check-input" onChange={getCuttingPattern}/>
                                <i className="input-helper"></i>
                                S-CUT
                              </label>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultCuttingPattern" className="col-sm-5 col-form-label">Default Cutting Pattern</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.defaultCuttingPattern} onChange={handleInputChange}    name='defaultCuttingPattern'  className="form-control" id="defaultCuttingPattern" placeholder="Default Cutting Pattern" >
                            <option value=''> Select</option>
                            {
                              cuttingPattern.map((list,index)=>{
                                return<>
                                <option key={index} value={list}>{list}</option>
                                </>
                              })
                            }
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="surfaceFinishApplicable" className="col-sm-5 col-form-label">Surface Finish Applicable</label>
                        <div className="col-sm-7">
                          <div className='row'>
                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='MP' className="form-check-input" onChange={getSurfaceFinish}/>
                                <i className="input-helper"></i>
                                MP
                              </label>
                            </div>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='BUFF' className="form-check-input" onChange={getSurfaceFinish}/>
                                <i className="input-helper"></i>
                                BUFF
                              </label>
                            </div>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='CUTTING' className="form-check-input" onChange={getSurfaceFinish}/>
                                <i className="input-helper"></i>
                                CUTTING
                              </label>
                            </div>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='HAND' className="form-check-input" onChange={getSurfaceFinish}/>
                                <i className="input-helper"></i>
                                HAND
                              </label>
                            </div>
                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='MACHINE' className="form-check-input" onChange={getSurfaceFinish}/>
                                <i className="input-helper"></i>
                                MACHINE
                              </label>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultSurfaceFinish" className="col-sm-5 col-form-label">Default Surface Finish</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.defaultSurfaceFinish} onChange={handleInputChange}    name='defaultSurfaceFinish'  className="form-control" id="defaultSurfaceFinish" placeholder="Default Surface Finish" >
                            <option value=''>Select</option>
                            {
                              surfaceFinish.map((list,index)=>{
                                return<>
                                <option key={index}value={list}>{list}</option>
                                </>
                              })
                            }
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="noOfDesign" className="col-sm-5 col-form-label">NO.Of Design</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.noOfDesign} onChange={handleInputChange}    name='noOfDesign'  className="form-control" id="noOfDesign" placeholder="Default Cutting Pattern" >
                            <option value=''>Select</option>
                            <option value='NA'>NA</option>
                            <option value='YES'>YES</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="dyeNo" className="col-sm-5 col-form-label">Dye No</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.dyeNo} onChange={handleInputChange}    name='dyeNo'  className="form-control" id="dyeNo" placeholder="Dye No" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="stoneSizeApplicable" className="col-sm-5 col-form-label">Stone Size Applicable</label>
                        <div className="col-sm-7">
                          <div className='row'>
                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='2.70' className="form-check-input" onChange={getStoneSizes}/>
                                <i className="input-helper"></i>
                                2.70
                              </label>
                            </div>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='2.71' className="form-check-input" onChange={getStoneSizes}/>
                                <i className="input-helper"></i>
                                2.71
                              </label>
                            </div>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='2.77' className="form-check-input" onChange={getStoneSizes}/>
                                <i className="input-helper"></i>
                                2.77
                              </label>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultStoneSize" className="col-sm-5 col-form-label">Default Stone Size</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.defaultStoneSize} onChange={handleInputChange} name='defaultStoneSize'  className="form-control" id="defaultStoneSize" placeholder="Default Stone Size" >
                            <option value=''>Select</option>
                            {
                              stoneSize.map((list,index)=>{
                                return<>
                                <option key={index}value={list}>{list}</option>
                                </>
                              })
                            }
                          </select>
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
                        <label  htmlFor="qualitySeriesApplicable" className="col-sm-4 col-form-label">Quality Series Applicable</label>
                        <div className="col-sm-8">
                          <div className='row'>
                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='STANDARD' className="form-check-input" onChange={getQualitySeries}/>
                                <i className="input-helper"></i>
                                STANDARD
                              </label>
                            </div>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='DELUX' className="form-check-input" onChange={getQualitySeries}/>
                                <i className="input-helper"></i>
                                DELUX
                              </label>
                            </div>
                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='SUPER DELUX' className="form-check-input" onChange={getQualitySeries}/>
                                <i className="input-helper"></i>
                                SUPER DELUX
                              </label>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label  htmlFor="defaultQualitySeries" className="col-sm-4 col-form-label">Default Quality Series</label>
                        <div className="col-sm-8">
                          <select  type="text" value={inputValue.defaultQualitySeries} onChange={handleInputChange}    name='defaultQualitySeries'  className="form-control" id="defaultQualitySeries" placeholder="defaultQualitySeries Of.Stone" >
                            <option value=''>Select</option>
                            {
                              qualitySeries.map((list,index)=>{
                                return<>
                                  <option key={index} value={list}>{list}</option>
                                </>
                              })
                            }
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label  htmlFor="screwSizeApplicable" className="col-sm-4 col-form-label">Screw Size Applicable</label>
                        <div className="col-sm-8">
                        <div className='row'>
                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='MASTER' className="form-check-input" onChange={getScrewSize}/>
                                <i className="input-helper"></i>
                                MASTER
                              </label>
                            </div>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='MANUAL' className="form-check-input" onChange={getScrewSize}/>
                                <i className="input-helper"></i>
                                MANUAL
                              </label>
                            </div>
                         
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label  htmlFor="defaultScrewSize" className="col-sm-4 col-form-label">Default Screw Size</label>
                        <div className="col-sm-8">
                          <select  type="text" value={inputValue.defaultScrewSize} onChange={handleInputChange}    name='defaultScrewSize'  className="form-control" id="defaultScrewSize" placeholder="Default Screw Size" >
                            <option value=''>Select</option>
                            {
                              screwSize.map((list,index)=>{
                                return<option key={index} value={list}>{list}</option>
                              })
                            }
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label  htmlFor="makingType" className="col-sm-4 col-form-label">Making Type</label>
                        <div className="col-sm-8">
                          <select  type="text" value={inputValue.makingType} onChange={handleInputChange}    name='makingType'  className="form-control" id="makingType" placeholder="Making Type" >
                            <option value=''>Select</option>
                            <option value='Casting'>Casting</option>
                            <option value='HM'>HM</option>
                            <option value='Hybrid'>Hybrid</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label  htmlFor="sparesInvolved" className="col-sm-4 col-form-label">Spares Involved</label>
                        <div className="col-sm-8">
                          <div className='row'>
                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='SCREW' className="form-check-input" onChange={getSparreValues}/>
                                <i className="input-helper"></i>
                                SCREW
                              </label>
                            </div>

                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='STONE' className="form-check-input" onChange={getSparreValues}/>
                                <i className="input-helper"></i>
                                STONE
                              </label>
                            </div>
                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='PATTERN' className="form-check-input" onChange={getSparreValues}/>
                                <i className="input-helper"></i>
                                PATTERN
                              </label>
                            </div>
                            <div style={{marginLeft:'20px'}} className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" value='CUT' className="form-check-input" onChange={getSparreValues}/>
                                <i className="input-helper"></i>
                                CUT
                              </label>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      {/* <Form.Group>
                      <label  htmlFor="customFileLang" className="col-sm-4 col-form-label">Upload Image</label>
                      <div className="custom-file col-sm-8">
                        <Form.Control type="file" className="form-control visibility-hidden" onChange={(e)=>setSelectedFile(e.target.files[0])} id="customFileLang" lang="es"/>
                        <label className="custom-file-label"  htmlFor="customFileLang">Upload image</label>
                      </div>
                      </Form.Group> */}
                        {/* <Form.Group>
                          <label>File upload</label>
                          <div className="custom-file">
                            <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                            <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                          </div>
                        </Form.Group> */}
                        <Form.Group>
                          <Form.Control type='file' accept='.jpeg, .png, .jpg' name ='image' lable='Image' onChange={(e)=>fileUploadhandle(e)} />
                        </Form.Group>
                    </div>

                  {/* </div> */}
                  <div className='row'>
                    <div className='col'>
                      <p></p>
                      <button type="submit" onClick={inputHandler} className="btn btn-outline-primary mr-4">Submit</button>
                    </div>
                    <div className='col'>
                      {/* <p></p> */}
                      {/* <button type="submit" onClick={showProductName} className="btn btn-primary mr-4">Show Product Name</button> */}
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
                      <br/>
                      {
                        showPhoto?
                        <>
                        <h4>Iname Photo Preview:</h4>
                        <div>
                          <img src={selectedFile} alt='data not found'/>
                        </div>
                        </>
                      :''
                      }
                      <br/>
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


const converToBase64 =(file)=>{
  return new Promise((resolve,reject)=>{
    const fileReader =new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () =>{
      resolve(fileReader.result)
    };
    fileReader.onerror =(error)=>{
      reject(error)
    }
  })
}

