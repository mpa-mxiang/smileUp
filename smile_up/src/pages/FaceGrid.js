import React, { useMemo } from 'react';
import "./FaceGrid.css";
import FaceStorage from '../FaceStorage';

function FaceGrid() {
    const shuffledImages = useMemo(() => {
        const NUM_NEUTRAL_FACES = 6;
        const NUM_SMILING_FACES = 1;

        const shuffledNeutralFaces = FaceStorage.neutral.sort(() => 0.5 - Math.random());
        const chosenNeutralFaces = shuffledNeutralFaces.slice(0, NUM_NEUTRAL_FACES); 

        const shuffledSmilingFaces = FaceStorage.smiling.sort(() => 0.5 - Math.random());
        const chosenSmilingFaces = shuffledSmilingFaces.slice(0, NUM_SMILING_FACES);

        return [...chosenNeutralFaces, ...chosenSmilingFaces]
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }, [FaceStorage.smiling, FaceStorage.neutral]);

    return (
        <div className='grid grid-cols-3 w-full'>
            {shuffledImages.map((img, index) => (
                <div key={index}>
                    <img src={img.image} alt={`face-${index}`} />
                </div>
            ))}
        </div>
    );
}

export default FaceGrid;