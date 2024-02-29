import React from 'react'

const ApplyFilter = () => {
  return (
    <div>
                <div>
                    <span className='text-3xl'> Filter By: </span>
                </div>

                   <div className='my-4'>
                            <select>
                              <option value='top-pics'> Our Top Pics </option>
                              <option value='discounts'> Our  Discount First </option>
                            </select>
                    </div>

                    <div  className='my-4'>
                                <span className='text-2xl'>  Bed Preference </span>
                                <div>
                                    <input  type = "checkbox"  />
                                    <label> Twin Bed </label>
                                </div>
                                <div>
                                    <input  type = "checkbox"  />
                                    <label> Double Bed </label>
                                </div>
                   </div>

                    <div  className='my-4'>
                            <span className='text-2xl'> Meals </span>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label> Self-catering </label>
                                </div>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label>  Breakfast & lunch included </label>
                                </div>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label>   All meals included </label>
                                </div>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label>  Breakfast included </label>
                                </div>
                    </div>

                    <div  className='my-4'>
                            <span className='text-2xl'> Property Type  </span>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label> Hotels </label>
                                </div>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label> Apartments </label>
                                </div>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label> HomeStays Resorts </label>
                                </div>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label> Villas </label>
                                </div>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label> Entire homes & apartments </label>
                                </div>
                    </div>
    </div>
  )
}

export default ApplyFilter