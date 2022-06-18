import { createContext, useReducer } from "react";

export const MyContext = createContext({});

const initialState = {
  header: "標題",
  content: "內文",
  footer: "結尾",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_HEADER": {
      return {
        ...state,
        header: action.payload,
      };
    }
  }
};

const CommonCardContextProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setHeader = (header: string) => {
    dispatch({ type: "SET_HEADER", payload: header });
  };

  const allProviderAttr: any = {};
  allProviderAttr["state"] = state;
  allProviderAttr["dispatch"] = dispatch;
  allProviderAttr["setHeader"] = setHeader;

  return (
    <MyContext.Provider value={allProviderAttr}>{children}</MyContext.Provider>
  );
};

export default CommonCardContextProvider;
