import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemCard from "./ItemCard";
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
        {props.list.map((list) =>
          <li className="list_items" key={list.id}>
            <Link to={'/item?id='+list.id} className="link_items">
              <ItemCard list={list}></ItemCard>
            </Link>
          </li>
        )}
      </Carousel>
    </ul>
  );
}

export default ItemList;