import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios'
import { dependentDropDown } from '../screens/rawDataFortest';
// import DatePicker from "react-datepicker";
import Select from 'react-dropdown-select'



var joinedValue


const OrderItems = () => {

  const [showPhoto, setShowPhoto]= useState(false)
  const [subGroupNameDD,setSubGroupNameDD] = useState([]) // for sub groupname  dropdown

  const [inputValue,setInputValue] = useState({
    class:'',
    category:'',
    group:"",
    subGroup:"",
    coreProductName:"",
    saleName:"",
    stickerName:"",
    commonName:"",
    appName:"",
    numberOfStones:"",
    screwTypeApplicable:"",
    defaultScrewType:"",
    cardTypeApplicable:"",
    defaultCardType:"",
    stoneSchemeNosApplicable:"",
    defaultStone:"",
    defaultFinalColur:"",
    unitWeightLowerLimit:"",
    unitWeightUpperLimit:"",
    stoneSettingTypeApplicable:"",
    defaultStoneSettingType:"",
    cuttingPatternApplicable:"",
    defaultCuttingPattern:"",
    surfaceFinishApplicable:"",
    defaultSurfaceFinish:"",
    noOfDesign:"",
    dyeNo:"",
    qualitySeriesApplicable:"",
    defaultQualitySeries:"",
    screwSizeApplicable:"",
    defaultScrewSize:"",
    makingType:"",
    sparesInvolved:"",
    image:''
})
const [show,setShow] = useState(false)
const [selectedFile, setSelectedFile] = useState('');


// const values =[inputValue.Category,inputValue.SubGroup,inputValue.CoreProductName,inputValue.ModelNo,inputValue.Nstone,inputValue.Size,inputValue.StoneColourPattern,inputValue.ScrewType]

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
  // setClearInput(event.target.value)
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
  // const handleUpload =()=>{
  //   const formData = new FormData();
  //   formData.append('file', selectedFile);
  //   axios.post('http://localhost:4000/iname/uploadImage',formData)
  //   .then( res=>{})
  //   .catch(error => console.log(error))
  // }
  

const inputHandler= async(e)=>{
  e.preventDefault()
  // console.log(inputValue)
  const values =[inputValue.Category,inputValue.SubGroup,inputValue.CoreProductName,inputValue.ModelNo,inputValue.Nstone,inputValue.Size,inputValue.StoneColourPattern,inputValue.ScrewType,]
  joinedValue = values.join('_')
  console.log(joinedValue);
  setShow(true)
  setShowPhoto(true)
  // alert(`Iname is: ${joinedValue}`)
 
  
  }
  
//   const showProductName=(e)=>{
//     e.preventDefault()
//     setShow(true)

// }
const pushToDB= async(e)=>{
  e.preventDefault()
  // console.log(values)
  // console.log(inputValue)
  
  
  
  //for banckend
  
  const { Category, Group, SubGroup, CoreProductName, ModelNo, Nstone, Size, StoneColourPattern, ScrewType,} = inputValue
  const res =await fetch('http://localhost:4000/iname/createIname',{
    method:'POST',
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
      Category, Group, SubGroup, CoreProductName, ModelNo, Nstone, Size, StoneColourPattern, ScrewType, image:selectedFile
    })
  })
  
  const data = await res.json();
  // if(data){
  //   window.location.reload();
  // }
  if(res.status===400 || !data){
    window.alert(`already exist`)
  }
  else{
    alert('product name created sucessfully!')
  }
  handleUpload(selectedFile)
  console.log(selectedFile)
}
const cradTypeOption=[
  {label:"one",value:'one'},
  {label:"one",value:'one'},
  {label:"one",value:'one'},
  {label:"one",value:'one'},
]

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
                        <label  htmlFor="Class" className="col-sm-5 col-form-label">Class</label>
                        <div className="col-sm-7">
                          <select type="text" value={inputValue.class} onChange={handleInputChange}  name='Class'  className="form-control" id="Class" placeholder="Class" >
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
                        <label  htmlFor="Category" className="col-sm-5 col-form-label">Category</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.category} onChange={handleInputChange}  name='Category'  className="form-control" id="Category" placeholder="Category" >
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
                        <label  htmlFor="Group" className="col-sm-5 col-form-label">Group Name</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.group} onChange={dropDownHandle}    name='Group'  className="form-control" id="Group" placeholder="Group Name" >
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
                        <label  htmlFor="subGrpName" className="col-sm-5 col-form-label">Sub Group Name</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.subGroup} onChange={handleInputChange}    name='SubGroup'  className="form-control" id="subGrpName" placeholder="Sub Group Name" >
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
                          <Form.Control  type="text" value={inputValue.coreProductName} onChange={handleInputChange}    name='CoreProductName'  className="form-control" id="coreProdName" placeholder="Item Name" />
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
                          <select  type="text" value={inputValue.screwTypeApplicable} onChange={handleInputChange}  name='screwTypeApplicable'  className="form-control" id="screwTypeApplicable" placeholder="Screw Type applicable" >
                            <option value=''>Select</option>
                            <option value='BLR'>BLR</option>
                            <option value='TN'>TN</option>
                            <option value='AP'>AP</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultScrewType" className="col-sm-5 col-form-label">Default Screw Type</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.defaultScrewType} onChange={handleInputChange}    name='defaultScrewType'  className="form-control" id="defaultScrewType" placeholder="Default Screw Type" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="cardTypeApplicable" className="col-sm-5 col-form-label">Card Type applicable</label>
                        <div className="col-sm-7">
                          <select type="text" value={inputValue.cardTypeApplicable} onChange={handleInputChange}    name='cardTypeApplicable'  className="form-control" id="cardTypeApplicable" placeholder="Card Type applicable" >
                            <option value=''>Select</option>
                            <option value='20CBW'>20CBW</option>
                            <option value='10CBW'>10CBW</option>
                            <option value='8CBB'>8CBB</option>
                            <option value='10PBW'>10PBW</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultCardType" className="col-sm-5 col-form-label">Default Card Type</label>
                        <div className="col-sm-7">
                          <Form.Control type="text" value={inputValue.defaultCardType} onChange={handleInputChange}    name='defaultCardType'  className="form-control" id="defaultCardType" placeholder="Default Card Type" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="stoneSchemeNosApplicable" className="col-sm-5 col-form-label">St Scheme No applicable</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.stoneSchemeNosApplicable} onChange={handleInputChange}    name='stoneSchemeNosApplicable'  className="form-control" id="stoneSchemeNosApplicable" placeholder="St Scheme No applicable" >
                            <option value=''>Select</option>
                            <option value='ADG-B.02.005'>ADG-B.02.005</option>
                            <option value='ADG-B.78.008'>ADG-B.78.008</option>
                            <option value='ADG-B.78.008'>ADG-B.78.008</option>
                          </select>
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
                        <label  htmlFor="defaultStone" className="col-sm-5 col-form-label">Default Stone</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.defaultStone} onChange={handleInputChange}    name='defaultStone'  className="form-control" id="defaultStone" placeholder="Default Stone" />
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
                        <label  htmlFor="unitWeightUpperLimit" className="col-sm-5 col-form-label">Un.Wt UP</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.unitWeightUpperLimit} onChange={handleInputChange}    name='unitWeightUpperLimit'  className="form-control" id="unitWeightUpperLimit" placeholder="Un.Wt UP" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="stoneSettingTypeApplicable" className="col-sm-5 col-form-label">St Setting Type Applicable</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.stoneSettingTypeApplicable} onChange={handleInputChange}    name='stoneSettingTypeApplicable'  className="form-control" id="stoneSettingTypeApplicable" placeholder="St Setting Type Applicable" >
                            <option value=''>Select</option>
                            <option value='OPTION_A'>OPTION_A</option>
                            <option value='OPTION_B'>OPTION_B</option>
                            <option value='OPTION_C'>OPTION_C</option>
                            <option value='OPTION_D'>OPTION_D</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultStoneSettingType" className="col-sm-5 col-form-label">Default St Setting Type</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.defaultStoneSettingType} onChange={handleInputChange}    name='defaultStoneSettingType'  className="form-control" id="defaultStoneSettingType" placeholder="Default St Setting Type" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="cuttingPatternApplicable" className="col-sm-5 col-form-label">Cutting Pattern Applicable</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.cuttingPatternApplicable} onChange={handleInputChange}    name='cuttingPatternApplicable'  className="form-control" id="cuttingPatternApplicable" placeholder="Cutting Pattern Applicable" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultCuttingPattern" className="col-sm-5 col-form-label">Default Cutting Pattern</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.defaultCuttingPattern} onChange={handleInputChange}    name='defaultCuttingPattern'  className="form-control" id="defaultCuttingPattern" placeholder="Default Cutting Pattern" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="surfaceFinishApplicable" className="col-sm-5 col-form-label">Surface Finish Applicable</label>
                        <div className="col-sm-7">
                          <select  type="text" value={inputValue.surfaceFinishApplicable} onChange={handleInputChange}    name='surfaceFinishApplicable'  className="form-control" id="surfaceFinishApplicable" placeholder="Surface Finish Applicable" >
                            <option value=''>Select</option>
                            <option value='MP'>MP</option>
                            <option value='BUFF'>BUFF</option>
                            <option value='CUTTING'>CUTTING</option>
                          </select> 
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="defaultSurfaceFinish" className="col-sm-5 col-form-label">Default Surface Finish</label>
                        <div className="col-sm-7">
                          <Form.Control  type="text" value={inputValue.defaultSurfaceFinish} onChange={handleInputChange}    name='defaultSurfaceFinish'  className="form-control" id="defaultSurfaceFinish" placeholder="Default Surface Finish" />
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
                          <Form.Control  type="text" value={inputValue.qualitySeriesApplicable} onChange={handleInputChange}  name='qualitySeriesApplicable'  className="form-control" id="qualitySeriesApplicable" placeholder="Quality Series Applicable" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label  htmlFor="defaultQualitySeries" className="col-sm-4 col-form-label">Default Quality Series</label>
                        <div className="col-sm-8">
                          <Form.Control  type="text" value={inputValue.defaultQualitySeries} onChange={handleInputChange}    name='defaultQualitySeries'  className="form-control" id="defaultQualitySeries" placeholder="defaultQualitySeries Of.Stone" />
                        </div>
                      </Form.Group>
                    </div>
                    
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label  htmlFor="screwSizeApplicable" className="col-sm-4 col-form-label">Screw Size Applicable</label>
                        <div className="col-sm-8">
                          <Form.Control  type="text" value={inputValue.screwSizeApplicable} onChange={handleInputChange}  name='screwSizeApplicable'  className="form-control" id="screwSizeApplicable" placeholder="Screw Size Applicable" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label  htmlFor="defaultScrewSize" className="col-sm-4 col-form-label">Default Screw Size</label>
                        <div className="col-sm-8">
                          <Form.Control  type="text" value={inputValue.defaultScrewSize} onChange={handleInputChange}    name='defaultScrewSize'  className="form-control" id="defaultScrewSize" placeholder="Default Screw Size" />
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
                          <Form.Control  type="text" value={inputValue.sparesInvolved} onChange={handleInputChange}    name='sparesInvolved'  className="form-control" id="sparesInvolved" placeholder="Spares Involved" />
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

