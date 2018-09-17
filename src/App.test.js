import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { shallow } from 'enzyme';
// import { expect } from 'chai';
// import Login from './components/Login'

describe('For component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
    // it('should test that the component mounts', () => {
    //     sinon.spy(Parent.prototype, 'componentDidMount');
    //     const container = mount(<Parent />);
    //     expect(Parent.prototype.componentDidMount.calledOnce).to.equal(true);
    // });
    // it('should render one <Login /> component', () => {
    //     const wrapper = shallow(<Login />);
    //     expect(wrapper.find(Login)).to.have.length(1);
    // });
});

