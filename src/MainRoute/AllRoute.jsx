import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SingleCoin from '../Pages/SingleCoin'
import AllCryptos from '../Pages/AllCryptos'

const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<AllCryptos/>}/>
        <Route path='/coin/:id' element={<SingleCoin/>}/>
    </Routes>
  )
}

export default AllRoute