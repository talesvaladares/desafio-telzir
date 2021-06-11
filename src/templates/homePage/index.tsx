import Head from 'next/head';
import {GradientSection} from './sections/GradientSection';
import {BeneficsSection} from './sections/BeneficsSection';
import {CalculationSection} from './sections/CalculationSection';

import {Footer} from './components/Footer';

export function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Telzir</title>
      </Head>
      <GradientSection/>
      <BeneficsSection/>
      <CalculationSection/>
      <Footer/>
    </>
  );
};