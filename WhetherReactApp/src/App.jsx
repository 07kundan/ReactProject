import React from 'react'
import { useState } from 'react';
import Layout from './components/Layout'
import ImageCollection from './components/ImageCollection';

function App() {

  const [Image, setImage] = useState(ImageCollection.LCity)
  return (
      <div>
        <Layout Image={Image}/>
      </div>
    )
}

export default App