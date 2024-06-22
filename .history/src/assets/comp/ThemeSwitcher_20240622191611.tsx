import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

const ThemeSwitcher=()=>{
    const [theme,setTheme] =useState<string>("")
    const resetTheme = ()=>{
        setTheme("")
    }
    const themevalue = theme ? theme.toLowerCase():"secondary"
    return(
        <>
        {/* <div
        className={`text-capitalize h1 mb-4 w-100 text-center text-${themevalue}`}
      >
        {
            `${theme || "DEFAULT"} Theme`
        }
      </div>
      <div className="btn-group">
        <button className={`text-capitalize btn btn-${themevalue} btn-lg"`} type="button">
          {theme ? theme + " theme" : "Choose Theme"}
        </button>
 
          <button
          type="button"
          className={`btn btn-lg btn-${themevalue} dropdown-toggle dropdown-toggle-split`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
            <span className=""  ></span>
            <span className="visually-hidden">Toggle Dropdown</span>

            </button>
            <div className="dropdown-menu">
                <a  className="dropdown-item"  onClick={()=>setTheme("primary")}>
                    Primary Theme 
                </a>
                <a className="dropdown-item" onClick={() => setTheme("danger")}>
            Danger Theme
          </a>
          <a
            className="dropdown-item" onClick={() => setTheme("success")}>
            Success Theme
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#" onClick={() => resetTheme()}>
            Default Theme
          </a>
        </div>
               </div> */}
               <div className="mb-2" >
                <Dropdown></Dropdown>
               </div>
        </>
    )
}
export default ThemeSwitcher;