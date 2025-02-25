import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 80%;
  background-color: white;
  padding: 20px;
  margin: auto;
  border: 1px solid #ddd;
`;

function Personal({ personal, handleChanges }) {
  // Function to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(personal);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>First Name: </h3>
      <input type='text' name="fName" value={personal.fName} onChange={handleChanges} />
      <h3>Last Name: </h3>
      <input type='text' name="lName" value={personal.lName} onChange={handleChanges} />
      <h3>Email: </h3>
      <input type='email' name="email" value={personal.email} onChange={handleChanges} />
      <h3>Phone: </h3>
      <input type='number' name="phone" value={personal.phone} onChange={handleChanges} />
      <h3>Address: </h3>
      <textarea name='address' value={personal.address} onChange={handleChanges}></textarea>
      <button type='submit'>Submit</button>
    </StyledForm>
  );
}

export default Personal;