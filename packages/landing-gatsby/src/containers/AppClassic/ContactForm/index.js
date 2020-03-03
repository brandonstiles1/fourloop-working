import React from 'react';
import Text from 'common/src/components/Text';
import Button from 'common/src/components/Button';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import ContactFormStyling from './contactform.style';

import { Form, FormInput, FormGroup, FormTextarea } from "shards-react";

const ContactForm = () => {
  return (
    <ContactFormStyling>
      <Form name='mainContactForm' method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <FormGroup>
          <label htmlFor="#name">Name</label>
          <FormInput id="#name" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#password">Email</label>
          <FormInput type="email" id="#email" placeholder="Email" />
        </FormGroup>
        <p>What kind of help do you need?'</p>
        <FormTextarea name='message' className='mt-3' />
        <Button type='submit' title='Reach Out' />
      </Form>
    </ContactFormStyling>
  );
}

export default ContactForm;

