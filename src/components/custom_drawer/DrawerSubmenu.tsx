import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SubmenuContent from "./SubmenuContent";
import { CSSTransition } from 'react-transition-group';


export default function DrawerSubmenu(props: { data: any, label: string }) {

    const [isOpen, setOpen] = useState(false);

    return (
        <div className="drawer-submenu" >
            {/* Submenu heading */}
            <div className="drawer-submenu-heading-wrapper" onClick={() => setOpen(true)}>
                <div className="drawer-submenu-heading" >{props.label}</div>
                <FontAwesomeIcon icon={faAngleRight} className='drawer-submenu-icon'></FontAwesomeIcon>
            </div>

            {/* Submenu content (opens from right as a drawer) */}
            <CSSTransition
                in={isOpen}
                timeout={200}
                classNames='submenu-content'
                unmountOnExit
            >
                <SubmenuContent onClose={() => setOpen(false)} data={props.data} label={props.label}></SubmenuContent>
            </CSSTransition>
        </div>
    )

}