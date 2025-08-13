import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SectionsMenu } from '../sectionsMenu';

// Mock categorizedSkills similar to skills.test.js
jest.mock('../../constants/skills', () => ({
  __esModule: true,
  categorizedSkills: {
    language: {
      title: 'Programming Languages',
      skills: ['javascript'],
    },
    frontend_dev: {
      title: 'Frontend Development',
      skills: ['react'],
    },
  },
}));

describe('SectionsMenu', () => {
  let component;

  beforeEach(() => {
    // Mock the document.getElementById and scrollIntoView
    document.getElementById = jest.fn((id) => ({
      scrollIntoView: jest.fn(),
    }));
    component = shallow(<SectionsMenu />);
  });

  it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('starts with a closed menu', () => {
    expect(component.find('.absolute').exists()).toBeFalsy();
  });

  it('opens menu when clicking the toggle button', () => {
    // Find and click the menu button
    component.find('button').first().simulate('click');
    expect(component.find('.absolute').exists()).toBeTruthy();
  });
});
