import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DrawerSubmenu from "./DrawerSubmenu";
import { CSSTransition } from "react-transition-group";


export default function DrawerMenu(props: { data: any, label: string, single?: boolean }) {

    const [isOpen, setOpen] = useState(props.single ? true : false);

    let rooms = props.data.Rooms;
    let comps_room = Object.values(rooms).map((room_data,index)=> <DrawerSubmenu label={`Room ${index+1}`} data={room_data}></DrawerSubmenu>)

    let carriers = props.data.Carriers;
    let comps_carrier = Object.values(carriers).map((carrier_data,index)=> <DrawerSubmenu label={`Carrier ${index+1}`} data={carrier_data}></DrawerSubmenu>)

    let shelves = props.data.Shelves;
    let comps_shelve = Object.values(shelves).map((carrier_data,index)=> <DrawerSubmenu label={`Shelve ${index+1}`} data={carrier_data}></DrawerSubmenu>)


    const clickHandler = () => {
        if (!props.single) {
            setOpen(!isOpen);
        }
    }

    return (
        <div className="drawer-menu">
            {/* Menu heading */}
            <div className="drawer-menu-heading-wrapper" onClick={clickHandler}>
                <div className="drawer-menu-heading">{props.label}</div>
                {!props.single && <FontAwesomeIcon className={`drawer-menu-icon ${isOpen ? 'rotated-180' : ''}`} icon={faAngleDown} ></FontAwesomeIcon>}
            </div>

            {/* Menu content */}
            <CSSTransition
                in={isOpen}
                classNames='drawer-menu-panel'
                timeout={150}
                unmountOnExit>
                <div className='drawer-menu-panel' >
                    {comps_room}
                    {comps_carrier}
                </div>
            </CSSTransition>

        </div>
    )

}