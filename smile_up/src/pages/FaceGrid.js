import React, { useState, useMemo } from 'react';
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
        <div className='grid grid-cols-3 w-full'>
            {shuffledImages.map((img, index) => (
                <div 
                    key={index} 
                    onClick={() => handleImageClick(index)} 
                    className={`cursor-pointer p-2 ${selectedIndex === index ? 'border-4 border-blue-500' : ''}`}
                >
                    <img src={img.image} alt={`face-${index}`} className="w-full" />
                </div>
            ))}
            <button className="border-yellow-950" type='submit'>Submit!</button>
        </div>
    );
}

export default FaceGrid;
