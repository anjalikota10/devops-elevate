import BlurText from "../components/BlurText";

const WhatIsDevOps = () => {
  return (
    <div className="p-8">
      <BlurText
        text="What is DevOps?"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl font-bold mb-8"
      />
      <p>
        DevOps is a set of practices that combines software development (Dev)
        and IT operations (Ops). It aims to shorten the development lifecycle
        and deliver high-quality software continuously.
      </p>
    </div>
  );
};

export default WhatIsDevOps;
