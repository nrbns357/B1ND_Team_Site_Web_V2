import React,{ useState } from 'react';
import './ServiceNotice.scss';
import TeamImg from 'assets/images/Bind.jpg';
import YB from 'assets/images/BIND1.jpg';
import both from 'assets/images/이미지7.jpg';
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";

const ServiceNotice = () => {
  const [server, setServer] = useState(false);
  const [window, setWindow] = useState(false);
  const [android, setAndroid] = useState(false);
  const [ios, setIos] = useState(false);
  const [web, setWeb] = useState(false);
  const [design, setDesign] = useState(false);
  return (
    <>
      <div className="ServiceNotice">
        <div className="ServiceNotice-content">
          {/* 페이지 설명 영역 상단 */}
          <div className="ServiceNotice-content-title">바인드 소개</div>
          <div className="ServiceNotice-content-info">
            바인드 팀은 스마트 스쿨을 관리하고 더욱 발전된 서비스를 제공하기
            위해 변화를 추구하며, <br />
            수많은 학생들이 개발에 자신감을 가지고 경쟁력을 키우며 다가올 미래를
            준비할 수 있도록 앞장서겠습니다.
          </div>
          <div className="ServiceNotice-content-img">
            <img
              src={YB}
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '100%',
              }}
              alt={TeamImg}
            />
          </div>
        </div>
        <div className="containerWrap">
          <div className="ServiceNotice-infoContent">
            <div className="ServiceNotice-infoContent-container">
              <div class="content_box">
                <dl>
                  <dt className="ServiceNotice-infoContent-container-left">
                    <b className="ServiceNotice-infoContent-container-left-BIND">
                      BIND
                    </b>
                  </dt>
                  <dd className="ServiceNotice-infoContent-container-right">
                    <p>
                      바인드 팀은 스마트 스쿨을 관리하고 더욱 발전된 서비스를
                      제공하기 위해 변화를 추구하며, 수많은 학생들이 개발에
                      자신감을 가지고 경쟁력을 키우며 다가올 미래를 준비할 수
                      있도록 앞장서겠습니다.
                    </p>
                  </dd>
                </dl>
              </div>
              <div class="content_box2">
                <dl>
                  <dt className="ServiceNotice-infoContent-container-left">
                    TEAM
                    <br /> PROFILE
                  </dt>
                  <dd className="ServiceNotice-infoContent-container-right">
                    <table class="ServiceNotice-infoContent-container-right-table">
                      <tbody>
                        <tr className="ServiceNotice-infoContent-container-right-table-first">
                          <th scope="row">설립연도</th>
                          <td>2017년 01월 08일</td>
                        </tr>
                        <tr>
                          <th scope="row">설립연도</th>
                          <td>2017년 01월 08일</td>
                        </tr>
                      </tbody>
                    </table>
                  </dd>
                </dl>
              </div>
              <div class="content_box2">
                <dl>
                  <dt className="ServiceNotice-infoContent-container-left">
                    <b className="ServiceNotice-infoContent-container-left-BIND">
                      BIND
                    </b>
                    <br /> MEMBER
                  </dt>
                  <dd className="ServiceNotice-infoContent-container-right">
                    <table class="ServiceNotice-infoContent-container-right-table">
                      <tbody>
                        {/* <tr className="ServiceNotice-infoContent-container-right-table-firstBold">
                          <th scope="row">기수</th>
                          <th scope="row">이름</th>
                          <th scope="row">담당업무</th>
                        </tr> */}
                        <tr className="ServiceNotice-infoContent-container-right-table-firstBold">
                          <th scope="row">Server</th>
                          <th scope="row"></th>
                          <th scope="row" className = "right" onClick={()=>setServer(!server)} >{server ? (<MdKeyboardArrowUp className= "right-icon" />) : (<MdKeyboardArrowDown className= "right-icon"/>) }</th>
                        </tr>
                        <tr className="ServiceNotice-infoContent-container-right-table">
                          <th scope="row">Windows</th>
                          <th scope="row"></th>
                          <th scope="row" className = "right" onClick={()=>setWindow(!window)}>{window ? (<MdKeyboardArrowUp className= "right-icon" />) : (<MdKeyboardArrowDown className= "right-icon"/>) }</th>
                        </tr>
                        <tr className="ServiceNotice-infoContent-container-right-table">
                          <th scope="row">Android</th>
                          <th scope="row"></th>
                          <th scope="row" className = "right" onClick={()=>setAndroid(!android)}>{android ? (<MdKeyboardArrowUp className= "right-icon" />) : (<MdKeyboardArrowDown className= "right-icon"/>) }</th>
                        </tr>
                        <tr className="ServiceNotice-infoContent-container-right-table">
                          <th scope="row">Ios</th>
                          <th scope="row"></th>
                          <th scope="row" className = "right" onClick={()=>setIos(!ios)}>{ios ? (<MdKeyboardArrowUp className= "right-icon" />) : (<MdKeyboardArrowDown className= "right-icon"/>) }</th>
                        </tr>
                        <tr className="ServiceNotice-infoContent-container-right-table">
                          <th scope="row">Web</th>
                          <th scope="row"></th>
                          <th scope="row" className = "right" onClick={()=>setWeb(!web)}>{web ? (<MdKeyboardArrowUp className= "right-icon" />) : (<MdKeyboardArrowDown className= "right-icon"/>) }</th>
                        </tr>
                        <tr className="ServiceNotice-infoContent-container-right-table">
                          <th scope="row">Design</th>
                          <th scope="row"></th>
                          <th scope="row" className = "right" onClick={()=>setDesign(!design)}>{design ? (<MdKeyboardArrowUp className= "right-icon" />) : (<MdKeyboardArrowDown className= "right-icon"/>) }</th>
                        </tr>
                      </tbody>
                    </table>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceNotice;
