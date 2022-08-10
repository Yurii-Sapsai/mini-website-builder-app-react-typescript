import { FC } from 'react';

import { useAppDispatch } from '../../../../store/hooks';
import {
    cloneBlock,
    moveBlockDown,
    moveBlockUp,
    removeBlock
} from '../../../../store/workSpaceSlice/workSpaceSlice';

import { trashImg, cloneImg, arrorDownImg, arrorUpImg } from '../../../../const/images';



const Navbar: FC<{ id: string }> = ({ id }) => {

    const dispatch = useAppDispatch();

    return (
        <div className='navbar'>
            
            <div className='wrapper-1'>
                <img src={arrorDownImg} onClick={() => dispatch(moveBlockDown(id))} />
                <img src={arrorUpImg} onClick={() => dispatch(moveBlockUp(id))} />
            </div>
            <div className='wrapper-2'>
                <img src={cloneImg} onClick={() => dispatch(cloneBlock(id))} />
                <img src={trashImg} onClick={() => dispatch(removeBlock(id))} />
            </div>

        </div>
    )
}

export default Navbar;