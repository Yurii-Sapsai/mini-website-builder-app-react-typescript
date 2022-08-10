import { FC } from 'react';
import './Workspace.sass';

import { useAppSelector } from '../../store/hooks';

import HeadlineContainer from './Containers/HeadlineContainer';
import ParagraphContainer from './Containers/ParagraphContainer';
import ButtonContainer from './Containers/ButtonContainer';
import ImageContainer from './Containers/ImageContainer';



const Workspace: FC = () => {

    const store = useAppSelector((state) => state.workSpace);

    return (
        <div className='workspaceWrapper'>

            {store.blocks.map((block) => {

                switch (block.type) {
                    case 'image':
                        return (
                            <ImageContainer
                                key={block.id}
                                id={block.id}
                                type={block.type}
                                value={block.value}
                                active={block.active}
                            />
                        )
                    case 'headline':
                        return (
                            <HeadlineContainer
                                key={block.id}
                                id={block.id}
                                type={block.type}
                                value={block.value}
                                active={block.active}
                            />
                        )
                    case 'paragraph':
                        return (
                            <ParagraphContainer
                                key={block.id}
                                id={block.id}
                                type={block.type}
                                value={block.value}
                                active={block.active}
                            />
                        )
                    case 'button':
                        return (
                            <ButtonContainer
                                key={block.id}
                                id={block.id}
                                type={block.type}
                                value={block.value}
                                active={block.active}
                            />
                        )
                    default:
                        return (<></>)
                }
            })}

        </div>
    )
}

export default Workspace;

