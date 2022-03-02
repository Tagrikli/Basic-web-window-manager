import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function Textbox(props: { defaultValue: string, onChange: (value: string) => void, label: string }) {

    const [value, setValue] = useState(props.defaultValue);
    const [isDisabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(value === props.defaultValue);

    }, [value])

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setValue(ev.target.value);
    }

    return (
        <div className="form-item">
            <div className="form-item-label">{props.label}</div>

            <div className="form-input-wrapper">
                <input type='text' className="form-item-input" onChange={onChange} value={value} />

                <div className="form-icons-wrapper">
                    <FontAwesomeIcon icon={faCheck} onClick={() => props.onChange(value)} className={isDisabled ? 'fa-icon-disabled' : ''}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTimes} onClick={() => setValue(props.defaultValue)} className={isDisabled ? 'fa-icon-disabled' : ''}></FontAwesomeIcon>
                </div>
            </div>

        </div>
    )


}