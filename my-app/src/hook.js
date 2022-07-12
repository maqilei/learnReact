import React, { useState, useEffect } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  // useState 返回两个值，当前状态和一个可以变更状态的函数类似 Class 组件里的
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

// 等价的 Class 组件，这里理解 Hook 的意思就是为函数组件提供
// 了和 Class 组件类似的 state 和this.setState 的功能
/**
 * 
 *  class Example extends React.Component {
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
 */

export default Example;