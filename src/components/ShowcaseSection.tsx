const showcases = [
  {
    name: "Nano Banana AI",
    description: "Edit any image with text prompts — fast, accurate, and photorealistic.",
    href: "https://nanobananas.site/",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
  },
  {
    name: "KissPixel", 
    description: "Create Stunning AI Images Effortlessly",
    href: "https://kisspixel.ai/",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop"
  },
  {
    name: "Fast3D",
    description: "Lightning-Fast AI 3D Model Generator", 
    href: "https://fast3d.io/",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=400&fit=crop"
  },
  {
    name: "Edit0",
    description: "Say it. See it. AI-powered Photo Editor",
    href: "https://edit0.com/",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
  },
  {
    name: "Qwen Image",
    description: "Immersive AI Image Creation & Editing",
    href: "https://qwenimage.dev/", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    name: "Thumbnail AI",
    description: "Free Thumbnail Maker powered by AI",
    href: "https://thumbnail-ai.com/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  }
];

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="px-4 py-16">
      <div className="mx-auto max-w-6xl space-y-8 md:space-y-16">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">
            Showcases
          </h2>
          <p className="text-balance text-2xl text-foreground">
            What our customers are building
          </p>
          <p className="text-balance text-lg text-muted-foreground">
            Launch your SaaS with MkSaaS and get featured here for free!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcases.map((showcase) => (
            <a
              key={showcase.name}
              href={showcase.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full border border-border rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:border-primary hover:shadow-lg hover:shadow-primary/20"
              style={{ minHeight: "260px" }}
            >
              <div className="relative w-full aspect-[16/10] rounded-t-xl overflow-hidden">
                <img
                  alt={showcase.name}
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300 w-full h-full"
                  src={showcase.image}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-4 md:p-5">
                <div>
                  <div className="font-semibold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                    <h3>{showcase.name}</h3>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground line-clamp-2 min-h-[2.5em]">
                    {showcase.description}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}