import { LoginDataType } from "@/types"
import { HTMLInputTypeAttribute } from "react"
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form"

type Props= {
    id:string,
    placeholder: string
    type?: HTMLInputTypeAttribute
    register:UseFormRegisterReturn
    errors: FieldErrors<LoginDataType>

}

export const Input = ({id,placeholder,type,register,errors}:Props) => {
    return(
        <>
        <input
          id={id}
          placeholder={placeholder}
          type={type}
          {...register} 
        />
          {errors.employee_number?.message && <div>{errors.employee_number.message}</div>}
      </>
    )
}
