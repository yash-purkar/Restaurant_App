import React from 'react'

const Navbar = ({ filterItem, uniqueList }) => {

  return (
    <nav className='navbar'>
      <div className="btn_group">
        {
          uniqueList.map((currElem, indx) => {
            return (
              <button className="btn" onClick={() => filterItem(currElem)} key={indx}>
                {currElem}
              </button>
            )
          })
        }
      </div>
    </nav>
  )
}

export default Navbar