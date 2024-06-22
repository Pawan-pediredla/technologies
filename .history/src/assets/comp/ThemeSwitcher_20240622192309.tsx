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
                <Dropdown as={ButtonGroup}  size={"lg"}>
                    <Button  className="text-capitalize"variant={theme?theme:"secondary"
                    } >
                        {
                            theme ?theme :"DEFAULT"
                        }
                    </Button>
                    <Dropdown.Toggle split variant={theme ?theme :"secondary"} id="dropdown-split-basic"/>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="1 " onClick={()=>setTheme("primary")}>
                            Primary
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={()=>setTheme("secondar")</Dropdown.Menu> >
                            Secondary
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Success
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
               </div>
        </>
    )
}
export default ThemeSwitcher;