/* eslint-disable no-template-curly-in-string */
import { useState } from 'react';
import {
  Form,
  Select,
  Input,
  DatePicker,
  Switch,
  Slider,
  Button,
  Radio,
} from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

const { TextArea } = Input;
const { Item: FormItem } = Form;
const { Option } = Select;
const validateMessages = {
  required: '${label} is required',
};

export default function FormDemo() {
  const [size, setSize] = useState('large' as SizeType);
  return (
    <Form
      layout="vertical"
      style={{ maxWidth: 600, paddingBottom: '40px' }}
      hideRequiredMark
      name="demo"
      initialValues={{
        size,
        text: 'lunar',
        email: 'lunar@example.com',
        textarea: 'Type something...',
        select: 'foo',
        multiselect: ['foo', 'bar'],
        switch: true,
        slider: 7,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item name="size" label="Form Size">
        <Radio.Group size={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="middle">Middle</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <FormItem name="text" label="Text">
        <Input size={size} autoComplete="off" />
      </FormItem>
      <FormItem name="email" label="Email" rules={[{ type: 'email' }]}>
        <Input size={size} type="email" autoComplete="off" />
      </FormItem>
      <FormItem name="textarea" label="Textarea" rules={[{ required: true }]}>
        <TextArea rows={6} />
      </FormItem>

      <FormItem name="select" label="Select">
        <Select size={size}>
          <Option value="foo">Foo</Option>
          <Option value="bar">Bar</Option>
          <Option value="disabled" disabled>
            disabled
          </Option>
          <Option value="yiminghe">Barz</Option>
        </Select>
      </FormItem>

      <FormItem name="multiselect" label="Multi select">
        <Select size={size} mode="multiple">
          <Option value="foo">Foo</Option>
          <Option value="bar">Bar</Option>
          <Option value="disabled" disabled>
            disabled
          </Option>
          <Option value="yiminghe">Barz</Option>
        </Select>
      </FormItem>

      <FormItem name="datepicker" label="Date picker">
        <DatePicker size={size} name="startDate" style={{ width: '100%' }} />
      </FormItem>

      <FormItem
        name="switch"
        label="Switch"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        valuePropName="checked"
      >
        <Switch />
      </FormItem>

      <FormItem name="slider" label="Slider" wrapperCol={{ span: 10 }}>
        <Slider min={0} max={10} />
      </FormItem>

      <FormItem>
        <Button size={size} type="primary" htmlType="submit">
          Save
        </Button>
        <Button size={size} style={{ marginLeft: 8 }}>
          Cancel
        </Button>
        <Button size={size} style={{ marginLeft: 8 }}>
          Reset
        </Button>
      </FormItem>
    </Form>
  );
}
