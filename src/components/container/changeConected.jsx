import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ChangeConected = (contactState) => {
    const [state, setState] = useState(contactState.state.contact.conected)
    const toggle = () =>{
        setState(!state);
    }
  return (
    <div>
        <h3>            
            {state ? 'Usuario Conectado':'Usuario Desconectado'}
        </h3>
        <button onClick={toggle}>
            Cambiar estado
        </button>
    </div>
  )
}
ChangeConected.propTypes = {
    contactState: PropTypes.instanceOf(Contact.conected)
}

export default ChangeConected
