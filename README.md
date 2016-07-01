## Mixin Or HOC

Mixin => 命令式编程风格

HOC => 声明式的编程风格


## Usage

```js
package.json

{
  "dependencies": {
    "pure-render": "^1.0.0"
  }
}
```

```sh
npm install
```

```javascript
import PureRender from 'pure-render';

//debug状态
PureRender.__debug__ = true;


@PureRender
class Hello extends React.Component {
  render() {
    return (
      <div>hello world</div>
    );
  }
}

```


```log
log info....

Hello pure-render
  Hello avoid unnecessary re-render
  Hello compare lose time: 0.951ms
```
