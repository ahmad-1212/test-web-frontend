import { createContext, useContext, useReducer } from "react";

const SearchResultContext = createContext({});

const initialState = {
  searchResults: [],
  selectedData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      console.log(action.payload);
      return {
        ...state,
        searchResults: action.payload,
        dataLength: action.payload.length,
      };
    case "SET_SELECTED_DATA_LENGTH":
      return {
        ...state,
        selectedDataLength: action.payload,
      };
    case "SET_SELECTED_DATA":
      return {
        ...state,
        selectedData: action.payload,
      };
    default:
      return state;
  }
};

const SearchResultContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const setData = (data) => {
    console.log(data);
    dispatch({ type: "SET_SEARCH_RESULTS", payload: data });
  };

  return (
    <SearchResultContext.Provider value={{ setData, state }}>
      {children}
    </SearchResultContext.Provider>
  );
};

const useSearchResultContext = () => {
  const context = useContext(SearchResultContext);
  if (context === undefined)
    throw Error("Search Result context is used outside the provider");

  return context;
};

export { SearchResultContextProvider, useSearchResultContext };
