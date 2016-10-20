import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


//use describe to group together similar tests
describe('App', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(App)
  })

  beforeEach(() => {

  })

  // Use 'it' to test a single attribute of a target
  it('shows a comment box', () => {
    
    expect(component.find('.comment-box')).to.exist;
    
  });

  // Use 'expect' to make an 'assertion' about a target
  
})
