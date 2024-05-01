import React from "react";
import HomeSection from "./HomeSection";
import zhy from "../../../assets/bg.jpg";
import Nav from "../navbar/Nav";
import zhyrille from "../../../assets/logo.png";

const HomePage = () => {
  const styles = {
    backgroundImage: `linear-gradient(to left, rgba(10, 0, 0, 0.8), rgba(10, 0, 0, 0.5)),url(${zhy})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundAttachment: "fixed",
    innerWidth: "100%",
  };

  return (
    <div>
      <div id="main" className="w-full min-h-screen pb-16" style={styles}>
        <Nav />
        <HomeSection img={zhyrille} />
      </div>
    </div>
  );
};

export default HomePage;
