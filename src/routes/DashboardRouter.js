import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import {Marvel} from '../pages/Marvel'

export const DashboardRouter = () => {
  return (
    <>
        <NavBar/>
        <div className='mt-3'>
            <Routes>
                <Route path='/marvel' element={<Marvel/>}/>
                <Route path='*' element={
                    <main>
                        <p>Estás perdido?</p>
                    </main>
                }/>
            </Routes>
        </div>
    </>
  )
}
