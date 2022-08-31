import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>React计时器组件</h1>
      <p>实现一个以秒为单位计时的计时器组件, 线框图和组件要求大致如下</p>
      <img src="./timer.png" />
      <ul>
        <li>
          1. 计时器一开始显示默认数字0，上方有个start
          按钮，点击后开始计时，每过1秒显示数字 + 1
        </li>
        <li>2. 计时器上显示一个 pause 按钮，点击后停止计时 </li>
        <li>3. 计时器上显示一个 reset 按钮，点击后数字归0 </li>
        <li>
          4. 给计时器增加一个用于设置初始数字的参数 (props),
          如果不传默认还是从0开始
        </li>
        <li>
          5. 给计时器增加一个用于指定计时方向的参数，类型为布尔值。
          此参数为true时跟之前一样累加计时，为false时为倒计时，每秒减1
        </li>
        <li>
          6. 最终在页面上放置两个上面写的计时器组件，一个从0开始正计时，一个从100开倒始计时
        </li>
      </ul>
      <div className="result">
        <h3>在这里放置计时器</h3>
      </div>
    </div>
  );
}
