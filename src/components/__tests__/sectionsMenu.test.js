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

  it('closes menu when clicking the toggle button again', () => {
    // Open menu
    component.find('button').first().simulate('click');
    expect(component.find('.absolute').exists()).toBeTruthy();

    // Close menu
    component.find('button').first().simulate('click');
    expect(component.find('.absolute').exists()).toBeFalsy();
  });

  describe('Section navigation', () => {
    beforeEach(() => {
      component.find('button').first().simulate('click');
    });

    it('calls scrollToSection when clicking main section buttons', () => {
      const mockScrollIntoView = jest.fn();
      document.getElementById = jest.fn(() => ({
        scrollIntoView: mockScrollIntoView,
      }));

      // Click the Title section button
      const titleButton = component
        .findWhere((node) => node.type() === 'button' && node.text().includes('Title'))
        .first();
      titleButton.simulate('click');

      expect(document.getElementById).toHaveBeenCalledWith('title-section');
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
  });
});
