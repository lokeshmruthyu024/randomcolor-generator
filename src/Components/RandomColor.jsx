import React, { useEffect } from 'react'
import { useState } from 'react'

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length)
  }
  const handleCreateRandomHEXColor = () => {``
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }

    console.log(hexColor);
    setColor(hexColor);
  }

  const handleCreateRandomRGBColor = () => {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRGBColor
    else handleCreateRandomHEXColor
  }, [typeOfColor])

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: color
    }} className='container'>
      <div className='container1'>
        <button onClick={() => { setTypeOfColor('hex') }}>Create HEX Color</button>
        <button onClick={() => { setTypeOfColor('rgb') }}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHEXColor : handleCreateRandomRGBColor}>Generate Random Color</button>
      </div>
      <div className='box'>
        <div className='containera'>
          <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </div >

  )
}

export default RandomColor
