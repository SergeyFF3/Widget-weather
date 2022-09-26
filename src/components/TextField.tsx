import React from "react"
import {TextField} from "@mui/material"
import {ErrorMessage, useFormikContext} from "formik";

type TextFieldDefaultT = {
    id: string;
    placeholder: string;
} & Pick<HTMLDivElement, 'className'>;

export const TextFieldDefault: React.FC<TextFieldDefaultT> = ({id, placeholder, className}): JSX.Element => {
    const {handleChange, handleBlur, values} = useFormikContext()

    return <>
        <TextField
            name={id}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            value={values[id]}
            size="small"
            className={className ?? ''}
            fullWidth
        />
        <ErrorMessage name={id} className="mb-3"/>
    </>
}

export default TextFieldDefault