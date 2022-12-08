import React from 'react'
import { C1 } from './C1'
import {C2} from './C2'
import { C3 } from './C3'

export const Main = () => {

  return (<main>
    <div className='main-news'>
        <C1/>
        <C2/>
    </div>
    <hr/>
    <div className='secondary-news'>
    <C3/>
    </div>
  </main>
    
  )
}
