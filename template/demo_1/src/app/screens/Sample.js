import React, { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

const Sample = () => {
  const [specializations, setSpecializations] = useState([
    {
      id: Date.now(),
      specialization: '',
      wastagePercentage: '',
      goldsmithPercentage: '',
    },
  ]);

  const [submittedData, setSubmittedData] = useState([]);

  const addSpecialization = () => {
    const newSpecialization = {
      id: Date.now(),
      specialization: '',
      wastagePercentage: '',
      goldsmithPercentage: '',
    };
    setSpecializations([...specializations, newSpecialization]);
  };

  const removeSpecialization = (id) => {
    const updatedSpecializations = specializations.filter(
      (spec) => spec.id !== id
    );
    setSpecializations(updatedSpecializations);
  };

  const handleInputChange = (id, field, value) => {
    const updatedSpecializations = specializations.map((spec) =>
      spec.id === id ? { ...spec, [field]: value } : spec
    );
    setSpecializations(updatedSpecializations);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Collect submitted data
    const data = specializations.map((spec) => ({
      specialization: spec.specialization,
      wastagePercentage: spec.wastagePercentage,
      goldsmithPercentage: spec.goldsmithPercentage,
    }));

    // Check if name and touch fields are filled
    const name = e.target.querySelector('#exampleInputName1').value;
    const touch = e.target.querySelector('#touch').value;

    if (name === '' || touch === '') {
      alert("Please fill in the 'Name' and 'Touch' fields before submitting.");
      return;
    }

    // Check if all specialization fields are filled
    const isAllFieldsFilled = data.every(
      (item) =>
        item.specialization !== '' &&
        item.wastagePercentage !== '' &&
        item.goldsmithPercentage !== ''
    );

    if (isAllFieldsFilled) {
      // Add name and touch to each specialization data
      const completeData = data.map((item) => ({...item,name,touch,}));

      setSubmittedData(completeData);
    } else {
      alert('Please fill in all the specialization fields before submitting.');
    }
  };

  const specializationInputs = specializations.map((spec, index) => (
    <div key={spec.id} className={`my-2 ${index > 0 ? 'mt-3' : ''}`}>
      <Row className="align-items-center">
        <Col md={4}>
          <label>Specialization</label>
          <Form.Control type='text' placeholder='Specialization' value={spec.specialization}
            style={{ position: 'relative' }}
            onChange={(e) =>
              handleInputChange(spec.id, 'specialization', e.target.value)
            }
          />
        </Col>
        <Col md={4}>
          <label>Wastage Percentage</label>
          <Form.Control type='text' placeholder='Wastage Percentage' value={spec.wastagePercentage}
            onChange={(e) =>
              handleInputChange(spec.id, 'wastagePercentage', e.target.value)
            }
          />
        </Col>
        <Col md={3}>
          <label>Goldsmith Percentage</label>
          <Form.Control type='text' lang='es' placeholder="GoldSmith's Percentage" value={spec.goldsmithPercentage}
            onChange={(e) =>
              handleInputChange(spec.id, 'goldsmithPercentage', e.target.value)
            }
          />
        </Col>
        {index > 0 && (
          <Col md={1} className='text-center'>
            <Button variant='danger' type='button' className='btn-close p-1 my--5 mx--5'onClick={() => removeSpecialization(spec.id)}
              style={{
                fontSize: '10px',
                position: 'absolute',
                marginBottom: '0px',
              }}>
              <span className=' mdi mdi-delete' style={{ fontSize: '20px' }}></span>
            </Button>
          </Col>
        )}
      </Row>
    </div>
  ));

  const displayedData = submittedData.map((data, index) => (
    <div key={index}>
      Name: {data.name}, Touch: {data.touch}, Specialization: {data.specialization}, Wastage Percentage: {data.wastagePercentage}, Goldsmith Percentage: {data.goldsmithPercentage}
    </div>
  ));

  return (
    <>
      <div className='col-12 grid-margin stretch-card'>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title'>Goldsmith Registration Form</h4>
            <form className='forms-sample' onSubmit={handleFormSubmit}>
              <Form.Group>
                <label htmlFor='exampleInputName1'>Goldsmith's Name</label>
                <Form.Control
                  type='text'
                  className='form-control'
                  id='exampleInputName1'
                  placeholder='Name'
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor='exampleInputCity1'>Touch</label>
                <Form.Control type='text' className='form-control' id='touch'placeholder='Touch'/>
              </Form.Group>
              <Form.Group>
                <label htmlFor='glodsmithsspecialization'> Goldsmith's Specialization</label>
                {specializationInputs}
                <Button type='button' className='btn btn-primary btn-fw my-5'onClick={addSpecialization}>Add More Specialization's +</Button>
              </Form.Group>
              <Button type='submit' className='btn btn-primary mr-2'>Submit</Button>
              <Button className='btn btn-dark'>Cancel</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sample;
