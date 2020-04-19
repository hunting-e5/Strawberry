import React, { useState } from 'react';
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

      {/* ItemList는 item의 List를 props로 받아 ItemCard 컴포넌트에 mapping하여 각각의 아이템을 
      ItemCard 형식으로 렌더링하는 컴포넌트이다.
      따라서 각각의 item('한 개의' DemandPost, '한 개의' SupplyPost, '한 개의' 공지 등등 )을 props로 ItemCard에 넘겨준다.
      */}

        {props.list.map((item) =>
          <li className="list_items" key={item.id}>
              <ItemCard item={item}></ItemCard>
          </li>
        )}


      </Carousel>
    </ul>
  );
}

export default ItemList;