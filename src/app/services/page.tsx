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

      <section className="grid md:grid-cols-1 gap-12">
        <Card key="individual-therapy" className="flex flex-col md:flex-row overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        {services.map((service, index) => (
          <Card key={service.title} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}>
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <Image
                src={service.imgSrc}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={service.aiHint}
              />
            </div>
            <div className="md:w-1/2">
              <CardHeader>
                <div className="flex items-center mb-3">
                  <service.icon className="h-10 w-10 text-primary mr-4" />
                  <CardTitle className="text-3xl text-primary">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </div>
          </Card>
        ))}
        </Card>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Ready to Find the Right Support?</h2>
        <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your child's needs and find out how our services can help you or your loved ones.
        </p>
        <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-accent-foreground bg-accent hover:bg-accent/90">
          Schedule a Consultation
        </a>
      </section>
    </div>
  );
}
