// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInput = React.useRef(null)
  const [errorMessage, setErrorMessage] = React.useState(null)
  
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(usernameInput.current.value)
  }

  function handleChange(event) {
    const isValid = usernameInput.current.value === usernameInput.current.value.toLowerCase()
    setErrorMessage(isValid ? null : 'Username must be lower case!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input ref={usernameInput} type="text" onChange={handleChange} />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {errorMessage}
      </div>
      <button type="submit" disabled={Boolean(errorMessage)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
