import { createContext, useContext, useReducer } from "react";

const SearchResultContext = createContext({});

const initialState = {
  searchResults: [],
  selectedData: [],
  selectedDataIds: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.payload,
        dataLength: action.payload.length,
      };
    case "SET_SELECTED_DATA":
      return {
        ...state,
        selectedData: [...state.selectedData, action.payload],
        selectedDataIds: [...state.selectedDataIds, action.payload.id],
      };
    case "REMOVE_SELECTED_DATA": {
      console.log(action.payload);
      const newSelectedData = state.selectedData.filter(
        (data) => data.id !== action.payload
      );
      const newSelectedIds = state.selectedDataIds.filter(
        (slecId) => slecId !== action.payload
      );
      return {
        ...state,
        selectedData: newSelectedData,
        selectedDataIds: newSelectedIds,
      };
    }
    default:
      return state;
  }
};

const SearchResultContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setData = (data) => {
    dispatch({ type: "SET_SEARCH_RESULTS", payload: data });
  };

  const setSelectedData = (data) => {
    dispatch({ type: "SET_SELECTED_DATA", payload: data });
  };

  const removeSelectedData = (id) => {
    console.log(id);
    dispatch({ type: "REMOVE_SELECTED_DATA", payload: id });
  };

  return (
    <SearchResultContext.Provider
      value={{ setData, setSelectedData, removeSelectedData, state }}
    >
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
