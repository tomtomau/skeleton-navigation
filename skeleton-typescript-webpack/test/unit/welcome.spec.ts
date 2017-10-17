import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {PLATFORM} from 'aurelia-pal';

describe('WelcomeComponent', () => {
  let component;

  beforeEach(async () => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('welcome'))
      .inView('<welcome first-name.bind="firstName"></welcome>')
      .boundTo({
        heading: 'Something else',
        firstName: 'Peter'
      })
    await component.create(bootstrap);
  });

  // only jest supports creating snapshot:
  if (jest) {
    it('should render correctly', () => {
      expect(document.body.outerHTML).toMatchSnapshot();
    });
  }

  it('should render first name', () => {
    const nameElement = document.querySelector('#fn') as HTMLInputElement;
    expect(nameElement.value).toBe('Peter');
  });

  afterEach(() => {
    component.dispose();
  });
});
