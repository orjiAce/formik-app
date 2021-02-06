import React from "react";
import MyInputStyle from '../styles/InputStyle.module.scss'

export default function Input({
                                  inputWrap,
                                  type,
                                  icon,
                                  placeholder,
                                  inputName,
                                  value,
                                  inputId,
                                  onChange,
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
                <input
                    className={MyInputStyle.input}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    id={inputId}
                    name={inputName}
                    {...props}
                />
            </div>
        </div>
    );
}
