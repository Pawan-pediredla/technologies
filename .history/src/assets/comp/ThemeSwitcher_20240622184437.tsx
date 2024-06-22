import React from "react";
import { useState } from "react";
const ThemeSwitcher=()=>{
    const [theme,setTheme] =useState<string>("")
    const themevalue = theme ? theme.toLowerCase():"secondary"
    return(
        <>

        </>
    )
}
export default ThemeSwitcher;