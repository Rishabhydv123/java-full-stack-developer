import { CustomForm } from './Customform'

export const Form = () => {

  const style = {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    gap: "10px",
    width: "30%",
    margin: "auto"
  }

  const dataForm = [
    {
      id: "name",
      type: "text",
      placeholder: "Enter your name",
      name: "name"
    },
    {
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      name: "email"
    },
    {
      id: "password",
      type: "password",
      placeholder: "Enter your passwprd",
      name: "passwprd"
    },
    {
      id: "phone",
      type: "tel",
      placeholder: "Enter your phone",
      name: "phone"
    },
    {
      id: "address",
      type: "textarea",
      placeholder: "Enter your address",
      name: "address"
    },
    
  ]

  return (
    <CustomForm style={style} data={dataForm} />
  )
}
