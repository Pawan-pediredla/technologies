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
        <div></div>

        </>
    )
}
export default ThemeSwitcher;