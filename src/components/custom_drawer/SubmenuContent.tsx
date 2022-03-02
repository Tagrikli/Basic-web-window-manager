import { faAngleLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "../form_items/Switch";
import Textbox from "../form_items/Textbox";

export default function SubmenuContent(props: { onClose: () => void, data: any, label: string }) {




    const fields = Object.entries(props.data).map(([name, value]) => {

        if (typeof (value) === 'string') {
            return <Textbox defaultValue={value as string} onChange={() => { }} label={name} />
        } else if (typeof (value) === 'boolean') {
            return <Switch defaultValue={value} onChange={() => { }} label={name} />
        }

    })


    return (
        <div className='submenu-content' >
            <div className="submenu-content-header-wrapper" onClick={() => props.onClose()}>
                <FontAwesomeIcon icon={faAngleLeft} className='submenu-content-icon'></FontAwesomeIcon>
                <div className="submenu-content-header" >{props.label}</div>
            </div>
            <div className="submenu-content-content">
                {fields}
            </div>

        </div>
    )




}