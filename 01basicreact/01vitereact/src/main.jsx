import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const AnotherElement =(
//   <a href="https://google.com" target='_blank'> Click Me</a>
// )

// const reactElement = React.createElement(
//   "a",
//   {
//     href : "https://google.com",
//     target:"_blank"
//   },
//   "click me to access google "
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <React.StrictMode>
    <App/>
    // , AnotherElement
  // reactElement
     
  // </React.StrictMode>,
)
