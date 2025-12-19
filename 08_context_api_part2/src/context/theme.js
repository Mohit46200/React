// is file mai humne 07... ka part 1 aur part 2 do file ka kaam ek hi mai kra hai
import { createContext ,useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: function(){},
    lightTheme: function(){}
})

export const ThemeProvider= ThemeContext.Provider


export default function useTheme() {
    return useContext(ThemeContext)
}