import React from "react"

import Title from "../title"
import {configure, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Title", () => {
  const mockEvent = { target: { value: "This is a mock event" } },
  props = {
    prefix: {
      title: "test_title",
      currentWork: "test_currentwork"
    },
    data: {title: "test_data"},
    link: {currentWork: "test_currentwork"},
    handlePrefixChange: jest.fn().mockReturnValue({}),
    handleLinkChange: jest.fn().mockReturnValue({}),
    handleDataChange: jest.fn().mockReturnValue({}),
  };

  it("renders title component correctly", () => {
    const component = shallow(<Title {...props}/>);
    component.find('input').at(0).simulate('change', mockEvent);
    component.find('input').at(1).simulate('change', mockEvent);
    expect(toJson(component)).toMatchSnapshot();
  });
})
