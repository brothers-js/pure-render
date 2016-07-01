jest.unmock('../src/index');
jest.unmock('immutable');
import PureRender from '../src/index';

function Component() {
  this.props = {};
  this.state = {};
}



describe('pure render test suite', () => {
  it('is will not render', () => {
    PureRender(Component);
    const pureRender = new Component();
    expect(false).toEqual(pureRender.shouldComponentUpdate({}, {}));
  });

  it('is will re-redner', () => {
    PureRender(Component);
    const pureRender = new Component();
    expect(true).toEqual(pureRender.shouldComponentUpdate({id: 1}, {}));
  });

  it('is will not redner with (debug)', () => {
    PureRender.__debug__ = true;
    console.group = console.log;
    console.time = console.log;
    console.timeEnd = console.log;
    console.groupEnd = console.log;
    console.groupCollapsed = console.log;
    
    PureRender(Component);
    const pureRender = new Component();
    expect(false).toEqual(pureRender.shouldComponentUpdate({}, {}));
  });

  it('is will re-redner with (debug)', () => {
    PureRender.__debug__ = true;
    console.group = console.log;
    console.time = console.log;
    console.timeEnd = console.log;
    console.groupEnd = console.log;

    PureRender(Component);
    const pureRender = new Component();
    expect(true).toEqual(pureRender.shouldComponentUpdate({id: 1}, {}));
  });
});

