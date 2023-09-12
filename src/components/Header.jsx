import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
function Header() {
  async function logout() {
    await signOut(auth)
  }

  return (
    <div className='header-container'>
        <div className='signout-btn'><button onClick={logout}>Sign out</button></div>
        <div className='nickname'><p>{auth.currentUser.email}</p></div>
        <h1 style={{fontSize:'60px'}}>TODO App</h1>
    </div>
  )
}

export default Header