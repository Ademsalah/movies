import React, { useState } from 'react';
import Rate from './Rate';
import { InputGroup, FormControl,  } from "react-bootstrap";
export default function Filter({setsearch}) {
  
  return (
    <>
    <div className='filtreContainer'>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-brands fa-searchengin"></i></InputGroup.Text>
        <FormControl
          placeholder="search by title"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=>setsearch(e.target.value)}
        />
      </InputGroup>
      <Rate  rate={1}/> 
    </div>
    </>
  );
}