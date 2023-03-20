import React from 'react'
import { Slider, SliderProps } from '@mui/material'

// type SPPT = {
//     callback = () => void
// }

// const callbackHandler = (event) = {
//     props.callback(event)
// }

const SuperRange: React.FC<SliderProps> = (props) => {
    console.log(props);

    return (

        <Slider
            sx={{ // стили для слайдера // пишет студент

            }}


            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
