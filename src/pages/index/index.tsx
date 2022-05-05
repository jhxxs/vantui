/*
 * @LastEditTime: 2021-11-08 16:09:37
 * @Date: 2021-11-08 10:12:04
 * @Author: Kyle
 * @LastEditors: Kyle
 */
import { Button, Cell, Popup, Radio } from "@taroify/core"
import { Text, View } from "@tarojs/components"
import { navigateTo, nextTick, pageScrollTo } from "@tarojs/taro"
import { useMount } from "ahooks"
import { useState } from "react"
import { Pages } from "@/app.config"
import {
  NavigationBar,
  PageMeta
} from "tarojs-plugin-platform-miniprogram/dist/components"
import IconFont from "@/components/Iconfont/index.weapp"

import { css } from "@linaria/core"

const Index = () => {
  const [radio, setRadio] = useState("1")

  const [show, setShow] = useState(false)

  const onClick = (event) => {
    const { name } = event.currentTarget.dataset
    console.log(event, name)

    setRadio(name)
  }

  useMount(() => {
    console.log("mount")

    nextTick(() => {
      pageScrollTo({
        scrollTop: 10000,
        duration: 200
      })
    })
  })

  return (
    <>
      <PageMeta pageStyle={`${show ? "overflow:hidden;" : ""}`}>
        <NavigationBar frontColor="#000" />
      </PageMeta>

      <Popup placement="bottom" open={show} onClose={setShow} rounded>
        <View
          style={{
            padding: 30,
            minHeight: 400
          }}
        >
          弹窗内容
        </View>
      </Popup>

      <Radio.Group value={radio}>
        <Cell.Group title="renderRightIcon，显示radio">
          <Cell
            title="单选框 1"
            clickable={true}
            onClick={(e) => {
              onClick({
                detail: e.detail,
                currentTarget: {
                  dataset: {
                    name: "1"
                  }
                },
                target: {
                  dataset: {
                    name: "1"
                  }
                }
              })
            }}
            rightIcon={<Radio name="1" />}
          />
          <Cell
            title="单选框 2"
            clickable={true}
            onClick={(e) => {
              onClick({
                detail: e.detail,
                currentTarget: {
                  dataset: {
                    name: "2"
                  }
                },
                target: {
                  dataset: {
                    name: "2"
                  }
                }
              })
            }}
            rightIcon={<Radio name="2" />}
          />
        </Cell.Group>
      </Radio.Group>

      <View>
        Dave found joy in the daily routine of life. He awoke at the same time,
        ate the same breakfast and drove the same commute. He worked at a job
        that never seemed to change and he got home at 6 pm sharp every night.
        It was who he had been for the last ten years and he had no idea that
        was all about to change. I guess we could discuss the implications of
        the phrase "meant to be." That is if we wanted to drown ourselves in a
        sea of backwardly referential semantics and other mumbo-jumbo. Maybe
        such a discussion would result in the determination that "meant to be"
        is exactly as meaningless a phrase as it seems to be, and that none of
        us is actually meant to be doing anything at all. But that's my
        existential underpants underpinnings showing. It's the way the cookie
        crumbles. And now I want a cookie. The song came from the bathroom
        belting over the sound of the shower's running water. It was the same
        way each day began since he could remember. It listened intently and
        concluded that the singing today was as terrible as it had ever been.
        Patricia's friend who was here hardly had any issues at all, but she
        wasn't telling the truth. Yesterday, before she left to go home, she
        heard that her husband is in the hospital and pretended to be surprised.
        It later came out that she was the person who had put him there. The
        irony of the situation hadn't escaped her. She had taken years to sculpt
        the perfect persona with the perfect look that she shared on Instagram.
        She knew her hundreds of thousands of followers envied that life she
        showed and stayed engaged with her because they wanted that life too.
        The truth was that she wanted the perfect life she portrayed more than
        any of her fans. The fact was that despite all the perfection she shared
        on social media, her life was actually more of a mess than most. "Are
        you getting my texts???" she texted to him. He glanced at it and
        chuckled under his breath. Of course he was getting them, but if he
        wasn't getting them, how would he ever be able to answer? He put the
        phone down and continued on his project. He was ignoring her texts and
        he planned to continue to do so. It wasn't quite yet time to panic.
        There was still time to salvage the situation. At least that is what she
        was telling himself. The reality was that it was time to panic and there
        wasn't time to salvage the situation, but he continued to delude himself
        into believing there was. The spot was perfect for camouflage. At least
        that's what she thought when she picked the spot. She couldn't imagine
        that anyone would ever be able to see her in these surroundings. So
        there she sat, confident that she was hidden from the world and safe
        from danger. Unfortunately, she had not anticipated that others may be
        looking upon her from other angles, and now they were stealthily
        descending toward her hiding spot.
      </View>
      <View
        className={css`
          padding: 32px;
          padding-bottom: calc(env(safe-area-inset-bottom, 20px));
        `}
      >
        <Button
          onClick={() =>
            navigateTo({
              url: `/${Pages.animation}`
            })
          }
          block
          className={css`
            font-family: monospace;
            margin-bottom: 20px;
          `}
          color="info"
        >
          see animation
        </Button>

        <Button
          color="primary"
          block
          onClick={() => {
            setShow(true)
          }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <IconFont name="banben" color="#fff" size={32} />
            <Text style={{ marginLeft: 10 }}>点击显示弹窗</Text>
          </View>
        </Button>
      </View>
    </>
  )
}

export default Index
