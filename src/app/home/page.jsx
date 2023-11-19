
import MainCarousel from '../components/main-carousel/main-carousel';
import WordCarousel from '../components/carousel-of-words/carousel-of-words';
import FirstSection from '../components/Home/firstSection/first-section';
import IconSection from '../components/icon-section/icon-section';
import SecondSection from '../components/Home/secondSection/second-section';
import './style.css';
import ThirdSection from '../components/Home/thirdSection/third-section';
import HomeLayout from './layout';


export default function Home() {
    return (
        <HomeLayout>
        <div id="home">
            <MainCarousel />
            <FirstSection />     
            <WordCarousel />
            <SecondSection />
            <IconSection />
            <ThirdSection />
        </div>
        </HomeLayout>
    )
}