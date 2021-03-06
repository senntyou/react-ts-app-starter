import * as React from 'react';
import * as Enzyme from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';
import Hello from '../src/components/Hello';

// Enzyme.configure({ adapter: new Adapter.default() });

test('Hello component', () => {
  const hello = Enzyme.shallow(<Hello name="test" />);

  // expect(hello.hasClass('container')).toBe(true);
  expect(hello.text()).toBe('Hello, test!');
});
