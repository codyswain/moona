import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-black-200">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Docs</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Button>Buy Moona</Button>
            </a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-3">
      <HeroOneButton
        title={(
          <>
            {'The future is now. The future is\n'}
            <span className="text-primary-500">Moona</span>
          </>
        )}
        description="Moona runs on a cutting-edge PoS blockchain, enabling frictionless global payments in seconds."
        button={(
          <Link href="/">
            <a>
              <Button xl>Buy Moona</Button>
            </a>
          </Link>
        )}
        image={{
          src: '/assets/images/moona.png',
          alt: 'Hero screenshot',
        }}
      />
    </Section>
  </Background>
);

export { Hero };
