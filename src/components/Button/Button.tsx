import {} from "react";
import styled from "styled-components";

const DARK_GRAY = "#333333";
const LIGHT_GRAY = "#f7f7f7";
const TRANSPARENT = "transparent";
const WHITE = "#FFFFFF";
const GREEN = "#00A99D";
const YELLOW = "#ffc90b";

const colorMapper: colorType = {
  yellow: {
    font: WHITE,
    background: YELLOW,
  },
  white: {
    font: DARK_GRAY,
    background: WHITE,
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

interface colorType {
  [key: string]: {
    font: string;
    background: string;
    hoverBackground?: string;
    hoverFont?: string;
  };
}
const getColoring = (color: string) => {
  if (typeof color !== "string") return;
  return colorMapper[color] || colorMapper.black;
};

interface propsColor {
  color: {
    background: string;
    font: string;
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
  color: ${(props: propsColor) => props.color.font};
  background-color: ${(props: propsColor) => props.color.background};
  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
  }
`;

export default function ButtonComponent(props: any) {
  return (
    <Button
      {...props}
      type={props.type || "button"}
      color={getColoring(props.color)}
    >
      {props.children}
    </Button>
  );
}
