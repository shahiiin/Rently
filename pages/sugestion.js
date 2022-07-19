import React from "react";
import Image from "next/image";

function sugestion() {
  const list = [
    {
      avatar: require("../public/assets/pic1.svg"),
      price: "3100 sqft",
      info: "Greenwood Mews",
    },
    {
      avatar: require("../public/assets/pic2.svg"),
      price: "2185 sqft",
      info: "Avenue General de Gaulle...",
    },
    {
      avatar: require("../public/assets/pic3.svg"),
      price: "4098 sqft",
      info: "Tilleroyes residence of...",
    },
    {
      avatar: require("../public/assets/pic4.svg"),
      price: "1598 sqft",
      info: "Ardmore Residence",
    },
    {
      avatar: require("../public/assets/pic5.svg"),
      price: "4200 sqft",
      info: "Vinca avenue",
    },
    {
      avatar: require("../public/assets/pic2.svg"),
      price: "3200 sqft",
      info: "Kinnekullevagen 27",
    },
  ];

  return (
    <div>
      <h1 className="text-purple text-center mt-20 mb-10 text-4xl ">
        Hi Daniel, here are the properties <br></br>suggested by your agent
      </h1>
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center flex-row gap-2 mt-5 mb-5"
          >
            <div className="bg-light-gray w-[300px] h-[75px] flex overflow-hidden rounded text-purple">
              <Image src={item.avatar} alt="pic1" />
              <div>
                <p>Greenwood Mews</p>
                <span>{item.price}</span>
              </div>
            </div>
            <div className="bg-light-gray w-[300px] h-[75px] flex overflow-hidden rounded text-purple">
              <Image src={item.avatar} alt="pic1" />
              <div>
                <p>Greenwood Mews</p>
                <span>{item.price}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default sugestion;
