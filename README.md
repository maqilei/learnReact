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