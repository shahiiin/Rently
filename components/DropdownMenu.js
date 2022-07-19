import React from 'react'
import Select from 'react-select'





function Dropdown() {

  const options = [
    { value: 'chocolate', label: 'Chocolate', id:'1' },
    { value: 'strawberry', label: 'Strawberry', id:'2' },
    { value: 'vanilla', label: 'Vanilla', id:'3' }
  ]

  return (
    <div className='dropdown'>
      <Select
      styles={{border:'none'}}
       className="mt-1 px-3 py-2 h-[53px]  border
       shadow-sm  placeholder-slate-400 
       focus:outline-none border-green focus:ring-purple
        block w-small rounded-md sm:text-sm focus:ring rounded-2xl"
      options={options} />
    </div>
  )
}
export default Dropdown

