import React from 'react'

const Navbar = (props) => {
  const filterItem = (category) => {
    props.filterItem(category)
  }
  return (
    <nav className='navbar'>
      <div className="btn_group">
        <button className="btn" onClick={() => filterItem("Breakfast")}>
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
        </button>
        <button className="btn" onClick={() => filterItem("All")}>
          All
        </button>
      </div>
    </nav>
  )
}

export default Navbar