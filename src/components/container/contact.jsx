import React from 'react'
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ChangeConected from './changeConected';

const ContactComponent = ({contact}) => {
  return (
    <div>
        <h2>
            Nombre:{contact.name}
        </h2>
        <h3>
            Descripcion: {contact.surname}
        </h3>
        <h4>
            Email: {contact.email}
        </h4>
        <ChangeConected state = {{contact}} />
    </div>
)
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent
