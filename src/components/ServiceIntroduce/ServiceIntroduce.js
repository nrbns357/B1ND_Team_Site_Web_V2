import React, { Fragment } from 'react';
import { ScrollSection, ScrollContainer } from 'react-onepage-scroll';
import './ServiceIntroduce.scss';
// import FirstPage from './FirstPage';
import { useInView } from 'react-intersection-observer';
import track, { useTracking } from 'react-tracking';
import IntroPage from './IntroPage/IntroPage';
import ScreenShotWeb from './ScreenShotWeb/ScreenShotWeb';
import LocationApply from './LocationApply/LocationApply';
import Mobile1 from './Mobile/Mobile1';
import Mobile2 from './Mobile/Mobile2';
import WakeSong from './WakeSong/WakeSong';
import DodamLight from './DodamLight/DodamLight';
import DodamDark from './DodamDark/DodamDark';
import TeacherIntro from './TeacherIntro/TeacherIntro';
import IOS2 from './iOS/iOS2';
import IOS1 from './iOS/iOS1';
import AllMockUp from './AllMockUp/AllMockUp';
import TeacherUnder from './TeacherUnder/TeacherUnder';
const ServiceIntroduce = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.079,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <div className="ServiceIntroduce">
      <ScrollContainer>
        <ScrollSection pageId={0}>
          <IntroPage inViewEle={inView} refEl={ref} />
        </ScrollSection>

        <ScrollSection pageId={1}>
          <ScreenShotWeb />
        </ScrollSection>

        <ScrollSection pageId={2}></ScrollSection>
        <ScrollSection pageId={3}>
          <AllMockUp />
        </ScrollSection>
        <ScrollSection pageId={4}>
          <Mobile1 />
        </ScrollSection>

        <ScrollSection pageId={5}>
          <Mobile2 />
        </ScrollSection>

        <ScrollSection pageId={6}>
          <IOS1 />
        </ScrollSection>

        <ScrollSection pageId={7}>
          <IOS2 />
        </ScrollSection>

        <ScrollSection pageId={8}>
          <LocationApply />
        </ScrollSection>
        <ScrollSection pageId={9}>
          <WakeSong />
        </ScrollSection>
        <ScrollSection pageId={10}>
          <DodamLight />
        </ScrollSection>
        <ScrollSection pageId={11}>
          <DodamDark />
        </ScrollSection>
        <ScrollSection pageId={12}>
          <TeacherIntro />
        </ScrollSection>
        <ScrollSection pageId={13}>
          <TeacherUnder />
        </ScrollSection>
        <ScrollSection pageId={14}></ScrollSection>
      </ScrollContainer>
    </div>
  );
};

export default ServiceIntroduce;
