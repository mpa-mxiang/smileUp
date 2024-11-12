import React, { useMemo } from 'react';
import "./FaceGrid.css";
import Img1 from "../imgs/pic1.jpg";
import Img2 from "../imgs/pic2.jpg";
import Img3 from "../imgs/pic3.jpg";
import Img4 from "../imgs/pic4.jpg";
import Img5 from "../imgs/pic5.jpg";
import Img6 from "../imgs/pic6.jpg";
import Img7 from "../imgs/pic7.jpg";
import Img8 from "../imgs/pic8.jpg";
import Img9 from "../imgs/pic9.jpg";

function FaceGrid() {
    const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];

    const shuffledImages = useMemo(() => images
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value), [images]);

    return (
        <div className='grid grid-cols-3 w-full'>
            {shuffledImages.map((img, index) => (
                <div key={index}>
                    <img src={img} alt={`face-${index}`} />
                </div>
            ))}
        </div>
    );
}

export default FaceGrid;
