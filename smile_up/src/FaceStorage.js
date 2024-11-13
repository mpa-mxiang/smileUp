import Img1 from "./imgs/neutral/pic1.jpg";
import Img2 from "./imgs/neutral/pic2.jpg";
import Img3 from "./imgs/smile/pic3.jpg";
import Img4 from "./imgs/neutral/pic4.jpg";
import Img5 from "./imgs/neutral/pic5.jpg";
import Img6 from "./imgs/neutral/pic6.jpg";
import Img7 from "./imgs/neutral/pic7.jpg";
import Img8 from "./imgs/neutral/pic8.jpg";
import Img9 from "./imgs/neutral/pic9.jpg";

const SmilingImages = [
  Img3,
].map(imgSrc => ({image: imgSrc, isSmiling: true}));

const NeutralImages = [
  Img1,
  Img2,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9
].map(imgSrc => ({image: imgSrc, isSmiling: false}));

export default {smiling: SmilingImages, neutral: NeutralImages};
