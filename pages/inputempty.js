import React from 'react'
import Head from 'next/head'

const Inputempty = (props) => {
  return (
    <>
      <div className="inputempty-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="inputempty-inputempty">
          <div className="inputempty-checkyourscript-input">
            <div className="inputempty-content">
              <div className="inputempty-goals">
                <div className="inputempty-text-title-description-su">
                  <span className="inputempty-text H2bold">
                    <span>Select the goal(s) of your study</span>
                  </span>
                  <span className="inputempty-text02 Bodyregular">
                    <span>
                      This will help us identify if your questions are aligned
                      with your goals in order to provide relevant data.
                    </span>
                  </span>
                </div>
                <div className="inputempty-goals1">
                  <div className="inputempty-goal1">
                    <div className="inputempty-checkbox">
                      <div className="inputempty-checkboxinput">
                        <input type="checkbox" />
                      </div>
                    </div>
                    <div className="inputempty-body">
                      <div className="inputempty-text-text">
                        <span className="inputempty-text04 H5bold">
                          <span>
                            Identify users&apos; needs, behaviors, and attitudes
                          </span>
                        </span>
                      </div>
                      <div className="inputempty-text-text01">
                        <span className="inputempty-text06 Bodyregular">
                          <span>
                            To gain insights into users&apos; needs, behaviors,
                            and attitudes towards a product, service, or
                            experience.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inputempty-goal2">
                    <div className="inputempty-checkbox2">
                      <div className="inputempty-checkboxinput1">
                        <input
                          type="checkbox"
                          className="inputempty-checkbox3"
                        />
                      </div>
                    </div>
                    <div className="inputempty-body1">
                      <div className="inputempty-text-text02">
                        <span className="inputempty-text08 H5bold">
                          <span>Identify pain points</span>
                        </span>
                      </div>
                      <div className="inputempty-text-text03">
                        <span className="inputempty-text10 Bodyregular">
                          <span>
                            To identify pain points, usability issues, and areas
                            for improvement in a product or service.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inputempty-goal3">
                    <div className="inputempty-container1">
                      <input type="checkbox" />
                    </div>
                    <div className="inputempty-body2">
                      <div className="inputempty-text-text04">
                        <span className="inputempty-text12 H5bold">
                          <span>Evaluate the effectiveness of a product</span>
                        </span>
                      </div>
                      <div className="inputempty-text-text05">
                        <span className="inputempty-text14 Bodyregular">
                          <span>
                            To evaluate the effectiveness of a product or
                            service in meeting users&apos; goals and
                            expectations.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inputempty-goal4">
                    <div className="inputempty-container2">
                      <input type="checkbox" />
                    </div>
                    <div className="inputempty-body3">
                      <div className="inputempty-text-text06">
                        <span className="inputempty-text16 H5bold">
                          <span>Understand users’ mental models</span>
                        </span>
                      </div>
                      <div className="inputempty-text-text07">
                        <span className="inputempty-text18 Bodyregular">
                          <span>
                            To understand users&apos; mental models and how they
                            conceptualise a product or service and understand
                            what services or experiences better meet users’
                            needs and preferences.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inputempty-goal5">
                    <div className="inputempty-container3">
                      <input type="checkbox" />
                    </div>
                    <div className="inputempty-body4">
                      <div className="inputempty-text-text08">
                        <span className="inputempty-text20 H5bold">
                          <span>Test and validade hypotheses</span>
                        </span>
                      </div>
                      <div className="inputempty-text-text09">
                        <span className="inputempty-text22 Bodyregular">
                          <span>
                            To test and validate hypotheses about users&apos;
                            behaviors, attitudes, and needs.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    id="Cant_find_your_goal"
                    type="submit"
                    className="inputempty-button"
                  >
                    <div className="inputempty-icon-wrapper"></div>
                    <span className="inputempty-text24 Buttonssmallandmedium">
                      <span>Can’t find your goal? Add it here</span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="inputempty-script">
                <div className="inputempty-text-title-description-su1">
                  <span className="inputempty-text26 H2bold">
                    <span>Share your script with us</span>
                  </span>
                  <span className="inputempty-text28 Bodyregular">
                    <span>
                      Copy and paste your scrip into the text box below.
                    </span>
                  </span>
                </div>
                <textarea className="inputempty-textarea textarea"></textarea>
              </div>
              <div className="inputempty-audience">
                <div className="inputempty-text-title-description-su2">
                  <span className="inputempty-text30 H2bold">
                    <span>Describe your audience</span>
                  </span>
                  <span className="inputempty-text32 Bodyregular">
                    <span>
                      This will help us identify if your questions and the
                      language used is clear and precise for your target
                      audience to understand.
                    </span>
                  </span>
                </div>
                <textarea
                  placeholder="Specify the target audience or demographic group"
                  className="inputempty-textarea1 textarea"
                ></textarea>
                <div className="inputempty-examples">
                  <span className="inputempty-text34">
                    <span>Examples:</span>
                  </span>
                  <div className="inputempty-examplecards">
                    <div className="inputempty-example1">
                      <span className="inputempty-text36 Bodyregular">
                        34 Year old worker in the fintech industry, married,
                        with two dogs and a love of rugby.
                      </span>
                    </div>
                    <div className="inputempty-example2">
                      <span className="inputempty-text37 Bodyregular">
                        <span>Couples in a long distance relationship.</span>
                      </span>
                    </div>
                    <div className="inputempty-example3">
                      <span className="inputempty-text39 Bodyregular">
                        <span>An overwhelmed product designer.</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inputempty-interview">
                <div className="inputempty-text-title-description-su3">
                  <span className="inputempty-text41 H2bold">
                    <span>Share the duration of the interview</span>
                  </span>
                  <span className="inputempty-text43 Bodyregular">
                    <span>
                      What is the planned time for each interview? We will
                      verify if the duration of your interview aligns with the
                      time allocated in your schedule.
                    </span>
                  </span>
                </div>
                <button className="inputempty-radio-button-group">
                  <div className="inputempty-wrapper">
                    <div className="inputempty-frame4">
                      <span className="inputempty-text45 Buttonslarge">
                        <span>I don’t know</span>
                      </span>
                    </div>
                    <div className="inputempty-frame3">
                      <span className="inputempty-text47 Buttonslarge">
                        <span>Over 60 minutes</span>
                      </span>
                    </div>
                    <div className="inputempty-frame2">
                      <span className="inputempty-text49 Buttonslarge">
                        <span>30 to 60 minutes</span>
                      </span>
                    </div>
                    <div className="inputempty-frame1">
                      <span className="inputempty-text51 Buttonslarge">
                        <span>Up to 30 minutes</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="inputempty-checkbox7">
                <span className="inputempty-text53 Bodyregular">
                  <span>
                    You will be sharing this with Synthetic Users. We won&apos;t
                    share it with anyone.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Over time we will get better at this.</span>
                </span>
              </div>
            </div>
            <div className="inputempty-page-header">
              <div className="inputempty-layout-blockshorizontal2">
                <div className="inputempty-headingleft">
                  <div className="inputempty-wrapper1">
                    <span className="inputempty-text57 H4bold">
                      <span>Check your script</span>
                    </span>
                  </div>
                </div>
                <div className="inputempty-headingextra">
                  <button className="inputempty-button1">
                    <div className="inputempty-icon-wrapper1">
                      <div className="inputempty-wrapper2">
                        <img
                          alt="UnionI1573"
                          src="/external/unioni1573-uhvn.svg"
                          className="inputempty-union"
                        />
                      </div>
                    </div>
                    <span className="inputempty-text59 Bodyregular">
                      <span>Exit</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="inputempty-footer">
              <button className="inputempty-button2">
                <span className="inputempty-text61 Buttonssmallandmedium">
                  <span>Give me feedback!</span>
                </span>
              </button>
            </div>
          </div>
          <div className="inputempty-apersonbust">
            <div className="inputempty-body5">
              <img
                alt="SVGSkinI1598"
                src="/external/svgskini1598-sh9.svg"
                className="inputempty-sv-skin"
              />
              <img
                alt="IMAGETopI1598"
                src="/external/imagetopi1598-dlf-200h.png"
                className="inputempty-imag-top"
              />
              <img
                alt="SVGInkI1598"
                src="/external/svginki1598-kvkm.svg"
                className="inputempty-sv-ink"
              />
            </div>
            <img
              alt="HEADI1598"
              src="/external/headi1598-4x9.svg"
              className="inputempty-head"
            />
            <div className="inputempty-face">
              <img
                alt="SVGInkI1598"
                src="/external/svginki1598-lbj.svg"
                className="inputempty-sv-ink1"
              />
            </div>
            <div className="inputempty-facialhair">
              <img
                alt="SVGInkI1598"
                src="/external/svginki1598-a9n.svg"
                className="inputempty-sv-ink2"
              />
            </div>
            <div className="inputempty-mask"></div>
            <div className="inputempty-accesories">
              <img
                alt="SVGInkI1598"
                src="/external/svginki1598-3bgr.svg"
                className="inputempty-sv-ink3"
              />
            </div>
          </div>
          <div className="inputempty-footer1">
            <button className="inputempty-button3">
              <span className="inputempty-text63 Buttonssmallandmedium">
                <span>Give me feedback!</span>
              </span>
            </button>
          </div>
          <div className="inputempty-page-header1">
            <div className="inputempty-layout-blockshorizontal21">
              <div className="inputempty-headingleft1">
                <div className="inputempty-wrapper3">
                  <span className="inputempty-text65 H4bold">
                    <span>Check your script</span>
                  </span>
                </div>
              </div>
              <div className="inputempty-headingextra1">
                <button className="inputempty-button4">
                  <div className="inputempty-icon-wrapper2">
                    <div className="inputempty-wrapper4">
                      <img
                        alt="UnionI1573"
                        src="/external/unioni1573-cb5l.svg"
                        className="inputempty-union1"
                      />
                    </div>
                  </div>
                  <span className="inputempty-text67 Bodyregular">
                    <span>Exit</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .inputempty-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .inputempty-inputempty {
            width: 100%;
            height: 2383px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-checkyourscript-input {
            top: 0px;
            left: 0px;
            width: 1446px;
            height: 2383px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-neutral-2);
          }
          .inputempty-content {
            gap: 72px;
            top: 160px;
            left: 357px;
            width: 725px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
          }
          .inputempty-goals {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inputempty-text-title-description-su {
            gap: 24px;
            width: 725px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .inputempty-text {
            color: var(--dl-color-character-primary85);
            height: auto;
            align-self: stretch;
            text-align: center;
            line-height: 40px;
          }
          .inputempty-text02 {
            color: var(--dl-color-character-primary85);
            height: auto;
            align-self: stretch;
            text-align: center;
            line-height: 22px;
          }
          .inputempty-goals1 {
            gap: 8px;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .inputempty-goal1 {
            gap: 16px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(240, 240, 240, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-checkbox {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .inputempty-checkboxinput {
            display: flex;
            align-items: center;
            border-radius: 2px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-body {
            gap: 8px;
            width: 661px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .inputempty-text-text {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .inputempty-text04 {
            color: var(--dl-color-character-title85);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 24px;
          }
          .inputempty-text-text01 {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .inputempty-text06 {
            color: var(--dl-color-character-secondary45);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 22px;
          }
          .inputempty-goal2 {
            gap: 16px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(240, 240, 240, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-checkbox2 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .inputempty-checkboxinput1 {
            display: flex;
            align-items: center;
            border-radius: 2px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-checkbox3 {
            transition: 0.3s;
          }

          .inputempty-body1 {
            gap: 8px;
            width: 661px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .inputempty-text-text02 {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .inputempty-text08 {
            color: var(--dl-color-character-title85);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 24px;
          }
          .inputempty-text-text03 {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .inputempty-text10 {
            color: var(--dl-color-character-secondary45);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 22px;
          }
          .inputempty-goal3 {
            gap: 16px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(240, 240, 240, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .inputempty-body2 {
            gap: 8px;
            width: 661px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .inputempty-text-text04 {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .inputempty-text12 {
            color: var(--dl-color-character-title85);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 24px;
          }
          .inputempty-text-text05 {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .inputempty-text14 {
            color: var(--dl-color-character-secondary45);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 22px;
          }
          .inputempty-goal4 {
            gap: 16px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(240, 240, 240, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .inputempty-body3 {
            gap: 8px;
            width: 661px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .inputempty-text-text06 {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .inputempty-text16 {
            color: var(--dl-color-character-title85);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 24px;
          }
          .inputempty-text-text07 {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .inputempty-text18 {
            color: var(--dl-color-character-secondary45);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 22px;
          }
          .inputempty-goal5 {
            gap: 16px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(240, 240, 240, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .inputempty-body4 {
            gap: 8px;
            width: 661px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .inputempty-text-text08 {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .inputempty-text20 {
            color: var(--dl-color-character-title85);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 24px;
          }
          .inputempty-text-text09 {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .inputempty-text22 {
            color: var(--dl-color-character-secondary45);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 22px;
          }
          .inputempty-button {
            gap: 8px;
            color: var(--dl-color-gray-black);
            width: 281px;
            height: 31px;
            display: flex;
            padding: 4px 15px;
            overflow: hidden;
            transition: 0.3s;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
          }
          .inputempty-button:hover {
            color: #5632ff;
          }
          .inputempty-icon-wrapper {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-◇-hitbox);
          }
          .inputempty-text24 {
            color: var(--dl-color-primary-6);
            height: auto;
            text-align: center;
            line-height: 22px;
          }
          .inputempty-script {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inputempty-text-title-description-su1 {
            gap: 24px;
            width: 725px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .inputempty-text26 {
            color: var(--dl-color-character-primary85);
            height: auto;
            align-self: stretch;
            text-align: center;
            line-height: 40px;
          }
          .inputempty-text28 {
            color: var(--dl-color-character-primary85);
            height: auto;
            align-self: stretch;
            text-align: center;
            line-height: 22px;
          }
          .inputempty-textarea {
            width: 726px;
            height: 190px;
          }
          .inputempty-audience {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inputempty-text-title-description-su2 {
            gap: 24px;
            width: 725px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .inputempty-text30 {
            color: var(--dl-color-character-primary85);
            height: auto;
            align-self: stretch;
            text-align: center;
            line-height: 40px;
          }
          .inputempty-text32 {
            color: var(--dl-color-character-primary85);
            height: auto;
            align-self: stretch;
            text-align: center;
            line-height: 22px;
          }
          .inputempty-textarea1 {
            width: 726px;
            height: 190px;
          }
          .inputempty-examples {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .inputempty-text34 {
            color: var(--dl-color-wireframes-black);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .inputempty-examplecards {
            gap: 12px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .inputempty-example1 {
            gap: 8px;
            width: 296px;
            height: 125px;
            display: flex;
            padding: 12px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 6px;
            background-color: var(--dl-color-neutral-3);
          }
          .inputempty-text36 {
            color: var(--dl-color-character-primary85);
            height: auto;
            flex-grow: 1;
            align-self: stretch;
            text-align: center;
            line-height: 22px;
          }
          .inputempty-example2 {
            gap: 8px;
            width: 191px;
            height: 125px;
            display: flex;
            padding: 12px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 6px;
            background-color: var(--dl-color-neutral-3);
          }
          .inputempty-text37 {
            color: var(--dl-color-character-primary85);
            height: auto;
            flex-grow: 1;
            align-self: stretch;
            text-align: center;
            line-height: 22px;
          }
          .inputempty-example3 {
            gap: 8px;
            width: 211px;
            height: 125px;
            display: flex;
            padding: 12px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 6px;
            background-color: var(--dl-color-neutral-3);
          }
          .inputempty-text39 {
            color: var(--dl-color-character-primary85);
            height: auto;
            flex-grow: 1;
            align-self: stretch;
            text-align: center;
            line-height: 22px;
          }
          .inputempty-interview {
            gap: 24px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .inputempty-text-title-description-su3 {
            gap: 24px;
            width: 725px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .inputempty-text41 {
            color: var(--dl-color-character-primary85);
            height: auto;
            align-self: stretch;
            text-align: center;
            line-height: 40px;
          }
          .inputempty-text43 {
            color: var(--dl-color-character-primary85);
            height: auto;
            align-self: stretch;
            text-align: center;
            line-height: 22px;
          }
          .inputempty-radio-button-group {
            gap: -1px;
            display: flex;
            align-items: center;
          }
          .inputempty-wrapper {
            gap: -1px;
            display: flex;
            align-items: flex-start;
          }
          .inputempty-frame4 {
            gap: 4px;
            display: flex;
            padding: 8px 16px;
            overflow: hidden;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(217, 217, 217, 1);
            border-style: solid;
            border-width: 1px;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-frame4:hover {
            border-color: #ffffff;
            background-color: var(--dl-color-primary-3);
          }
          .inputempty-frame4:active {
            background-color: var(--dl-color-primary-6);
          }
          .inputempty-text45 {
            color: var(--dl-color-neutral-13);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .inputempty-frame3 {
            gap: 4px;
            display: flex;
            padding: 8px 16px;
            overflow: hidden;
            align-items: center;
            border-color: rgba(217, 217, 217, 1);
            border-style: solid;
            border-width: 1px;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-text47 {
            color: var(--dl-color-neutral-13);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .inputempty-frame2 {
            gap: 4px;
            display: flex;
            padding: 8px 16px;
            overflow: hidden;
            align-items: center;
            border-color: rgba(217, 217, 217, 1);
            border-style: solid;
            border-width: 1px;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-text49 {
            color: var(--dl-color-neutral-13);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .inputempty-frame1 {
            gap: 4px;
            display: flex;
            padding: 8px 16px;
            overflow: hidden;
            align-items: center;
            border-color: rgba(217, 217, 217, 1);
            border-style: solid;
            border-width: 1px;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-text51 {
            color: var(--dl-color-neutral-13);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .inputempty-checkbox7 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .inputempty-text53 {
            color: var(--dl-color-character-primary85);
            height: auto;
            text-align: center;
            line-height: 22px;
          }
          .inputempty-page-header {
            top: 0px;
            left: 0px;
            width: 1440px;
            height: 72px;
            display: flex;
            padding: 16px 24px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-layout-blockshorizontal2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .inputempty-headingleft {
            gap: 16px;
            display: flex;
            padding: 6px 0;
            overflow: hidden;
            flex-grow: 1;
            align-items: center;
          }
          .inputempty-wrapper1 {
            gap: 12px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .inputempty-text57 {
            color: var(--dl-color-character-title85);
            height: auto;
            text-align: left;
            line-height: 28px;
          }
          .inputempty-headingextra {
            gap: 8px;
            height: 32px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .inputempty-button1 {
            gap: 10px;
            display: flex;
            padding: 4px 15px;
            overflow: hidden;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
          }
          .inputempty-icon-wrapper1 {
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-◇-hitbox);
          }
          .inputempty-wrapper2 {
            width: 14px;
            height: 14px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .inputempty-union {
            top: 1.9056600332260132px;
            left: 2.046515464782715px;
            width: 10px;
            height: 10px;
            position: absolute;
            box-sizing: content-box;
          }
          .inputempty-text59 {
            color: var(--dl-color-primary-6);
            height: auto;
            text-align: center;
            line-height: 22px;
          }
          .inputempty-footer {
            gap: 12px;
            top: 2319px;
            left: 0px;
            width: 1440px;
            display: flex;
            padding: 16px 24px;
            position: absolute;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-button2 {
            gap: 10px;
            display: flex;
            padding: 4px 15px;
            align-items: center;
            border-color: rgba(217, 217, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            justify-content: center;
            background-color: var(--dl-color-neutral-3);
          }
          .inputempty-text61 {
            color: var(--dl-color-character-disabledplaceholder25);
            height: auto;
            text-align: center;
            line-height: 22px;
          }
          .inputempty-apersonbust {
            top: 2009px;
            left: 60px;
            width: 277px;
            height: 373px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .inputempty-body5 {
            top: 155.4774932861328px;
            left: 35.84418869018555px;
            width: 199px;
            height: 178.34898376464844px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .inputempty-sv-skin {
            top: -7.299412727355957px;
            left: -54.620384216308594px;
            width: 280px;
            height: 178px;
            position: absolute;
          }
          .inputempty-imag-top {
            top: 68.85780334472656px;
            left: 120.45532989501953px;
            width: 49px;
            height: 49px;
            position: absolute;
          }
          .inputempty-sv-ink {
            top: -1.7031445503234863px;
            left: -57.78961181640625px;
            width: 285px;
            height: 173px;
            position: absolute;
          }
          .inputempty-head {
            top: 43.796478271484375px;
            left: 90.70774841308594px;
            width: 115px;
            height: 138px;
            position: absolute;
          }
          .inputempty-face {
            top: 89.05284118652344px;
            left: 129.47799682617188px;
            width: 70px;
            height: 71.29092407226562px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .inputempty-sv-ink1 {
            top: 13.625541687011719px;
            left: 12.92328929901123px;
            width: 45px;
            height: 50px;
            position: absolute;
          }
          .inputempty-facialhair {
            top: 126.03643798828125px;
            left: 120.6998062133789px;
            width: 68px;
            height: 55.96217346191406px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .inputempty-sv-ink2 {
            top: 6.5695905685424805px;
            left: 29.504398345947266px;
            width: 37px;
            height: 40px;
            position: absolute;
          }
          .inputempty-mask {
            top: 112.16764831542969px;
            left: 96.31602478027344px;
            width: 97px;
            height: 55.47554016113281px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .inputempty-accesories {
            top: 102.43509674072266px;
            left: 102.16813659667969px;
            width: 96px;
            height: 33.577293395996094px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .inputempty-sv-ink3 {
            top: 2.433056354522705px;
            left: -0.48756086826324463px;
            width: 103px;
            height: 30px;
            position: absolute;
          }
          .inputempty-footer1 {
            gap: 12px;
            top: 2319px;
            left: 0px;
            width: 1440px;
            display: flex;
            padding: 16px 24px;
            position: absolute;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-button3 {
            gap: 10px;
            display: flex;
            padding: 4px 15px;
            align-items: center;
            border-color: rgba(217, 217, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            justify-content: center;
            background-color: var(--dl-color-neutral-3);
          }
          .inputempty-text63 {
            color: var(--dl-color-character-disabledplaceholder25);
            height: auto;
            text-align: center;
            line-height: 22px;
          }
          .inputempty-page-header1 {
            top: 0px;
            left: 0px;
            width: 1440px;
            height: 72px;
            display: flex;
            padding: 16px 24px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            background-color: var(--dl-color-neutral-1);
          }
          .inputempty-layout-blockshorizontal21 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .inputempty-headingleft1 {
            gap: 16px;
            display: flex;
            padding: 6px 0;
            overflow: hidden;
            flex-grow: 1;
            align-items: center;
          }
          .inputempty-wrapper3 {
            gap: 12px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .inputempty-text65 {
            color: var(--dl-color-character-title85);
            height: auto;
            text-align: left;
            line-height: 28px;
          }
          .inputempty-headingextra1 {
            gap: 8px;
            height: 32px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .inputempty-button4 {
            gap: 8px;
            display: flex;
            padding: 4px 15px;
            overflow: hidden;
            align-items: center;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            justify-content: center;
          }
          .inputempty-icon-wrapper2 {
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-◇-hitbox);
          }
          .inputempty-wrapper4 {
            width: 14px;
            height: 14px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .inputempty-union1 {
            top: 1.9056600332260132px;
            left: 2.046515464782715px;
            width: 10px;
            height: 10px;
            position: absolute;
          }
          .inputempty-text67 {
            color: var(--dl-color-primary-6);
            height: auto;
            text-align: center;
            line-height: 22px;
          }
        `}
      </style>
    </>
  )
}

export default Inputempty
