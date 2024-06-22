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
            `${theme || "DEFAULT"} Theme`
        }
      </div>
      <div className="btn-group">
        <button className={`text-capitalize btn btn-${themeClass} btn-lg"`} type="button">
          {theme ? theme + " theme" : "Choose Theme"}
        </button>
        </>
    )
}
export default ThemeSwitcher;