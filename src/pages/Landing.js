import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby photo booth elit fanny pack pinterest. In godard air plant
            man bun brunch incididunt cloud bread live-edge yr ea fashion axe.
            Banh mi consequat food truck la croix bitters bespoke, chillwave
            chartreuse prism wolf.
          </p>
          <Link to="/register" className="btn btn-hero">
            login/register
          </Link>
        </div>
        <img src={main} className="img main-img" alt="main" />
      </div>
    </Wrapper>
  );
};

export default Landing;
