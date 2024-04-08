import { useState } from 'react'
import { Button, Form, Input, DatePicker, Modal } from 'antd';
import './Register.css'


function Register() {
  const [formData, setFormData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    setFormData(values);
    setIsOpen(true);
    form.resetFields();
  };

  const handleChickOk = () => {
    setIsOpen(false);

  };

  return (
    <>
      <div className='register-page'>
        <div className='header'>Register now!</div>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            className='usernameform'
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username.',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className='passwordform'
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password.',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid Email.',
              },
              {
                required: true,
                message: 'Please input your Email.',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="FirstName"
            name="firstname"
            rules={[
              {
                required: true,
                message: 'Please input your Firstname.',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="LastName"
            name="lastname"
            rules={[
              {
                required: true,
                message: 'Please input your Lastname.',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="birthday"
            label="Birthday"
            rules={[
              {
                required: true,
                message: 'Please input your Birthday.',
              },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Modal
        title="สมัครสมาชิกสำเร็จ"
        open={isOpen}
        onOk={handleChickOk}
        onCancel={handleChickOk}
      >
        {formData && (
          <div>
            <p>Username: {formData.username}</p>
            <p>Password: {formData.password}</p>
            <p>Email: {formData.email}</p>
            <p>Firstname: {formData.firstname}</p>
            <p>Lastname: {formData.lastname}</p>
            <p>Birthday: {formData.birthday.$D}/{formData.birthday.$M + 1}/{formData.birthday.$y}</p>
          </div>
        )}
      </Modal>

    </>

  )
}

export default Register
