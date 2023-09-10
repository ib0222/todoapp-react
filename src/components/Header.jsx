import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
function Header() {
  async function logout() {
    await signOut(auth)
  }

  return (
    <div className='header-container'>
        <h1 style={{fontSize:'60px'}}>TODO App</h1>
        <button onClick={logout}>Sign out</button>
    </div>
  )
}

export default Header