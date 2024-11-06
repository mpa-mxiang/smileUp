import React from 'react'
import "./FaceGrid.css";
import Img from "../imgs/stay.jpg";
function FaceGrid() {
    return (
        <div className='grid grid-cols-3'>
            <div>
                <img src={Img} />
            </div>
            <div>
                <img src={Img} />
            </div>
            <div>
                <img src={Img} />
            </div>
            <div>
                <img src={Img} />
            </div>
            <div>
                <img src={Img} />
            </div>
            <div>
                <img src={Img} />    </div>
            <div>
                <img src={Img} />    </div>
            <div>
                <img src={Img} />    </div>
            <div>
                <img src={Img} />    </div>
        </div>

    )
}

export default FaceGrid
