import App from './App';
import Enzyme, {render }from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  // Monta el componente con todos sus hijos
  const view = render(<App />);

  // describe('Rendering App', () => {
  //   it('Should instance to be defined', () => {
  //     expect(view).toBeDefined();
  //   });
  // });
  it('Should instance to be defined', () => {
    expect(view).toBeDefined();
  });
});