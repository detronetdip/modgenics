import React from "react";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSetRecoilState } from "recoil";
import { textState } from "../store/index";

const Header = () => {
  const [height, setheight] = useState(0);
  const openMenu = () => {
    if (height == 0) {
      setheight("auto");
    } else {
        setheight(0);
    }
};
const setState = useSetRecoilState(textState);
  useEffect(() => {
    const res = () => {
      if (window.innerWidth > 600) {
        setheight(0);
      } else {
        setheight(0);
      }
    };
    window.addEventListener("resize", res);

    return () => {
      window.removeEventListener("resize", res);
    };
  });

  const viewThis = (itemNo) => {
    setState((old) => {
      return {
        ...old,
        selected: itemNo,
      };
    });
  };

  return (
    <>
      <div className="nav">
        <h4>ModGenics</h4>
        <ul>
          <li onClick={() => viewThis(0)}>ImageOne</li>
          <li onClick={() => viewThis(1)}>ImageTwo</li>
          <li onClick={() => viewThis(2)}>ImageThree</li>
          <li onClick={() => viewThis(3)}>ImageFour</li>
        </ul>
        <div className="hamburger" onClick={openMenu}>
          <GiHamburgerMenu />
        </div>
      </div>
      <div className="resnav" style={{ height: height }}>
        <ul>
          <li onClick={() => viewThis(0)}>ImageOne</li>
          <li onClick={() => viewThis(1)}>ImageTwo</li>
          <li onClick={() => viewThis(2)}>ImageThree</li>
          <li onClick={() => viewThis(3)}>ImageFour</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
