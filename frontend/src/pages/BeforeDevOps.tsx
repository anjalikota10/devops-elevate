import BlurText from "../components/BlurText";

const BeforeDevOps = () => {
  return (
    <div className="p-8">
      <BlurText
        text="Before DevOps"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl font-bold mb-8"
      />
      <p>
        Before DevOps, software development and operations teams worked
        separately, often leading to longer release cycles and integration
        issues.
      </p>
    </div>
  );
};

export default BeforeDevOps;
