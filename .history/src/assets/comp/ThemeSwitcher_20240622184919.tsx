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
        <button className={`text-capitalize btn btn-${themevalue} btn-lg"`} type="button">
          {theme ? theme + " theme" : "Choose Theme"}
        </button>
        </div>
          <button
          type="button"
          className={`btn btn-lg btn-${themevalue} dropdown-toggle dropdown-toggle-split`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
            </button>
        </>
    )
}
export default ThemeSwitcher;