import React from 'react';
import { Button } from 'react-bootstrap';
import './GoBackButton.css'; 

const GoBackButton = (props) => {
  return (
    <Button className='backButton' onClick={() => props.history.push('/')} variant='primary'>
      Voltar
    </Button>
  );
};

export default GoBackButton;