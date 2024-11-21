import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ImageSlider from './assets/components/image'
function App() {

  return (
    <>
     <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={'10'} />
    </>
  )
}

export default App
