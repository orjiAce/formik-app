import React from "react";
import MyInputStyle from '../styles/InputStyle.module.scss'

export default function Input({
    input,
                                  inputWrap,
                                  type,
                                  icon,
                                  placeholder,
                                  inputName,
                                  value,
                                  inputId, onChange,
                                  label,
                                  iconStyle,
                                  ...props
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
