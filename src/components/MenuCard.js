import React from 'react';


const MenuCard = ({ menuData }) => {

  return (

    <>
      <section className="main_card_container">
        <div className="card_container">
          {
            menuData.map((currElem, indx) => {
              return <>
                <div className="card" key={currElem.id}>
                  <div className="card_body">
                    <span className="card_number">{currElem.num}</span>
                    <span className="card_author">{currElem.category}</span>
                    <span className="card_title"><h1>{currElem.name}</h1></span>
                    <span className="card_desc">{currElem.description}</span>
                    <div className="card_price" ><hr /><span style={{ display: "inline-block" }}>₹{currElem.price}</span>
                    </div>
                  </div>
                  <img src={currElem.img} className="card-media" alt="" />
                  <button className="order_btn">Order Now</button>
                </div>
              </>
            })
          }
        </div>
      </section>
    </>
  )
}

export default MenuCard