import Image from "next/image";
import { Brain, Users, Heart, Smile } from "lucide-react";


const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    description: "Personalized one-on-one therapy for children to help them express emotions, manage challenges, and build healthy coping skills through age-appropriate techniques like play, art, and talk.",
    imgSrc: "https://picsum.photos/seed/service1/600/400",
    aiHint: "kids learning",
  },
  {
    icon: Users,
    title: "Parent Counseling",
    description: "We offer parent counseling to support and guide caregivers through the challenges of raising children. These sessions help parents understand their child’s behavior, improve communication, manage stress, and create a positive, nurturing home environment.",
    imgSrc: "https://picsum.photos/seed/service2/600/400",
    aiHint: "children sharing",
  },
  {
    icon: Heart,
    title: "Family Counseling",
    description: "We offer family counseling focused on the child’s well-being, helping families understand how their dynamics impact the child’s emotional and behavioral health. These sessions support better communication, reduce conflicts, and create a more supportive environment for the child to thrive.",
    imgSrc: "https://picsum.photos/seed/service3/600/400",
    aiHint: "happy family drawing",
  },
  {
    icon: Smile,
    title: "Child & Adolescent Counseling",
    description: "We provide counseling for children and adolescents to support their emotional, social, and psychological development. Through age-appropriate methods, we help them navigate issues like anxiety, peer pressure, behavioral concerns, academic stress, and identity challenges—empowering them to grow with confidence and resilience.",
    imgSrc: "https://picsum.photos/seed/service4/600/400",
    aiHint: "child with toys",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-primary mb-4">Our Services</h1>
        <p className="text-xl text-foreground max-w-3xl mx-auto">
          We offer a comprehensive range of counselling services tailored to meet your child's unique needs and support their journey towards mental wellness.
        </p>
      </section>

      {services.map((service, index) => (
        <section key={service.title} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 mb-16`}>
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-bold text-primary mb-4 flex items-center">
              <service.icon className="h-8 w-8 text-primary mr-3" />
              {service.title}
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src={service.imgSrc} alt={service.title} layout="fill" objectFit="cover" data-ai-hint={service.aiHint} />
            </div>
          </div>
        </section>
      ))}

      {/* Contact section */}
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
        <p className="text-xl text-foreground max-w-3xl mx-auto">
          Ready to take the next step? Contact us today to learn more about how we can support your child.
        </p>
      </section>
    </div>
  );
}
