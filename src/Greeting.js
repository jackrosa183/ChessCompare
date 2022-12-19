export default function Greeting(props) {
  return (
    <div className="header">
      <h1>♟♔Welcome to Chess Compare! ♕♟</h1>
      <p>
        Github: <a href="https://github.com/jackrosa183">{props.name}</a>
      </p>
    </div>
  )
}