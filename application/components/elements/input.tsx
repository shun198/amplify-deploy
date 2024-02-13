import { HTMLInputTypeAttribute } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

type Props= {
    id:string,
    placeholder: string
    type?: HTMLInputTypeAttribute
    register:UseFormRegisterReturn
}

export const Input = ({id,placeholder,type,register}:Props) => {
    return(
        <>
        <input
          id={id}
          placeholder={placeholder}
          type={type}
          {...register} 
        />
      </>
    )
}
