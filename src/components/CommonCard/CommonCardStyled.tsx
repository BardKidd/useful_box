import { useContext, useState } from "react";
import { MyContext } from "./CardContextProvider";
import styled from "styled-components";
import * as React from "react";

// const CardWrapper: React.FC<any> = ({ children }) => {
//   return <div className="flex flex-wrap p-1">{children}</div>;
// };
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 8px;
`;

type ContextState = {
  header: string;
  context: string;
  footer: string;
};
type ContextData = {
  state: object;
  dispatch: () => void;
  setHeader: (header: string) => string;
};
const CardHeader: React.FC<any> = () => {
  const contextData = useContext(MyContext) as ContextData;
  const { header } = contextData.state as ContextState;
  const [isChangeShow, setChangeShow] = useState(false);

  const handleSetHeader = (e: React.ChangeEvent<HTMLInputElement>) => {
    contextData.setHeader(e.target.value);
  };
  return (
    <>
      <h2
        className="text-3xl font-bold underline"
        style={{ display: isChangeShow ? "none" : "" }}
        onDoubleClick={() => setChangeShow(true)}
      >
        {header}
      </h2>
      <div style={{ display: isChangeShow ? "" : "none" }}>
        <input value={header} onChange={handleSetHeader} />
        <button onClick={() => setChangeShow(false)}>變更</button>
      </div>
    </>
  );
};

export { CardWrapper, CardHeader };
