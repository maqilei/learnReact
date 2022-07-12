### JSX
> jsx 可以生成 react 元素
一个基本的 jsx 
```jsx
const element = <h1>Hello, world</h1>
```
#### 在 JSX 中嵌入表达式
大括号里可以放任何有效的javaScript 表达式，比如`1+1`, `user.name`, `func(param)`
```jsx
const name = 'zhangsan'
const element = <h1>Hello, {name}</h1>
```
属性值也可以用大括号来插入表达式
```jsx
const element = <img src={user.avatarUrl}></img>
```

### 组件
Props的用法
```javascript
    function Welcome(props) {
        return <h1>hello, {props.name}</h1>
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    const element = <Welcome name="zhangsan" />
    root.render(element);
```
### State
> State 与 Props 类似，但是 state 是私有的，并且完全受控于当前组件，而props 是由父组件传入，不建议更改。

#### 生命周期
1. componentDidMount() 与  componentWillUnmount()
- conmponentDidMount 会在组件已经被渲染到 DOM 后运行

#### 更新组件 State
- `this.setState`，当 state 的状态改变了，组件会重新渲染
```javascript
    this.setState({
        data: newData
    })
    // 下面这种方式不会重新渲染组件，
    this.state.data = newData;
```
- State 的更新可能是异步的
```javascript
// 这样 counter 可能无法更新
this.setState({
  counter: this.state.counter + this.props.increment,
});
// 解决方案：使得setState 接收一个函数而不是一个对象, 箭头函数和普通函数均可
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

### 事件处理
事件的设置
```jsx
  <button onClick={activateLasers}>
    Activate Lasers
  </button>
```

阻止表单默认提交，不能用 `return false`，而是必须显式地使用`e.preventDefault`

> 回调函数地调用必须得在constructor中绑定一下this，否则直接使用thsi.func，此时的 this 会是 undefined，否则也可以使用箭头函数来把 this 固定在当前组件实例上
```javascript
    constructor(props) {
        this.handleClick = this.handleClick.bind(this)
    }
```

### 条件渲染
- 用普通的if 语句来做到条件渲染
```javascript
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
```
#### 阻止组件渲染
> 通过 prop 中的 warn 确定是否需要渲染 warn 为 false 不会渲染

### 列表 & Key
> 可以通过 {} 在 JSX 内构建一个元素集合
```javascript
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map(item => <li>{item}</li>)
    return <ul>{listItems}</ul>
```

### 状态提升
> 多个组件需要反应相同的变化数据，这时将共享状态提升到最近的共同父组件中去。

### Hook
> Hook 是一些可以让你在函数组件里“钩入”React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用
#### Hook 使用规则
- 只能在函数最外层调用Hook。不要再循环、条件判断或者子函数中调用，因为只有当Hook 的调用顺序在多次渲染之间保持一致，React 就能正确地将内部 state 与对应的 Hook 进行关联。
- 只能在 React 的函数组建中调用 Hook。不要再其他JavaScript 函数中调用。
#### state Hook
> 为函数组件提供一种类似于 Class 组件的 state 和 this.setState 一样的功能
```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  // useState 返回两个值，当前状态和一个可以变更状态的函数类似 Class 组件里的
  // 这里是一个简单的解构赋值的操作
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
// 等价的 Class 组件的写法
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

#### useEffect Hook
> 通过 useEffect Hook，可以告诉 React 组件在渲染之后执行某些操作，React 会保存传入的函数，并且在执行 DOM 更新之后调用它
```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
useEffect 会在第一次渲染和每次更新之后执行。它允许我们按照代码的用途分离，
> 

