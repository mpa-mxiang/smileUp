import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import FaceStorage from '../FaceStorage';

const NUM_NEUTRAL_FACES = 8;
const NUM_SMILING_FACES = 1;

function FaceGrid() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [reshuffle, setReshuffle] = useState(0);

  const shuffledImages = useMemo(() => {
    const shuffledNeutralFaces = [...FaceStorage.neutral].sort(() => 0.5 - Math.random());
    const chosenNeutralFaces = shuffledNeutralFaces.slice(0, NUM_NEUTRAL_FACES);

    const shuffledSmilingFaces = [...FaceStorage.smiling].sort(() => 0.5 - Math.random());
    const chosenSmilingFaces = shuffledSmilingFaces.slice(0, NUM_SMILING_FACES);

    return [...chosenNeutralFaces, ...chosenSmilingFaces]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }, idx) => ({ ...value, id: `${value.image}-${idx}` }));
  }, [reshuffle]); // reshuffle is necessary to trigger a new memoized array

  const handleImageClick = (index) => {
    if (!submitted) {
      setSelectedIndex(index === selectedIndex ? null : index);
    }
  };

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    setSubmitted(true);

    const selectedImage = shuffledImages[selectedIndex];
    if (selectedImage.isSmiling) {
      setTimeout(() => {
        setSelectedIndex(null);
        setSubmitted(false);
        setReshuffle((prev) => prev + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setSubmitted(false);
        setSelectedIndex(null);
      }, 1000);
    }
  };

  return (
    <div className="grid grid-cols-3 w-full text-center">
      {shuffledImages.map((img, index) => {
        const selected = index === selectedIndex;
        const smileCheck = img.isSmiling;

        const classes = classNames('cursor-pointer p-2', {
          'border-4': selected || (submitted && index === selectedIndex),
          'border-green-500': smileCheck && submitted && index === selectedIndex,
          'border-red-500': !smileCheck && submitted && index === selectedIndex,
        });

        return (
          <div
            key={img.id}
            role="button"
            tabIndex={0}
            onClick={() => handleImageClick(index)}
            onKeyDown={(e) => e.key === 'Enter' && handleImageClick(index)}
            className={classes}
          >
            <img src={img.image} alt={`face-${index}`} className="w-full" />
          </div>
        );
      })}

      <button
        className="left-full relative mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        type="button"
        onClick={handleSubmit}
      >
        Submit!
      </button>
    </div>
  );
}

export default FaceGrid;
