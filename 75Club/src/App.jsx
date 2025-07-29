import "./App.css";
import "./index.css";
import { FaHome, FaUserFriends, FaWallet, FaUser } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carousel from "./components/Carousel";
import Header from "./header";
import ActionRow from "./actionRow";
import HeroSection from "./heroSection";
import ReferralPage from "./referralpage";
import WalletScreen from "./walletscreen";
import Footer from "./footer";
import { FaTimes } from "react-icons/fa"; // cross icon from react-icons
import NewsTicker from "./announcement";
import Overview from "./Overview";
import Navbar from "./components/Navbar";
// Example image URLs (replace with your real ones or import)
const carouselImages = [
  "https://d2ic27f7270xow.cloudfront.net/backend/production/2025/06/145_1750522655_1750522653851_ofxlxlLbXA.jpg",
  "https://d2ic27f7270xow.cloudfront.net/backend/production/2025/03/05_EN_1920x600_HOME_1740982810748.jpg",
  "http://d2ic27f7270xow.cloudfront.net/backend/production/2025/03/01_EN_1920x600_HOME_1740982752818.jpg",
];
function HomePage() {
  return (
    <div style={{ height: "150vh"     ,backgroundColor:"black"}}>
      <Header />
      <Carousel images={carouselImages} />
      <ActionRow />
      <HeroSection />
      <Footer/>
    </div>
  );
}

function App() {
  return (
    <Router>
       {location.pathname !== "/" && location.pathname !== "/wallet"  && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/referral" element={<ReferralPage />} />
           <Route path="/wallet" element={<WalletScreen />} />
           <Route path="/overview" element={<Overview />} />
      </Routes>

      {/* Bottom Navigation Bar */}
      <nav className="bottom-nav">
        <Link to="/" className="nav-item">
          <FaHome />
          <span>Home</span>
        </Link>
        <Link to="/referral" className="nav-item">
          <FaUserFriends />
          <span>Referral</span>
        </Link>
        <a href="/wallet" className="nav-item">
          <FaWallet />
          <span>Wallet</span>
        </a>
        <a href="#" className="nav-item">
          <FaUser />
          <span>Profile</span>
        </a>
      </nav>
    </Router>
  );}

export default App;
