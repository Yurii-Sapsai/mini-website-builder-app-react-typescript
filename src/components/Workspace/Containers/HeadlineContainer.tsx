import React, { FC, useState } from 'react';
import './Container.sass';

import {
    updateValueInBlock,
    updateActiveBlock
} from '../../../store/workSpaceSlice/workSpaceSlice';

import { useAppDispatch } from '../../../store/hooks';
import { IBlock } from '../../../interfaces/IBlock';

import Navbar from './Navbar/Navbar';
import { headlineImg } from '../../../const/images';



const HeadlineContainer: FC<IBlock> = ({ id, active }) => {

    const [headline, setHeadline] = useState('');

    const dispatch = useAppDispatch();

    const handleHeadlineInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeadline(e.target.value);
    }
    return (
        <>
            {active
                ? <div className='containerActive' >

                    <Navbar id={id} />

                    <img src={headlineImg} alt="headline" />
                    <p>Headline</p>

                    <div className='inputWrapper'>
                        <input type="text"
                            onChange={(e) => handleHeadlineInput(e)}
                            placeholder='Enter your headline'
                        />
                        <button onClick={() => dispatch(updateValueInBlock({ id, value: headline }))}>+</button>
                    </div>

                </div>
                : <div className='container' onClick={() => dispatch(updateActiveBlock(id))}>

                    <img src={headlineImg} alt="headline" />
                    <p>Headline</p>

                </div>
            }
        </>
    )
}

export default HeadlineContainer;