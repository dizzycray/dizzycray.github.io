import { Layout } from "@/components/Layout";

const About = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-3xl space-y-12">
          {/* Content */}
          <div>
            <h1 className="text-display mb-8 animate-fade-in-up">Beyond the Surface</h1>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <p>
                I'm <span className="text-foreground">Azra</span>, a Mobile Security
                Technologies student at Ondokuz Mayıs University, interested in
                understanding how software works beneath the interface and how
                digital systems can be made more secure.
              </p>
              <p>
                My learning journey spans Linux, networking, Python, web security,
                Android security, and reverse engineering. I enjoy exploring
                unfamiliar technologies, solving technical problems, and turning
                what I learn into practical experiments.
              </p>
              <p>
                I'm building my skills one project at a time, documenting my
                progress, learning from mistakes, and developing the foundations
                for a career in cybersecurity.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default About;
