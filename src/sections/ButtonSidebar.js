import React from "react";
import SideBar from "./sidebar/Sidebar";
import {bool, func } from 'prop-types';

const ButtonSidebar = ({ open, setOpen }) => {
    return (
        <>
        <SideBar
        open={open}
        onClick={() => setOpen(!open)}
        />
        </>
    );
}

ButtonSidebar.prototype = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default ButtonSidebar;