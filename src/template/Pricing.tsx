import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';
import { PricingFeature } from '../pricing/PricingFeature';

const Pricing = () => (
  <Background color="bg-gray-200">
    <Section title="Subscribe to the next generation of digital content" subtitle="A coin of value">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <PricingCard
          name="FREE"
          price="$0"
          periodicity="mo"
          description="Enthusiast"
          button={(
            <Link href="/">
              <a>
                <Button full>Get Started</Button>
              </a>
            </Link>
          )}
        >
          <PricingFeature text="Join the future of memes" />
          <PricingFeature text="Unlimited Memes" />
          <PricingFeature text="Moona Digest subscription" />
          <PricingFeature text="p2 Tier Voting on mMemes" />
          
        </PricingCard>
        <PricingCard
          name="mPro"
          price="$19"
          periodicity="mo"
          description="Best for small teams"
          button={(
            <Link href="/">
              <a>
                <Button full>Get Started</Button>
              </a>
            </Link>
          )}
        >
          <PricingFeature text="Join the future of memes" />
          <PricingFeature text="Unlimited Memes" />
          <PricingFeature text="Moona Digest subscription" />
          <PricingFeature text="p2 Tier Voting on mMemes" />
          
        </PricingCard>
        <PricingCard
          name="mMaster"
          price="$99"
          periodicity="mo"
          description="Hardcore memer"
          button={(
            <Link href="/">
              <a>
                <Button full>Get Started</Button>
              </a>
            </Link>
          )}
        >
          <PricingFeature text="Join the future of memes" />
          <PricingFeature text="Unlimited Memes" />
          <PricingFeature text="Moona Digest subscription" />
          <PricingFeature text="p2 Tier Voting on mMemes" />
          
        </PricingCard>
      </div>
    </Section>
  </Background>
);

export { Pricing };
