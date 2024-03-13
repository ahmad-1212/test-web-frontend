import { SearchResultContextProvider } from "../context/SearchResultContext";
import ReactQueryProvider from "./ReactQueryProvider";

const Providers = ({ children }) => {
  return (
    <ReactQueryProvider>
      <SearchResultContextProvider>{children}</SearchResultContextProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
