import React from 'react'

const Navbar = ({ filterItem, uniqueList }) => {

  return (
    <nav className='navbar'>
      <div className="btn_group">
        {
          uniqueList.map((currElem) => {
            return (
              <button className="btn" onClick={() => filterItem(currElem)}>
                {currElem}
              </button>
            )
          })
        }
        {/* <button className="btn" onClick={() => filterItem("Breakfast")}>
          Breakfast
        </button>
        <button className="btn" onClick={() => filterItem("Lunch")}>
          Lunch
        </button>
        <button className="btn" onClick={() => filterItem("Dinner")}>
          Dinner
        </button>
        <button className="btn" onClick={() => filterItem("Evening")}>
          Evening
        </button> */}
        {/* <button className="btn" onClick={() => filterItem("All")}>
          All
        </button> */}
      </div>
    </nav>
  )
}

export default Navbar