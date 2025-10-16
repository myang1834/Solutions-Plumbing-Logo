import React from 'react';
import { StarIcon } from 'lucide-react';
export function TestimonialsSection() {
  const testimonials = [{
    id: 1,
    name: 'John Smith',
    location: 'Local Homeowner',
    quote: 'Solutions Plumbing saved us when our water heater broke in the middle of winter. Fast, professional service at a fair price. Highly recommend!',
    rating: 5
  }, {
    id: 2,
    name: 'Sarah Johnson',
    location: 'Property Manager',
    quote: "We've been using Solutions Plumbing for all our properties for years. Their team is reliable, knowledgeable, and always goes above and beyond.",
    rating: 5
  }, {
    id: 3,
    name: 'Mike Williams',
    location: 'Restaurant Owner',
    quote: 'When our commercial kitchen had a major plumbing issue, Solutions Plumbing responded immediately and had us back up and running the same day.',
    rating: 5
  }];
  return <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-blue-800">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-block text-blue-800 hover:text-red-600 font-medium">
            Read more customer reviews →
          </a>
        </div>
      </div>
    </section>;
}