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
          <Button onClick={() => alert("Hello!")}>View Detail</Button>
        </CardWrapper>
      </CardProvider>
    </>
  );
};

export default CommonCard;
