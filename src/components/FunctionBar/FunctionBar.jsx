import React from 'react'

const FunctionBar = ({name}) => {
  return (
    <div className='flex-center'>
      <h3>{name}</h3>
      <input type="date"/>
      <button>Random</button>
    </div>
  )
}

export default FunctionBar