import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import "./FaceGrid.css";
import FaceStorage from '../FaceStorage';

const NUM_NEUTRAL_FACES = 8;
const NUM_SMILING_FACES = 1;

function FaceGrid() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const shuffledImages = useMemo(() => {
        const shuffledNeutralFaces = FaceStorage.neutral.sort(() => 0.5 - Math.random());
        const chosenNeutralFaces = shuffledNeutralFaces.slice(0, NUM_NEUTRAL_FACES);

        const shuffledSmilingFaces = FaceStorage.smiling.sort(() => 0.5 - Math.random());
        const chosenSmilingFaces = shuffledSmilingFaces.slice(0, NUM_SMILING_FACES);

        return [...chosenNeutralFaces, ...chosenSmilingFaces]
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }, [FaceStorage.smiling, FaceStorage.neutral]);

    const handleImageClick = (index) => {
        setSelectedIndex(index === selectedIndex ? null : index);
    };

    return (
        <div className='grid grid-cols-3 w-full text-center'>
            {shuffledImages.map((img, index) => {
                const selected = index === selectedIndex;
                const smileCheck = shuffledImages[index].isSmiling;
                
                console.log(`Rendering index ${index}`, { selected, smileCheck });

                // https://medium.com/2359media/why-react-classnames-is-a-lifesaver-and-how-you-should-use-it-if-you-arent-already-b25a44ed5603
                const classes = classNames('cursor-pointer p-2', {
                    'border-4': selected,
                    'border-green-500': smileCheck,
                    'border-red-500': !smileCheck,
                });
                return <div
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={classes}
                >
                    <img src={img.image} alt={`face-${index}`} className="w-full" />
                </div>
            })}

            <button className='left-full relative' type='submit'>Submit!</button>
        </div>
    );
}

export default FaceGrid;
