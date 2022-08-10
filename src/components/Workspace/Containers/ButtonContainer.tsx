import React, { FC, useState } from 'react';
import './Container.sass';

import {
    updateValueInBlock,
    updateActiveBlock
} from '../../../store/workSpaceSlice/workSpaceSlice'

import { useAppDispatch } from '../../../store/hooks';
import { Block } from '../../../interfaces/Block';

import Navbar from './Navbar/Navbar';
import { buttonImg } from '../../../const/images';



const ButtonContainer: FC<Block> = ({ id, active }) => {

    const [buttonName, setButtonName] = useState('');

    const dispatch = useAppDispatch();

    const handleButtonNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setButtonName(e.target.value);
    }

    return (
        <>
            {active
                ? <div className='containerActive' >

                    <Navbar id={id} />

                    <img src={buttonImg} alt="Button" />
                    <p>Button</p>

                    <div className='inputWrapper'>
                        <input type="text"
                            onChange={(e) => handleButtonNameInput(e)}
                            placeholder='Enter name your button'
                        />
                        <button onClick={() => dispatch(updateValueInBlock({ id, value: buttonName }))}>+</button>
                    </div>

                </div>

                : <div className='container' onClick={() => dispatch(updateActiveBlock(id))}>

                    <img src={buttonImg} alt="Button" />
                    <p>Button</p>

                </div>
            }

        </>
    )
}

export default ButtonContainer;