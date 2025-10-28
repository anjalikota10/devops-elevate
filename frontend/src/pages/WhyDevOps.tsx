import BlurText from "../components/BlurText";

const WhyDevOps = () => {
  return (
    <div className="p-8">
      <BlurText
        text="Why DevOps?"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl font-bold mb-8"
      />
      <p>
        DevOps helps teams collaborate, automate deployment pipelines, and
        release updates faster with fewer errors.
      </p>
    </div>
  );
};

export default WhyDevOps;
