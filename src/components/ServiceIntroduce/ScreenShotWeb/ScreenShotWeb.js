import React from 'react';
import './ScreenShotWeb.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import MobileFirstPage from 'assets/images/mockup/MobileFirstPage.png';
import Web_Cap_LostFound from 'assets/images/mockup/Web_Cap_LostFound.png';
import Web_Cap_Main from 'assets/images/mockup/Web_Cap_Main.png';
import Web_Cap_MyInfo_Dark from 'assets/images/mockup/Web_Cap_MyInfo_Dark.png';
import Web_Cap_Schedule_Dark from 'assets/images/mockup/Web_Cap_Schedule_Dark.png';
import Web_Cap_WakeSong from 'assets/images/mockup/Web_Cap_WakeSong.png';
const ScreenShotWeb = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <>
      <div ref={ref}>
        <div className="ScreenShotWeb">
          <div className="ScreenShotWeb-leftWrap">
            {inView ? (
              <>
                <FadeIn transitionDuration={400} delay={120}>
                  <div className="ScreenShotWeb-box">
                    <img src={Web_Cap_Main} alt={Web_Cap_Main} />
                  </div>
                  <div className="ScreenShotWeb-box">
                    <img
                      src={Web_Cap_Schedule_Dark}
                      alt={Web_Cap_Schedule_Dark}
                    />
                  </div>
                  <div className="ScreenShotWeb-box">
                    <img src={Web_Cap_WakeSong} alt={Web_Cap_WakeSong} />
                  </div>
                </FadeIn>
              </>
            ) : null}
          </div>
          <div className="ScreenShotWeb-rightWrap">
            {inView ? (
              <>
                <FadeIn transitionDuration={400} delay={120}>
                  <div className="ScreenShotWeb-rightWrap-textWrap">
                    <div className="ScreenShotWeb-rightWrap-textWrap-topTitle">
                      <div className="ScreenShotWeb-rightWrap-textWrap-topTitle-wrapper">
                        <div>학생들을 위한</div>
                        <div>학생들이 만든</div>
                        <div>스마트 스쿨 플랫폼</div>
                        <div className="primary">도담도담</div>
                      </div>
                    </div>

                    <div className="ScreenShotWeb-rightWrap-textWrap-bottomTitle">
                      <div className="ScreenShotWeb-rightWrap-textWrap-bottomTitle-wrapper">
                        <div>학생들을 위한</div>
                        <div>학생들이 만든</div>
                        <div>학생들의 곁에는 항상 도담도담</div>
                        <div>학생들의 곁에는 항상 도담도담</div>
                        <div>학생들의 곁에는 항상 도담도담</div>
                        <div className="primary">도담도담</div>
                        <div className="primary">도담도담</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </>
            ) : null}

            {inView ? (
              <>
                <FadeIn transitionDuration={400} delay={400}>
                  <div className="ScreenShotWeb-rightWrap-imgWrap">
                    <div className="ScreenShotWeb-box">
                      <img
                        src={Web_Cap_MyInfo_Dark}
                        alt={Web_Cap_MyInfo_Dark}
                      />
                    </div>
                    <div className="ScreenShotWeb-box">
                      <img src={Web_Cap_LostFound} alt={Web_Cap_LostFound} />
                    </div>
                  </div>
                </FadeIn>
              </>
            ) : null}
          </div>
        </div>
        {inView ? (
          <>
            <FadeIn transitionDuration={400} delay={400}>
              <div className="ScreenShotWeb-underWrap">
                <div className="ScreenShotWeb-underWrap-mobileTextWrap">
                  <div>언제든 내 손 안에,</div>
                  <div className="ScreenShotWeb-underWrap-mobileTextWrap-mobileText primary">
                    도담도담 모바일
                  </div>
                </div>
                <div className="ScreenShotWeb-underWrap-imgWrap">
                  <img src={MobileFirstPage} alt={MobileFirstPage} />
                </div>
              </div>
            </FadeIn>
          </>
        ) : null}
        }
      </div>
    </>
  );
};

export default ScreenShotWeb;
