import Hero from '../components/IntroPage/Hero';
import Backedby from '../components/IntroPage/Backedby';
import Revolutionizing from '../components/IntroPage/Revolutionizing';
import Solutions from '../components/IntroPage/Solutions';
import Cta from '../components/IntroPage/Cta';
import Team from '../components/IntroPage/Team';
import JoinMission from '../components/IntroPage/JoinMission';
import Contact from '../components/IntroPage/Contact';

function IntroSection() {
  return (
    <div>
      <Hero />
      <Backedby />
      <Revolutionizing />
      <Solutions />
      <Cta />
      <Team />
      <JoinMission />
      <Contact />
    </div>
  );
}

export default IntroSection;
