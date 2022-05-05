import { css } from "@linaria/core"
import { View } from "@tarojs/components"
import React from "react"
import "./index.scss"

export default () => {
  return (
    <>
      <View
        className={css`
          font-family: "Courier New", Courier, monospace;
          width: 26ch;
          white-space: nowrap;
          overflow: hidden;
          animation: typing 10s steps(26, end) infinite;
          color: #fff;
          padding: 300px 0 32px;
          box-sizing: border-box;
          @keyframes typing {
            0% {
              width: 0;
            }
            50% {
              width: 26ch;
            }
            100% {
              width: 0;
            }
          }
        `}
      >
        Pure CSS Typing animation.
      </View>
    </>
  )
}
