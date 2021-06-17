import React from 'react';

import { FeatureElement } from '../feature/FeatureElement';
import { Section } from '../layout/Section';

const Features = () => (
  <Section
    title="What is Moona"
    subtitle="Learn"
    description="Moona is a currency for changemakers, innovators, and visionaries, using the tools and technologies of the future, to bring about positive global change."
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-16">
      <FeatureElement
        title="Digital"
        icon={(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M21 12h-4l-3 8-4-16-3 8H3" />
          </svg>
        )}
      >
        Moona is an interface for the next computing paradigm. 
      </FeatureElement>
      <FeatureElement
        title="Decentralized"
        icon={(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M12 12v.01M19.071 4.929a4 10 45 00-9.9 4.243 4 10 45 00-4.242 9.9 4 10 45 009.9-4.244 4 10 45 004.242-9.9" />
            <path d="M4.929 4.929a10 4 45 004.243 9.9 10 4 45 009.9 4.242 10 4 45 00-4.244-9.9 10 4 45 00-9.9-4.242" />
          </svg>
        )}
      >
        Moona is run across the internet, on the the Terra blockchain.
      </FeatureElement>
      <FeatureElement
        title="Tokenized"
        icon={(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M14 7h7v7" />
          </svg>
        )}
      >
        Moona is inherently value-bearing. 
      </FeatureElement>
      <FeatureElement
        title="Programmable"
        icon={(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M5 7l5 5-5 5M12 19h7" />
          </svg>
        )}
      >
        Moona is programmable money. 
      </FeatureElement>
      <FeatureElement
        title="Secure"
        icon={(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M9 12l2 2 4-4" />
            <path d="M12 3a12 12 0 008.5 3A12 12 0 0112 21 12 12 0 013.5 6 12 12 0 0012 3" />
          </svg>
        )}
      >
        Delegated PoS blockchain with 100 trusted validators. 
      </FeatureElement>
      <FeatureElement
        title="Eco-friendly"
        icon={(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M20 11A8.1 8.1 0 004.5 9M4 4v5h5M4 13a8.1 8.1 0 0015.5 2m.5 5v-5h-5" />
          </svg>
        )}
      >
        PoS enables Moona to be 100-10000x more efficient than Bitcoin.
      </FeatureElement>
    </div>
  </Section>
);

export { Features };
