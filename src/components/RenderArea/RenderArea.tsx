import { FC } from 'react';
import './RenderArea.sass';

import { useAppSelector } from '../../store/hooks';

const RenderArea: FC = () => {

  const store = useAppSelector((state) => state.workSpace);

  return (
    <div className='renderAreaWrapper'>

      {store.blocks.map((block) => {
        if (block.type === 'image' && block.value) {
          return (
            <img src={block.value} key={block.id} />
          )
        }
        if (block.type === 'headline' && block.value) {
          return (
            <h1 key={block.id}>{block.value}</h1>
          )
        }
        if (block.type === 'paragraph' && block.value) {
          return (
            <p key={block.id}>{block.value}</p>
          )
        }
        if (block.type === 'button' && block.value) {
          return (
            <button key={block.id}>{block.value}</button>
          )
        }
      })}

    </div>
  )
}

export default RenderArea;