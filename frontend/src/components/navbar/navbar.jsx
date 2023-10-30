import React from 'react'
import StatusBar from './statusBar/StatusBar'
import MenuBar from './menuBar/MenuBar'
import SearchBar from './searchBar/SearchBar'

function NavBar({textLogo}) {
  return (
    <>
    <StatusBar/>
    <MenuBar logo={textLogo}/>
    <SearchBar/>
    
    
    </>
  )
}

export default NavBar