import { createContext, useState } from "react";
export const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [showSearchInput, setShowSearchInput] = useState(false);

    return (
        <SearchContext.Provider value={{ showSearchInput, setShowSearchInput }} >
            {children}
        </SearchContext.Provider>
    )
}