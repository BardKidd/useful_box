import {} from "react";
import styled from "styled-components";

const DARK_GRAY = "#333333";
const LIGHT_GRAY = "#f7f7f7";
const TRANSPARENT = "transparent";
const WHITE = "#FFFFFF";
const GREEN = "#16a085";
const YELLOW = "#f1c40f";
const RED = "#e84118";
const BLUE = "#3498db";

//* 定義 colorMapper 的屬性內容
interface colorType {
  [key: string]: {
    font: string;
    background: string;
    hoverBackground?: string;
    hoverFont?: string;
  };
}
const colorMapper: colorType = {
  yellow: {
    font: WHITE,
    background: YELLOW,
  },
  white: {
    font: DARK_GRAY,
    background: WHITE,
  },
  red: {
    font: WHITE,
    background: RED,
  },
  blue: {
    font: WHITE,
    background: BLUE,
  },
  black: {
    font: WHITE,
    background: DARK_GRAY,
  },
  transparent: {
    font: DARK_GRAY,
    background: TRANSPARENT,
    hoverBackground: "#D9D9D9",
  },
  transparentInModal: {
    font: LIGHT_GRAY,
    background: TRANSPARENT,
    hoverFont: DARK_GRAY,
    hoverBackground: LIGHT_GRAY,
  },
  green: {
    font: LIGHT_GRAY,
    background: GREEN,
  },
  auto: {
    font: LIGHT_GRAY,
    background: TRANSPARENT,
  },
};

// const sizeMapper = {
//   small: {
//     width:
//   }
// }

const getColoring = (color: string) => {
  if (typeof color !== "string") return;
  return colorMapper[color] || colorMapper.black;
};

//* 定義傳入的 color 有哪些屬性
interface propsColor {
  color: {
    background: string;
    font: string;
    hoverBackground?: string;
    hoverFont?: string;
  };
}

const Button: React.FC = styled.button`
  font-size: 1rem;
  line-height: 2;
  transition: 0.3s ease all;
  padding: 0.4rem 0.6rem;
  min-height: 2.5rem;
  border-radius: 5px;
  cursor: pointer;
  width: 180px;
  color: ${(props: propsColor) => props.color.font};
  background-color: ${(props: propsColor) => props.color.background};
  border: 1px solid ${(props: propsColor) => props.color.background};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover {
    color: ${(props: propsColor) => props.color.hoverFont || props.color.font};
    background-color: ${(props: propsColor) =>
      props.color.hoverBackground || props.color.background};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &:focus {
    box-shadow: none;
    outline: unset;
  }
`;

export default function ButtonComponent(props: any) {
  return (
    <Button
      {...props}
      type={props.type || "button"}
      color={getColoring(props.color) || "transparent"}
    >
      {props.children}
    </Button>
  );
}
