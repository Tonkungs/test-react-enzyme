import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('should render the login form correctly',()=>{
  const wrapper = mount(<App/>);
  const titleText = 'Login App';
  expect(wrapper.contains(titleText)).toEqual(true);
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
