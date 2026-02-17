import { useState } from 'react'

export const CustomForm = ({ style, data }) => {

  console.log('🚀 ~ data:', data);

  const [formData, setFormData] = useState(
    data.reduce((acc, curr) => {
      acc[curr.name] = ""
      return acc
    }, {})
  )

  console.log('🚀 ~ formData:', formData);

  return (
    <form action="" style={style}>
      {
        data.map((items, index) => {
          return (
            <div key={index}>
              <label htmlFor={items.id}>
                {items.name}
              </label>

              <input
                id={items.id}
                type={items.type}
                placeholder={items.placeholder}
                name={items.name}
              />
            </div>
          )
        })
      }

      <button>submit / register</button>
    </form>
  )
}
