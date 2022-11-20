import React from 'react';
import Maggi from "./Images/maggi.jpg"

const MenuCard = ({ menuData }) => {

  return (

    <>
      <section className="main_card_container">
        <div className="card_container">
          {
            menuData.map((currElem, indx) => {
              return <>
                <div className="card">
                  <div className="card_body">
                    <span className="card_number">{currElem.id}</span>
                    <span className="card_author">{currElem.category}</span>
                    <span className="card_title"><h1>{currElem.name}</h1></span>
                    <span className="card_desc">{currElem.description}</span>
                    <div className="card_price" ><hr /><span style={{ display: "inline-block" }}>₹{currElem.price}</span>
                    </div>
                  </div>
                  <img src={Maggi} className="card-media" alt="" />
                  <p className="card_tag">Order Now</p>
                </div>
              </>
            })
          }
        </div>
      </section></>
  )
}

export default MenuCard