import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, HeartHandshake, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 md:py-20">

      <section className="text-center mb-16" data-ai-hint="hero section with title and description">
        <h1 className="text-5xl font-bold text-primary mb-4">About Slatenchalk Mindcare</h1>
        <p className="text-xl text-foreground max-w-3xl mx-auto">
          Dedicated to providing specialized mental health services designed to help children understand their emotions, manage challenges, and build resilience in a safe and nurturing environment.
        </p>
      </section>

      {/* Meet the Founder Section */}
      <section className="mb-16">
        <div className="md:flex items-start gap-12 flex-row-reverse -mt-10"> {/* flex-row-reverse to place image on right */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center"> {/* Added flex and justify-center for image centering */}
            <Image
              src="/images/founder.jpg"
              alt="Founder of Slatenchalk Mindcare"
              width={600}
              height={600}
              className="rounded-full shadow-xl" // Optional: make image round
              data-ai-hint="founder image"
 />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Meet the Founder</h2>
            <p className="text-lg text-foreground mb-4">
              Hello, I’m Pranali Pandit, the founder of Slatenchalk Mindcare, a space born from a deep passion for nurturing the mental and emotional well-being of children.
            </p>
            <p className="text-lg text-foreground mb-4">
              With a background in counselling psychology and specialized training in Cognitive Behaviour Therapy (CBT), my journey began with a simple, yet powerful belief: every child deserves to feel seen, heard, and understood. Over the years, I’ve worked closely with families, educators, and schools, witnessing first-hand how emotional health forms the foundation of a child’s growth—academically, socially, and personally.
            </p>
            <p className="text-lg text-foreground mb-4">
              But Slatenchalk Mindcare is more than just a mental health initiative. It’s a movement to bring compassion, understanding, and science-backed practices into every classroom and home. Through assessments, therapeutic support, parent guidance, and school collaborations, we aim to create environments where children can thrive—not just survive.
            </p>
            <p className="text-lg text-foreground font-semibold mt-6 mb-4">
              My Vision for Slatenchalk Mindcare
            </p>
            <p className="text-lg text-foreground mb-2">
              At Slatenchalk Mindcare, our vision is to make emotional intelligence and mental health as fundamental as ABCs and 123s. We envision a world where:
            </p>
            <ul>
              <li className="text-lg text-foreground mb-2">Schools are not just places of learning, but of healing and emotional safety.</li>
              <li className="text-lg text-foreground mb-2">Parents feel empowered, not judged, as they navigate their child's emotional world.</li>
              <li className="text-lg text-foreground">Children grow up not trying to 'fix' themselves but learning to understand and accept themselves.</li>
            </ul>
            <p className="text-lg text-foreground mt-4 mb-4">
              We’re building a future where emotional wellness is integrated into the everyday lives of children—at school, at home, and within themselves. Whether it’s managing big feelings, building resilience, or addressing deeper concerns, Slatenchalk Mindcare walks with families and educators every step of the way.
            </p>
            <p className="text-lg text-foreground">
              Because when we care for the minds of our children, we shape a kinder, more conscious world.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/child.png"
              alt="Illustration of children playing and learning"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
              data-ai-hint="children playing"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg text-foreground mb-4">
              Slatenchalk Mindcare was founded with a simple yet profound vision: to create a sanctuary for mental healing and growth. We understand that seeking help is a courageous step, and we are here to support you with empathy, professionalism, and evidence-based practices.
            </p>
            <p className="text-lg text-foreground">
              Our name reflects our philosophy: 'Slate' for the fresh start and new perspectives we help uncover, and 'Chalk' for the gentle guidance and tools we provide to help you write your own story of resilience and well-being.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">Our Mission & Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                To empower individuals, couples, and families to overcome mental health challenges and achieve lasting emotional well-being through personalized, compassionate, and evidence-based psychological care.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                <HeartHandshake className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Compassion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                We approach every client with empathy, understanding, and a non-judgmental attitude, creating a safe space for healing.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                We are committed to providing the highest quality of care, utilizing proven therapeutic techniques and staying current with advancements in psychology.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/*
      <section>
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">Meet Our Team (Placeholder)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="text-center shadow-lg overflow-hidden">
              <Image
                src={`https://picsum.photos/seed/team${i}/400/400`}
                alt={`Team Member ${i} - Friendly Cartoon Character`}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
                data-ai-hint="cartoon character"
              />
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Dr. Jane Doe {i}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-accent font-semibold mb-2">Lead Psychologist</p>
                <p className="text-sm text-foreground">
                  Dr. Doe specializes in cognitive behavioral therapy and has over {5+i} years of experience helping clients achieve their mental health goals.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-8 text-lg text-foreground">
          Our team of dedicated professionals is passionate about supporting your journey to mental wellness. We invite you to learn more about their expertise during your consultation.
        </p>
      </section>
      */}
    </div>
  );
}
