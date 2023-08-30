import React from 'react'

const CheckBox = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      onChange(value, !isChecked);
    };

  return (
    <>
       <label>
            <input
                type="checkbox"
                value={value}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
        {value}
        </label>
    </>
  )
}

export default CheckBox
