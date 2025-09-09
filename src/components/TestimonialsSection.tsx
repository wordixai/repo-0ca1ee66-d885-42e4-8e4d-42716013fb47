import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Yihui",
    role: "Founder",
    company: "happyaicoding.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    content: "I'm teaching AI coding online, and I have created an AI SaaS website for my students using the MkSaaS template. This template is incredibly cool and convenient!",
    date: "Aug 7, 2025"
  },
  {
    name: "Jing Ran",
    role: "Freelancer",
    company: "flux1krea.app", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    content: "Even as a complete beginner, I was able to launch a production-ready SaaS website with an integrated AI tool in just two days. This website features a beautiful UI and high-quality image generation, all thanks to MkSaaS template.",
    date: "Aug 1, 2025"
  },
  {
    name: "LeviDing",
    role: "Creator",
    company: "nomadsplus.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    content: "MkSaaS is an outstanding template with comprehensive features and exceptionally well-written code 👍. Initially, I believed programmers didn't need to purchase templates, thinking we could create one within a few days. However, I later realized that handling integrations, styling, fine-tuning, and edge cases isn't something you can accomplish quickly.",
    date: "Jul 9, 2025"
  },
  {
    name: "Thomas Liu", 
    role: "Founder",
    company: "kisspixel.ai",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    content: "MkSaaS's developer, Fox, excels at one thing: creating the simplest and most user-friendly SaaS template using Next.js. He has truly nailed it. The template offers fully-featured code, clear and detailed documentation, and outstanding after-sales support — and it just keeps improving.",
    date: "Jun 17, 2025"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-4 pt-16 bg-muted/50">
      <div className="flex flex-col items-center text-center gap-4">
        <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">
          Testimonials
        </h2>
        <p className="text-balance text-2xl text-foreground">
          What our customers are saying
        </p>
      </div>
      
      <div className="mx-auto max-w-7xl xl:px-4">
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}