import { Grid } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import './form.css';
import cap from './img/re_captcha.png';

const MyForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        // Handle form submission logic here
        console.log(values);

        // Clear the form fields after successful submission
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                companyName: '',
                jobTitle: '',
                helpWith: '',
                questions: '',
            }}
            onSubmit={handleSubmit}
        >
            <Form>
                <Grid container spacing={2} className='form'>
                    <Grid item xs={12}>
                        <label>Email*</label> <br />
                        <label>Please enter a valid email address</label>
                        <Field
                            style={{ width: '99%' }}
                            type="text"
                            name="email"
                            className='input-field'
                        />
                        <br />
                    </Grid>
                    <Grid item xs={6}>
                        <label>First Name*</label>
                        <Field
                            style={{ width: '99%' }}
                            type="text"
                            name="firstName"
                            className='input-field'
                        />
                        <br />
                    </Grid>
                    <Grid item xs={6}>
                        <label>Last Name*</label>
                        <Field
                            style={{ width: '99%' }}
                            type="text"
                            name="lastName"
                            className='input-field'
                        />
                        <br />
                    </Grid>
                    <Grid item xs={6}>
                        <label>Company Name</label>
                        <Field
                            style={{ width: '99%' }}
                            type="text"
                            name="companyName"
                            className='input-field'
                        />
                        <br />
                    </Grid>
                    <Grid item xs={6}>
                        <label>Job Title</label>
                        <Field
                            style={{ width: '99%' }}
                            type="text"
                            name="jobTitle"
                            className='input-field'
                        />
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <label>What can we help you with?*</label>
                        <Field
                            style={{ width: '99%' }}
                            type="text"
                            name="helpWith"
                            className='input-field'
                        />
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <label>Questions</label>
                        <Field
                            style={{ width: '98.8%', height: '10vh' }}
                            type="text"
                            name="questions"
                            as="textarea"
                            className='input-field'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <p className='t1'>Infotech needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our <span className='span'>Privacy Policy.</span></p>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={cap} alt="." className='captcha' />
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <button type='submit' className='form-btn'>
                            SUBMIT YOUR QUESTION
                        </button>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
            </Form>
        </Formik>
    );
}

export default MyForm;
