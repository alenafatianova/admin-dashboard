import React, {  RefObject, useRef, useState } from 'react'
import { Header } from '../../components/header/Header'
import { Button, Input, Form } from 'antd'
import './Form.css'

type FormikValuesType = {
  firstName: string
  lastName: string
  email: string
  phone: string
  addressOne: string
  addressTwo: string
}

type InputNameType = 'firstName' | 'lastName' | 'email' | 'phone' | 'addressOne' | 'addressTwo'

type InputRefs = {
  [key in InputNameType]: RefObject<any>
}

export const NewUserForm = () => {

  const [form] = Form.useForm() 
  const initialFormikValues: FormikValuesType = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressOne: '',
    addressTwo: ''
  }

  const [values, setValues] = useState(initialFormikValues)


  const onFormSubmit = (value: any) => {
    setValues(value)
   console.log(value)
   
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = event.currentTarget
    const name = input.name
    const value = input.value

    setValues({
      ...values,
      [name]: value,
    })
  }

  const inputRefs: InputRefs = {
    firstName: useRef<HTMLInputElement>(),
    lastName: useRef<HTMLInputElement>(),
    email: useRef<HTMLTextAreaElement>(),
    phone: useRef<HTMLTextAreaElement>(),
    addressOne: useRef<HTMLInputElement>(),
    addressTwo: useRef<HTMLInputElement>(),
  }

  return (
    <div className='form-wrapper'>
      <div className='form-box-container'>
        <Header title='Create User' subtitle="Create a new user's profile!"/>
            <Form scrollToFirstError form={form} initialValues={initialFormikValues} onFinish={onFormSubmit}>
              <div className='form-container'>
              <Form.Item name='firstName' className='firstName-input' rules={[{ required: true, message: 'Please input your real name!', whitespace: true }]}>
              <Input 
                size='large' 
                type='text' 
                placeholder='First name'  
                title='firstName'
                onChange={onInputChange}
                value={values.firstName}
                name='firstName'
                ref={inputRefs['firstName']}
                required
              />
              </Form.Item>
             
              <Form.Item name='lastName' className='lastName-input' rules={[{ required: true, message: 'Please input your real last name!', whitespace: true }]}>
              <Input 
                size='large' 
                type='text' 
                placeholder='Last name'  
                title='lastName'
                onChange={onInputChange}
                value={values.lastName}
                ref={inputRefs['lastName']}
                name='lastName'
                required
              />
              </Form.Item>
               
               <Form.Item name='email' className='email-input' rules={[{ required: true, message: 'Please input your valid email!', whitespace: true }]}>
               <Input 
                size='large' 
                type='text' 
                placeholder='Email'  
                title='Email'
                onChange={onInputChange}
                ref={inputRefs['email']}
                value={values.email}
                name='email'
                required
              />
              </Form.Item>
              
              <Form.Item name='phoneNumber' className='phone-input' rules={[{ required: true, whitespace: true }]}>
               <Input 
                size='large' 
                placeholder='Phone number'  
                title='Phone number'
                onChange={onInputChange}
                ref={inputRefs['phone']}
                value={values.phone}
                name='phone'
                required
              />
              </Form.Item>

              <Form.Item name='addressOne' className='addressOne-input' rules={[{ required: true, whitespace: true }]}>
               <Input 
                size='large' 
                type='text' 
                placeholder='Address one'  
                title='Address one'
                onChange={onInputChange}
                ref={inputRefs['addressOne']}
                value={values.addressOne}
                name='addressOne'
                required
              />
              </Form.Item>

              <Form.Item name='addressTwo' className='addressTwo-input' rules={[{ required: false, message: 'This is optional!', whitespace: true }]}>
                <Input 
                size='large' 
                type='text' 
                placeholder='Address two (optional)'  
                title='Address two'
                onChange={onInputChange}
                value={values.addressTwo}
                ref={inputRefs['addressTwo']}
                name='addressTwo'
              />
              </Form.Item>
              </div>
              <div className='form-button'>
                <Button htmlType='submit' type='primary'>Create New User</Button>
              </div>
            </Form>
      </div>
    </div>
  )
}
