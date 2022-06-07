import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (

        //whenever we pass inline css we do it as object
      <div style={{display:'flex', padding:'2rem'}}>
          <h1>Movies</h1>
          <h1 style={{marginLeft:'2rem' }}>Favouriotes</h1>
      </div>
    )
  }
}

export default Navbar