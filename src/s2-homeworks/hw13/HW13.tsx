import React, { useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')

        axios
            .post(url, { success: x })
            .then((res) => {
                setCode('Код 200!')
                setImage(success200)
                // дописать
                setText(res.data.errorText)
                setInfo(res.data.info)
            })
            .catch((err) => {
                // дописать
                setInfo('')
                console.log(err)
                switch (err.response.status) {
                    case 400: {

                        // setInfo(err.data.info)
                        setCode('Код 400!')

                        setImage(error400)
                        // console.log(err.response.data.errorText);
                        // console.log(err.response.data.info);

                        setInfo(err.response.data.info)
                        setText(err.response.data.errorText)
                    }
                        break
                    case 500: {
                        console.log(err.response.status)
                        setCode('Код 500!')
                        setImage(error500)
                        setInfo(err.response.data.info)
                        setText(err.response.data.errorText)
                    } break
                    // case 0: {
                    //     setCode('Error!')
                    //     setImage(errorUnknown)
                    //     setInfo(err.response.data.info)
                    //     setText(err.response.data.errorText)
                    // }
                    default:


                        setCode('ERROR!')
                        setImage(errorUnknown)
                        // setInfo("AxiosError")
                        // setText("Network Error")
                        setText(err.message)
                        setInfo(err.name)
                }
            })
    }

    const isLoading = '...loading'
    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        // дописать
                        disabled={info === isLoading}
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        // дописать
                        disabled={info === isLoading}

                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        // дописать
                        disabled={info === isLoading}
                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                        xType={'secondary'}
                        // дописать
                        disabled={info === isLoading}
                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status" />}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13
