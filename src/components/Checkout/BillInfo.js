import React from 'react'
import { Form, FormGroup } from 'react-bootstrap'

const BillInfo = () => {
    return (
        <div className='billInfo_section'>
            <h4>billing information</h4>
            <Form>
                <FormGroup className='form_group'>
                    <input type='text' placeholder='Enter your name' />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input type='email' placeholder='Enter your e-mail' />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input type='number' placeholder='Phone number' />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input type='text' placeholder='Street address' />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input type='text' placeholder='City' />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input type='text' placeholder='Postal code' />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input type='text' placeholder='Country ' />
                </FormGroup>
            </Form>
        </div>
    )
}

export default BillInfo