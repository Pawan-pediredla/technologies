import React from "react";
import { useState } from "react";
const ThemeSwitcher=()=>{
    const [theme,setTheme] =useState<string>("")
    const resetTheme = ()=>{
        setTheme("")
    }
    const themevalue = theme ? theme.toLowerCase():"secondary"
    return(
        <>
        <div
        className={`text-capitalize h1 mb-4 w-100 text-center text-${themeClass}`}
      >
        {
            `${theme || "DEFAULT"} Theme1
        }
      </div>
        </>
    )
}
export default ThemeSwitcher;