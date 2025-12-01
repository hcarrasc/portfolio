import Header from './Header';
import Footer from './Footer';
import Title from './Title';
import Profile from './Profile';

function Home() {
    return (
        <>
            <Header />
            <div className="main-wrapper">
                <Profile />
                <Title />
                <section className="side-projects">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, nam! Et illo ut
                    facere, magni aspernatur ad perspiciatis ducimus vero veniam eveniet, nam
                    perferendis dolores, voluptas dolore optio culpa facilis.
                </section>

                <Title />
                <section className="stack">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id rem quasi nesciunt!
                    Provident labore laborum ad autem nisi quibusdam sit, amet placeat accusamus
                    voluptatem praesentium ea dolores, quo atque dolorum!
                </section>

                <Title />
                <section className="cv">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, et eius? Quaerat
                    corrupti exercitationem, ipsum sit quod eligendi eos libero dolores, alias neque
                    nesciunt tenetur iure tempora nulla inventore aperiam.
                </section>

                <Title />
                <section className="courses">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex explicabo
                    nisi exercitationem ipsa numquam porro vero, amet esse provident facilis totam
                    placeat! Expedita illum sed culpa esse repellat ipsa.
                </section>
            </div>

            <Footer />
        </>
    );
}

export default Home;
