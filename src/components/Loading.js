import React from 'react'

export default function Loading() {
  return (
    <div style={{ margin: 20 }}>
      <img src={process.env.PUBLIC_URL + '/load.gif'} alt="loading" />
    </div>
  )
}
