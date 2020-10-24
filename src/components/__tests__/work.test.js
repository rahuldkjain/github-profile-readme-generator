import React from "react";
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Work from "../work"

configure({ adapter: new Adapter() });

describe("Work", () => {
    const props = {
            prefix: {
                title: "test_title",
                currentWork: "test_currentwork"
            },
            data: {title: "test_data"},
            link: {currentWork: "test_currentwork"},
            handlePrefixChange: jest.fn().mockReturnValue({}),
            handleLinkChange: jest.fn().mockReturnValue({}),
            handleDataChange: jest.fn().mockReturnValue({}),
        },
        mockEvent = { target: { value: "This is a mock event" } };

    it("renders work component correctly", () => {
        let i;
        const component = shallow(<Work {...props}/>);
        for (i = 0; i < component.find('input').length; i++) {
            component.find('input').at(i).simulate('change', mockEvent);
        }
        expect(toJson(component)).toMatchSnapshot();
    });
});