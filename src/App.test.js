import React from 'react'
import App from './App'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    // const wrapper = mount(<App />)
    // expect(wrapper).toMatchSnapshot();
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // const container = div.getElementsByClassName('App');
    // expect(container.length).toBe(1)
    const wrapper = shallow(<App />)
    const container = wrapper.find('[data-test="container"]')
    expect(container.length).toBe(1)
    // 判断属性
    expect(container.prop('title')).toBe('jiaxin')
    //console.log(wrapper.find('.App'));
    expect(container).toExist()
    expect(container).toHaveProp('title','jiaxin')
    console.log(wrapper.debug())
})