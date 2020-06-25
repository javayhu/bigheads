import React, { useState, useEffect } from 'react'
import { Avatar } from '../components/Avatar'

const Home = () => {
  // const [_, forceUpdate] = useState(true)

  // useEffect(() => {
  //   setInterval(() => forceUpdate(yes => !yes), 3000)
  // }, [])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 0)
  }, [])

  if (loading) return 'Loading...'

  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
      <div style={{ width: 300 }}>
        <Avatar />
      </div>
    </div>
  )
}

export default Home
