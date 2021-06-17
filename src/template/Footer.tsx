import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { FooterCompanyInfo } from '../footer/FooterCompanyInfo';
import { FooterLinks } from '../footer/FooterLinks';
import { FooterTwoRowsCopyright } from '../footer/FooterTwoRowsCopyright';
import { Section } from '../layout/Section';
import { Config } from '../utils/Config';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <FooterTwoRowsCopyright siteName={Config.site_name}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
          <div className="col-span-1 sm:col-span-2">
            <FooterCompanyInfo logo={<Logo />} description={Config.description} />
          </div>

          <FooterLinks title="Product">
            <li>
              <Link href="/">
                <a>Suck</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>my</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>taint</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>bitch</a>
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title="Resources">
            <li>
              <Link href="/">
                <a>Eat</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>my</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>ass</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>guy</a>
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title="Contact">
            <li>
              <Link href="/">
                <a>fuck</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>cunt</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>shit</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>dick</a>
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title="Legal">
            <li>
              <Link href="/">
                <a>Compliance</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Apes Monke</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Moona Man</a>
              </Link>
            </li>
          </FooterLinks>
        </div>
      </FooterTwoRowsCopyright>
    </Section>
  </Background>
);

export { Footer };
