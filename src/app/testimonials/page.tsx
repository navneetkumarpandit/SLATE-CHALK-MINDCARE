
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto py-12 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-primary mb-4">Testimonials</h1>
        <p className="text-xl text-foreground max-w-2xl mx-auto">
          Hear from individuals who have experienced positive change and growth through our services.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Placeholder Testimonial Card */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Quote className="h-10 w-10 text-primary" />
            </div>
                <CardHeader className="pb-4">
                   <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-2xl font-normal text-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                </CardContent>
                <CardFooter className="mt-auto pt-4 border-t">
                  <div className="flex items-center">
                    {/* Use a generic icon or a placeholder user image */}
                    <UserCircle className="h-10 w-10 text-primary mr-3" />
                    <div>
                      {testimonial.url ? (
                        <a 
                          href={testimonial.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="font-semibold text-primary text-lg hover:underline flex items-center"
                        >
                          {testimonial.name}
                          <LinkIcon className="ml-1.5 h-4 w-4 text-accent" />
                        </a>
                      ) : (
                        <p className="font-semibold text-primary text-lg">{testimonial.name}</p>
                      )}
                      <p className="text-sm text-muted-foreground">Valued Client</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
      )}
            <CardTitle className="text-2xl font-normal text-foreground leading-relaxed italic">
              "This is a placeholder testimonial. You can add real testimonials here later."
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground">- Client Name</p>
          </CardContent>
        </Card>
        {/* Add more placeholder cards or dynamically load real testimonials */}
      </div>
    </div>
  );
}
