import React, { FC } from 'react';
import './Container.sass';

import {
    updateActiveBlock,
    updateValueInBlock
} from '../../../store/workSpaceSlice/workSpaceSlice';

import { useAppDispatch } from '../../../store/hooks';
import { IBlock } from '../../../interfaces/IBlock';

import Navbar from './Navbar/Navbar';
import { imageImg } from '../../../const/images';



const ImageContainer: FC<IBlock> = ({ id, active }) => {

    const dispatch = useAppDispatch();

    const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const element = e.currentTarget as HTMLInputElement;
        let fileList: FileList | null = element.files;
        if (fileList) {
            dispatch(updateValueInBlock({ id, value: URL.createObjectURL(fileList[0]) }));
        }

    }

    return (
        <>
            {active
                ? <div className='containerActive' >

                    <Navbar id={id} />

                    <img src={imageImg} alt="Image" />
                    <p>Image</p>

                    <input type="file" onChange={(e) => handleImageInput(e)} />

                </div>

                : <div className='container' onClick={() => dispatch(updateActiveBlock(id))}>

                    <img src={imageImg} alt="Image" />
                    <p>Image</p>

                </div>
            }
        </>
    )
}

export default ImageContainer;