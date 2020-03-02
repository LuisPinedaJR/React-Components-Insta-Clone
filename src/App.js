/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from 'react'
import './App.css'
// import the PostsPage and SearchBar and add them to the App
import PostPage from './components/PostsContainer/PostsPage'
import SearchBarContainer from './components/SearchBar/SearchBarContainer'
import CommentSectionContainer from './components/CommentSection/CommentSectionContainer'

const App = () => {
  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBarContainer />
      <PostPage />
      <CommentSectionContainer />
    </div>
  )
}

export default App
