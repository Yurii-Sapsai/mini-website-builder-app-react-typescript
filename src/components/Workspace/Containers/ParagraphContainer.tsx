import React, { FC, useState } from 'react'
import './Container.sass';

import {
    updateActiveBlock,
    updateValueInBlock
} from '../../../store/workSpaceSlice/workSpaceSlice';

import { useAppDispatch } from '../../../store/hooks';
import { IBlock } from '../../../interfaces/IBlock';

import Navbar from './Navbar/Navbar';
import { paragraphImg } from '../../../const/images';



const ParagraphContainer: FC<IBlock> = ({ id, active }) => {

    const [paragraph, setParagraph] = useState('');

    const dispatch = useAppDispatch();

    const handleParagraphInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParagraph(e.target.value);
    }

    return (
        <>
            {active
                ? <div className='containerActive' >

                    <Navbar id={id} />

                    <img src={paragraphImg} alt="paragraph" />
                    <p>Paragraph</p>

                    <div className='inputWrapper'>
                        <input type="text"
                            onChange={(e) => handleParagraphInput(e)}
                            placeholder='Enter your text'
                        />
                        <button onClick={() => dispatch(updateValueInBlock({ id, value: paragraph }))}>+</button>
                    </div>

                </div>
                : <div className='container' onClick={() => dispatch(updateActiveBlock(id))}>

                    <img src={paragraphImg} alt="paragraph" />
                    <p>Paragraph</p>

                </div>
            }
        </>
    )
}

export default ParagraphContainer;
