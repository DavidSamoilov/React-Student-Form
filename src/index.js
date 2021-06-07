import React from 'react'
import reactDom from 'react-dom'
import App from './App'


const Index = () => {
  return (
    <div>
      <App/>
    </div>
  )
}

reactDom.render(<Index/>,document.getElementById('root'))

export default Index
