import React from "react";
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
    ServiceContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesICon,
    ServicesH2,
    ServicesP
} from './ServicesElemet'

const Services = () => {
  return (
    <>
      <ServiceContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesICon src={Icon1} />
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>
              We help reduce your fees and increase your overall revernue
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesICon src={Icon2} />
            <ServicesH2>Virtual Services</ServicesH2>
            <ServicesP>
              You can access our platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesICon src={Icon3} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              Unlock our special membership card that returns 5% cash back.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServiceContainer>
    </>
  );
};

export default Services;
