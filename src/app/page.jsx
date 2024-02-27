
import FirstSection from './components/Home/firstSection/first-section';
import SecondSection from './components/Home/secondSection/second-section';
import ThirdSection from './components/Home/thirdSection/third-section';
import WordCarousel from './components/carousel-of-words/carousel-of-words';

import IconSection from './components/icon-section/icon-section';
import MainCarousel from './components/main-carousel/main-carousel';




export default function Home() {
    return (
        <div id="home">
            <MainCarousel />
            <FirstSection />     
            <WordCarousel />
            <SecondSection />
            <IconSection />
            <ThirdSection />
        </div>
    )
}