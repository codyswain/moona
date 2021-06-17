import React from 'react';

import { Section } from '../layout/Section';
import { TestimonialCard } from '../testimonial/TestimonialCard';

const Testimonial = () => (
  <Section title="Customer's Review" subtitle="Testimonials">
    <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200">
      <TestimonialCard
        image={{
          src: '/assets/images/avatar.png',
          alt: 'Random name avatar alt text',
        }}
        text="Web trailblazer. Pop culture fanatic. Incurable bacon nerd. Certified travelaholic. Zombie lover."
        author={{
          name: 'Jennifer Ford',
          position: 'CEO of Zenboingo',
        }}
      />
      <TestimonialCard
        image={{
          src: '/assets/images/avatar2.png',
          alt: 'Random name avatar alt text 2',
        }}
        text="Total alcohol specialist. Extreme beer expert. Freelance pop culture buff. Subtly charming bacon aficionado."
        author={{
          name: 'Daniel Lawson',
          position: 'Lead developer of Bodungo',
        }}
      />
    </div>
  </Section>
);

export { Testimonial };
