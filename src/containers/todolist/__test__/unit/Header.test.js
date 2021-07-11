import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Header from '../../components/Header'
Enzyme.configure({ adapter: new Adapter() });

it('Header组件包含一个input框', ()=> {
    const wrapper = shallow(<Header />)
    const inputElem = wrapper.find("[data-test='input']");
    expect(inputElem.length).toBe(1);
})

it('Header组件包含一个input框, 初始化应该为空', ()=> {
    const wrapper = shallow(<Header />)
    const inputElem = wrapper.find("[data-test='input']");
    expect(inputElem.prop('value')).toEqual('');
})

it('Header组件包含一个input框内容, 当用户输入时，会跟随变化', ()=> {
    const wrapper = shallow(<Header />)
    const inputElem = wrapper.find("[data-test='input']");
    const userInput = 'Learning react jest';
    inputElem.simulate('change', {
        target: { value: userInput }
    })
    // 数据测试
    expect(wrapper.state('value')).toEqual(userInput)
    // dom测试
    const newInputElem = wrapper.find("[data-test='input']");
    expect(newInputElem.prop('value')).toBe(userInput)
})

it('Header组件 input框输入回车时, 如果 input 无内容, 无操作', ()=> {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />)
    const inputElem =  wrapper.find("[data-test='input']");
    wrapper.setState({value:''})
    inputElem.simulate('keyUp', {
        keyCode: 13
    });
    expect(fn).not.toHaveBeenCalled();
})

it('Header组件 input框输入回车时, 如果 input 有内容, 函数应该被调用', ()=> {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />)
    const inputElem =  wrapper.find("[data-test='input']");
    const userInput = 'learning react'
    wrapper.setState({value:userInput})
    inputElem.simulate('keyUp', {
        keyCode: 13
    });
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenLastCalledWith(userInput);
})

it('Header组件 input框输入回车时, 如果 input 有内容, 最后应该被清除掉', ()=> {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />)
    const inputElem =  wrapper.find("[data-test='input']");
    const userInput = 'learning react'
    wrapper.setState({value:userInput})
    inputElem.simulate('keyUp', {
        keyCode: 13
    });
    const newInputElem = wrapper.find("[data-test='input']")
    expect(newInputElem.prop('value')).toBe('')
})







