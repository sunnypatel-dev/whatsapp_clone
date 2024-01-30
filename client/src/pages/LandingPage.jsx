import GreenWrapper from "../components/LandingPage/GreenWrapper";
import MainHeader from "../components/LandingPage/MainHeader";
import LinkWithPhone from "../components/LandingPage/LinkWithPhone";
import Tutorial from "../components/LandingPage/Tutorial";
import GetTheApp from "../components/LandingPage/GetTheApp";
import QR_Section from "../components/LandingPage/QR_Section";

const LandingPage = () => {
  return (
    <>
      <GreenWrapper />
      <MainHeader />
      <div
        id="landing-main"
        className="w-8/12 m-auto bg-white py-10 px-10 rounded-sm mb-32"
      >
        <GetTheApp />

        <QR_Section />

        <hr />

        <LinkWithPhone />

        <Tutorial />
      </div>
    </>
  );
};

export default LandingPage;
