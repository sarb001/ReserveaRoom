import React from 'react'
import ApplyFilter from './ApplyFilter'
import Filteredcards from './Filteredcards'

const FilterSection = () => {
  return (
    <div className='m-8'>
      <div className='grid grid-cols-[0.5fr,1fr]'>
        <div> <ApplyFilter /> </div>
        <div> <Filteredcards /> </div>
      </div>
    </div>
  )
}

export default FilterSection