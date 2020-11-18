// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [usernameInputValue, setUsernameInputValue] = React.useState('')
  
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(usernameInputValue)
  }

  function handleChange(event) {
    setUsernameInputValue(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} value={usernameInputValue}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
