import { Layout } from "@/components/Layout";

const Contact = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24 min-h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-12">
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
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div className="aspect-[4/5] bg-secondary overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=1000&fit=crop"
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
