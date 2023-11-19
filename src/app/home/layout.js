


import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';

export default function HomeLayout({ children }) {
    return (
        <section>
            <NavBar />
            {children}
            <Footer />
        </section>
    )
}