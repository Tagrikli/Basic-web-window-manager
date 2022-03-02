import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faDashboard, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Draggable(props: { children?: any }) {
    return (
        <>
            <div className="panel-handle">
                <div className="action-icon-group">
                    {/* <FontAwesomeIcon className="action-icon" icon={faSquare} /> */}
                    <FontAwesomeIcon className="action-icon" icon={faTimes} />
                </div>
            </div>
            <div className="panel-content">{props.children}</div>
        </>
    );
}
