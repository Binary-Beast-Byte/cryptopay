import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { 
    HeroContainer ,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroBtnWrapper,
    HeroP,
    ArrowFroward,
    ArrowRight
  } from './HeroElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(hover)
    }

  return (
      <HeroContainer>
          <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
          </HeroBg>
          <HeroContent>
              <HeroH1>The World Fastest Growing 
Crypto App</HeroH1>
              <HeroP>
              Join 50m+ users buying and selling 250+ cryptocurrencies at true cost
              </HeroP>
              <HeroBtnWrapper>
                  <Button
                    to="signup"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                    Get started {hover ? <ArrowFroward /> : <ArrowRight />}
                  </Button>
              </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer>
  )
}

export default HeroSection;
