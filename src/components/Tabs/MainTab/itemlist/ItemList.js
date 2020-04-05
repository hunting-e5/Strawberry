import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemCards from "../../../stories/Card";
//import ItemsCarousel from 'react-items-carousel';

const ItemList = (props) => {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 4,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1000, min: 600 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  }

  return (
    <ul style={{ padding: `0 ${chevronWidth}px` }}>
      <Carousel className="mylist"
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        //numberOfCards={3}
        partialVisible={false}
        responsive={responsive}
        gutter={20}
        leftChevron={<button><strong>{'<'}</strong></button>}
        rightChevron={<button><strong>{'>'}</strong></button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {props.list.map((lists) =>
          <li className="list_items" key={lists.id}>
            <Link to={'/item?id='+lists.id} className="link_items">
              <ItemCards lists={lists}></ItemCards>
              {/* <img src={lists.src} className="img_items" alt={lists.title}/>
            <div className="info_items">
                <strong className="tit_items">
                    제품명 : {lists.title} <p></p>
                </strong>
                제품 가격 : {lists.price}
            </div> */}
            </Link>
          </li>
        )}
      </Carousel>
    </ul>
  );
}

export default ItemList;