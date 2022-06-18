import { useContext, useEffect } from "react";
import { CardWrapper, CardHeader } from "./CommonCardStyled";
import CardProvider from "./CardContextProvider";
import { Button } from "~~components";

const CommonCard = () => {
  return (
    <>
      <CardProvider>
        <CardWrapper>
          <CardHeader></CardHeader>
          <Button color="yellow">點我</Button>
        </CardWrapper>
      </CardProvider>
    </>
  );
};

export default CommonCard;
