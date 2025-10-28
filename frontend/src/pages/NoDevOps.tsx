import BlurText from "../components/BlurText";

const NoDevOps = () => {
  return (
    <div className="p-8">
      <BlurText
        text="What if there is no DevOps?"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl font-bold mb-8"
      />
      <p>
        Without DevOps, teams work in silos, deployments are slower, and
        production issues take longer to fix.
      </p>
    </div>
  );
};

export default NoDevOps;
