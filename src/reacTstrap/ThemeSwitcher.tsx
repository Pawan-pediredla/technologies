import React, { useState } from "react";
import {

    Dropdown,DropdownToggle,DropdownItem,DropdownMenu
} from "reactstrap"
const ThemeSwitch= ()=>{
   const [theme,setTheme] =useState<string>("")
   const [dropdownOpen,setDropdownOpen] =useState<boolean>(false)
   const resetTheme =()=>{
    setTheme("")
   }
    return(
        <>
        <div className="mb-2"  >
            <div className={`text-capitalize h1 mb-4 w-100 text-center text-${theme  ? theme.toLowerCase() :"secondary" } `} >
              {
                `${theme  || "DEFAULT"} THEME` }</div>
                
                <div className="d-flex justify-content-center p-5">
                <Dropdown
          isOpen={dropdownOpen}
          toggle={() => setDropdownOpen(!dropdownOpen)}
        >
              <DropdownToggle color={theme} caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setTheme("primary")}>
              Primary Theme
            </DropdownItem>
            <DropdownItem onClick={() => setTheme("danger")}>
              Danger Theme
            </DropdownItem>
            <DropdownItem onClick={() => setTheme("success")}>
              Success Theme
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={resetTheme}>Default Theme</DropdownItem>
          </DropdownMenu>
</Dropdown>
                </div></div></>
    )
}
export default ThemeSwitch