import React from 'react';

import Link from 'next/link';

import { QuestionAnswer } from '../faq/QuestionAnswer';
import { Section } from '../layout/Section';

const FAQ = () => (
  <Section
    title="You have Questions?"
    subtitle="FAQ"
    description="We got answers."
  >
    <div className="flex flex-col">
      <QuestionAnswer question="What powers Moona?">
        <p>
          Moona is powered by the Terra blockchain running on Tendermint consensus, which relies on a set of validators to secure the network. Validators run a full nodes and participate in consensus by broadcasting votes which contain cryptographic signatures signed by their private key. Validators commit new blocks in the blockchain and receive revenue in exchange for their work. They also participate in on-procotol treasury governance by voting on governance proposals. A validator's voting influence is weighted according to their total stake.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="How can I buy Moona?">
        <p>
        You can buy MUNA by participating in the MoonaList Auction. For more information, visit this page frequently.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Who can partipate in this auction?">
        <p>
        Anyone who does not reside in an included jurisdiction and successfully or unsuccessfully passes Know Your Customer (KYC) and Anti-Money Laundering (AML) checks may participate in the auctions. Please note that participation in auctions is possible in the following excluded jurisdictions: China, USA, Canada, North Korea, Cuba, Syria, Iran, Sudan, Belarus, Myanmar, Côte D’Ivoire, The Democratic Republic of the Congo, Iraq, Liberia, Zimbabwe, and jurisdictions in which the auctions and/or trading of the tokens themselves are prohibited, restricted or unauthorized in any form or manner whether in full or in part under the laws, regulatory requirements or rules in such jurisdiction.
        </p>
      </QuestionAnswer>
    </div>
  </Section>
);

export { FAQ };
