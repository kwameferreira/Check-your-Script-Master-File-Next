import React from 'react'
import Head from 'next/head'

const ModalBasicbutton = (props) => {
  return (
    <>
      <div className="modal-basicbutton-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="modal-basicbutton-dummy-container">
          <button className="modal-basicbutton-modal-basicbutton">
            <div className="modal-basicbutton-header">
              <div className="modal-basicbutton-text-title">
                <span className="modal-basicbutton-text H5bold">
                  <span>What is the goal of your study?</span>
                </span>
              </div>
              <img
                alt="CloseI1573"
                src="/external/closei1573-tcc.svg"
                className="modal-basicbutton-close"
              />
            </div>
            <div className="modal-basicbutton-content">
              <div className="modal-basicbutton-textarea">
                <span className="modal-basicbutton-text2 Bodyregular">
                  <span>Describe your goal   </span>
                </span>
                <div className="modal-basicbutton-bottom">
                  <img
                    alt="ResizerI1573"
                    src="/external/resizeri1573-6aw3.svg"
                    className="modal-basicbutton-resizer"
                  />
                </div>
              </div>
            </div>
            <div className="modal-basicbutton-footer">
              <button className="modal-basicbutton-button-group">
                <button className="modal-basicbutton-button">
                  <span className="modal-basicbutton-text4 Buttonssmallandmedium">
                    <span>Save</span>
                  </span>
                </button>
              </button>
            </div>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .modal-basicbutton-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .modal-basicbutton-dummy-container {
            width: 100%;
            height: 900px;
            position: relative;
          }
          .modal-basicbutton-modal-basicbutton {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 438px;
            bottom: 0px;
            height: 222px;
            margin: auto;
            display: flex;
            overflow: hidden;
            position: absolute;
            box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.11999999731779099);
            align-items: center;
            flex-shrink: 0;
            border-radius: 6px;
            flex-direction: column;
            background-color: var(--dl-color-conditional-popover);
          }
          .modal-basicbutton-header {
            gap: 36px;
            display: flex;
            padding: 16px 24px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-1);
          }
          .modal-basicbutton-text-title {
            gap: 4px;
            display: flex;
            overflow: hidden;
            align-items: center;
          }
          .modal-basicbutton-text {
            color: var(--dl-color-character-title85);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .modal-basicbutton-close {
            width: 16px;
            height: 16px;
          }
          .modal-basicbutton-content {
            gap: 10px;
            display: flex;
            padding: 24px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .modal-basicbutton-textarea {
            display: flex;
            padding: 5px 12px;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(217, 217, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-neutral-1);
          }
          .modal-basicbutton-text2 {
            color: var(--dl-color-character-disabledplaceholder25);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 22px;
          }
          .modal-basicbutton-bottom {
            width: 500px;
            height: 0.0010000000474974513px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
          }
          .modal-basicbutton-resizer {
            top: -5.3525390625px;
            left: 501.646484375px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .modal-basicbutton-footer {
            gap: 8px;
            display: flex;
            padding: 10px 16px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
            background-color: var(--dl-color-neutral-1);
          }
          .modal-basicbutton-button-group {
            gap: 8px;
            display: flex;
            align-items: center;
            background-color: var(--dl-color-conditional-popover);
          }
          .modal-basicbutton-button {
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
          .modal-basicbutton-text4 {
            color: var(--dl-color-character-disabledplaceholder25);
            height: auto;
            text-align: center;
            line-height: 22px;
          }
        `}
      </style>
    </>
  )
}

export default ModalBasicbutton
