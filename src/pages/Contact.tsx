import { Layout } from "@/components/Layout";
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import contactWorkspace from "@/assets/contact-workspace.jpg";

const socialProfiles = [
  {
    name: "GitHub",
    description: "Code & exploration",
    url: "https://github.com/dizzycray",
    icon: Github,
  },
  {
    name: "LinkedIn",
    description: "Professional profile",
    url: "https://www.linkedin.com/in/azra-k-145893372/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    description: "A little more about me",
    url: "https://www.instagram.com/azraklcsn/",
    icon: Instagram,
  },
];

const Contact = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24 min-h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div>
              <h1 className="text-display mb-6 animate-fade-in-up">
                Let's Connect.
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Interested in cybersecurity, mobile security, open-source projects, or learning together? I'd love to connect with curious people who enjoy building and exploring.
              </p>
            </div>

            {/* Location */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-label mb-2">Based in</p>
              <p className="text-lg">Samsun, Türkiye</p>
            </div>

            {/* Social Profile Cards */}
            <div className="space-y-3 pt-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-label mb-1">Profiles</p>
              <div className="flex flex-col gap-3">
                {socialProfiles.map((profile) => {
                  const Icon = profile.icon;
                  return (
                    <a
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 border border-separator bg-background/40 hover:bg-hover-bg hover:border-foreground/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="p-2 border border-separator text-foreground/80 group-hover:text-foreground group-hover:border-foreground/40 transition-colors shrink-0">
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-display font-semibold text-base text-foreground tracking-tight">
                            {profile.name}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground truncate">
                            {profile.description}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-muted-foreground shrink-0 ml-3 transition-transform duration-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div className="aspect-[4/5] bg-secondary overflow-hidden">
              <img
                src={contactWorkspace}
                alt="Cybersecurity workspace with books, laptop, and research notes"
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
