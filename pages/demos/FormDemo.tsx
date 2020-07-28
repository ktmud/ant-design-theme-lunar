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
  Checkbox,
  List,
} from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import css from './FormDemo.module.less';

const { TextArea } = Input;
const { Item: FormItem } = Form;
const { Group: CheckboxGroup } = Checkbox;
const { Item: ListItem } = List;
const { Option } = Select;
const validateMessages = {
  required: 'Field is required.',
  types: {
    email: 'Invalid email address.',
  },
};

const checkboxOptions = [
  {
    value: 'foo',
    label: 'Foo',
  },
  {
    value: 'bar',
    label: 'Bar',
  },
  {
    value: 'baz',
    label: 'Baz',
  },
];

export default function FormDemo() {
  const [size, setSize] = useState('large' as SizeType);
  return (
    <Form
      layout="vertical"
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
      <Form.Item name="size" label="Form input size">
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
        <Select size={size} mode="tags" placeholder="Type to search">
          <Option value="foo">Foo</Option>
          <Option value="bar">Bar</Option>
          <Option value="disabled" disabled>
            disabled
          </Option>
          <Option value="barz">Barz</Option>
        </Select>
      </FormItem>

      <FormItem name="datepicker" label="Date picker">
        <DatePicker size={size} name="startDate" style={{ width: '100%' }} />
      </FormItem>

      <FormItem name="switch" label="Switch" valuePropName="checked">
        <Switch />
      </FormItem>

      <FormItem name="checkbox" valuePropName="checked">
        <Checkbox>Single checkbox</Checkbox>
      </FormItem>

      <FormItem label="Checkboxes" name="checkboxes" valuePropName="checked">
        <List
          dataSource={checkboxOptions}
          renderItem={(item) => {
            return (
              <ListItem>
                <label>
                  <ListItem.Meta
                    avatar={<Checkbox value={item.value} />}
                    title={item.label}
                    description={
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam leo erat, lacinia nec porttitor sed, mollis sed
                        nibh. Nam porta sit amet risus quis interdum. Sed
                        feugiat lorem vitae augue blandit, sed mollis mi
                        laoreet.
                      </>
                    }
                  />
                </label>
              </ListItem>
            );
          }}
        />
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
