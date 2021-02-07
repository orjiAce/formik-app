import React from "react";
import MyInputStyle from '../styles/InputStyle.module.scss'

//custom input component
export default function Input({
    input,
                                  inputWrap,
                                  icon,
                                  inputId,
                                  label,
                                  iconStyle
                              }) {
    return (
        <div className={MyInputStyle.inputStyle}>
            <div className={MyInputStyle.inputLabelStyle}>
                {label}
            </div>

            <div className={MyInputStyle.inputWrap}>
                <div className={MyInputStyle.iconStyle}>
                    {icon}
                </div>

                {input}
            </div>
        </div>
    );
}
