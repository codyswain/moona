import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Background color="bg-gray-200">
    <Section>
      <VerticalFeatureRow
        title="Earn Moona Now"
        image={{
          src: '/assets/images/feature.svg',
          alt: 'First feature alt text',
        }}
        action={(
          <Link href="/">
            <a>
              <Button>Learn more</Button>
            </a>
          </Link>
        )}
      >
        <p>To earn Moona, submit memes, wait for the community to vote on them, and earn Moona. </p>
      </VerticalFeatureRow>
      <VerticalFeatureRow
        title="Vote on memes"
        image={{
          src: '/assets/images/feature2.svg',
          alt: 'Second feature alt text',
        }}
        reverse
      >
        <p>Holders of governance tokens may vote on memes, and community funds are given back to creators.</p>
      </VerticalFeatureRow>
      <VerticalFeatureRow
        title="Build community"
        image={{
          src: '/assets/images/feature3.svg',
          alt: 'Third feature alt text',
        }}
        action={(
          <Link href="/">
            <a>
              <Button>Read more</Button>
            </a>
          </Link>
        )}
      >
        <p>With a robust incentivization program, the Moona community grows to become the future platform for meme artists and creators.</p>
      </VerticalFeatureRow>
    </Section>
  </Background>
);

export { VerticalFeatures };
