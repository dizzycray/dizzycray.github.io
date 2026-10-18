import { Layout } from "@/components/Layout";

const labAreas = [
  {
    title: "Linux & Networking",
    description: "Command-line practice, networking fundamentals, and packet analysis notes.",
    status: "Learning Lab",
  },
  {
    title: "Python for Security",
    description: "Small security tools, automation scripts, and technical experiments.",
    status: "In Progress",
  },
  {
    title: "Web & API Security",
    description: "OWASP topics and hands-on work in controlled lab environments.",
    status: "Learning Lab",
  },
  {
    title: "Android Security",
    description: "Exploring app structure, APK analysis, and mobile security techniques.",
    status: "Learning Lab",
  },
  {
    title: "CTF & Write-ups",
    description: "Challenges I've solved, methods I used, and lessons learned along the way.",
    status: "In Progress",
  },
];

const Lab = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-3xl space-y-12">
          <div>
            <h1 className="text-display mb-6 animate-fade-in-up">Learn. Experiment. Understand.</h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              A space for hands-on experiments, technical notes, CTF challenges, and lessons learned along the way.
            </p>
          </div>

          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {labAreas.map((area) => (
              <div key={area.title} className="border-b border-separator pb-8">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h2 className="text-2xl font-display font-semibold">{area.title}</h2>
                  <span className="text-label shrink-0">{area.status}</span>
                </div>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lab;
