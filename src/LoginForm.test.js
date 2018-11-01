import React from 'react';
import LoginForm from './LoginForm';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

it('should display the correct text',()=>{
    const wrapper = shallow(<LoginForm title="Login Screen" />)
    const titleText = 'Login Screen'
    expect(wrapper.contains(titleText)).toEqual(true);
})

//  เก็บดูการเปลี่ยนแปลง
// it('should match the snapshot',()=>{
//     const component = ReactTestRenderer.create(<LoginForm />)
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });

it('should render without crashing',()=>{
    shallow(<LoginForm />)
})