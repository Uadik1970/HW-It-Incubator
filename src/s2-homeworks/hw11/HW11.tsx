import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'


/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// function valuetext(value: number) {
//     return `${value}°C`;
// }

// const minDistance = 10;

// const [value1, setValue1] = React.useState<number[]>([20, 37]);

// const handleChange1 = (
//     event: Event,
//     newValue: number | number[],
//     activeThumb: number,
// ) => {
//     if (!Array.isArray(newValue)) {
//         return;
//     }

//     if (activeThumb === 0) {
//         setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
//     } else {
//         setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
//     }
// };


// return (
//     <Box sx={{ width: 300 }}>
//         <Slider
//             getAriaLabel={() => 'Minimum distance'}
//             value={value1}
//             onChange={handleChange1}
//             valueLabelDisplay="auto"
//             // getAriaValueText={valuetext}
//             disableSwap
//         />
//     </Box>
// );




function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number[]>('hw11-value2', [0, 100]))
    const minDistance = 1;
    const change = (event: Event, value: number | number[]) => { //umber | number[]
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
        setValue1(value as number)
    }

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            // return;
            return setValue1(newValue)
        }

        if (activeThumb === 0) {
            setValue1(newValue[0])
            setValue2([Math.min(newValue[0], value2[1] - minDistance), value2[1]]);
        } else {
            setValue2([value2[0], Math.max(newValue[1], value2[0] + minDistance)]);
        }
    }
    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>
            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            onChange={change}
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={value2}
                            onChange={handleChange1}
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HW11
