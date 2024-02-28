import React from 'react'

const ApplyFilter = () => {
  return (
    <div>

                   <div>
                            <select>
                              <option value='top-pics'> Our Top Pics </option>
                              <option value='discounts'> Our  Discount First </option>
                            </select>
                    </div>

                    <div>
                                <span>  Bed Preference </span>
                                            <ul>
                                            <li> Twin Bed </li>
                                            <li> Double Bed </li>
                                            </ul>
                   </div>

                    <div>
                            <span> Meals </span>
                              <ul>
                                <li> Self-catering </li>
                                <li> Breakfast & lunch included </li>
                                <li> All meals included </li>
                                <li> Breakfast included </li>
                              </ul>
                    </div>

                    <div>
                            <span> Property Type </span>
                              <ul>
                                <li> Hotels </li>
                                <li> Apartments </li>
                                <li> HomeStays Resorts </li>
                                <li> Villas </li>
                                <li> Entire homes & apartments </li>
                              </ul>
                    </div>       
                         
    </div>
  )
}

export default ApplyFilter