import { FC } from 'react';
import './BlockList.sass';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch } from '../../store/hooks';
import { addBlockToWorkSpace } from '../../store/workSpaceSlice/workSpaceSlice';

import { headlineImg, paragraphImg, buttonImg, imageImg } from '../../const/images';



const BlockList: FC = () => {

    const dispatch = useAppDispatch();

    const image = {
        type: 'image',
        value: '',
        active: false
    }

    const headline = {
        type: 'headline',
        value: '',
        active: false
    }

    const paragraph = {
        type: 'paragraph',
        value: '',
        active: false
    }

    const button = {
        type: 'button',
        value: '',
        active: false
    }

    const addImage = (image: { type: string, value: string, active: boolean }) => {
        dispatch(addBlockToWorkSpace({ ...image, id: uuidv4() }));
    }

    const addHeadline = (headline: { type: string, value: string, active: boolean }) => {
        dispatch(addBlockToWorkSpace({ ...headline, id: uuidv4() }));
    }

    const addParagraph = (paragraph: { type: string, value: string, active: boolean }) => {
        dispatch(addBlockToWorkSpace({ ...paragraph, id: uuidv4() }));
    }

    const addButton = (button: { type: string, value: string, active: boolean }) => {
        dispatch(addBlockToWorkSpace({ ...button, id: uuidv4() }));
    }

    return (
        <div className='blockListWrapper'>

            <div className='buttonContainer' onClick={() => addHeadline(headline)}>
                <img src={headlineImg} alt="headline" />
                <p>Headline</p>
            </div>
            <div className='buttonContainer' onClick={() => addParagraph(paragraph)}>
                <img src={paragraphImg} alt="paragraph" />
                <p>Paragraph</p>
            </div>
            <div className='buttonContainer' onClick={() => addButton(button)}>
                <img src={buttonImg} alt="button" />
                <p>Button</p>
            </div>
            <div className='buttonContainer' onClick={() => addImage(image)}>
                <img src={imageImg} alt="headline" />
                <p>Image</p>
            </div>


        </div>
    )
}

export default BlockList;