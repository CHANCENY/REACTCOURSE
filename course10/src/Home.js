import React from 'react'

//import icons
import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'

const Home = ({width, height, msg}) => {
  return (
    <div>
        {width < 768 ? <FaMobileAlt/> : width < 992 ? <FaTabletAlt/> : <FaLaptop />}
        <h3>{`Width Value: ${width}`}</h3>
        <h3>{`Height Value: ${height}`}</h3>
        <h3>{`Page Status: ${msg}`}</h3>
    </div>
  )
}

export default Home