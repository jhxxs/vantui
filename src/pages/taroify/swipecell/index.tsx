import { useCallback, useState } from "react"
import { Cell, SwipeCell, Button } from "@taroify/core"
import { showModal } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { css } from "@linaria/core"

export default () => {
  const listTemp = Array.from(
    {
      length: 8
    },
    (_v, i) => ({
      value: i,
      id: Math.random().toString(36).slice(-6)
    })
  )

  const [list, setList] = useState(listTemp)

  const handleDelete = useCallback(async (index: number, value: any) => {
    const res = await showModal({
      title: `删除${value}`
    })
    if (res.confirm) {
      setList((s) => {
        s.splice(index, 1)
        return [...s]
      })
    }
  }, [])

  return (
    <>
      <Cell.Group
        className={css`
          margin: 0;
          .taroify-cell {
            margin-bottom: 32px;
            &-group {
              background: transparent;
            }
          }
        `}
        inset
        bordered={false}
      >
        {list.map((v, index) => (
          <SwipeCell
            key={v.id}
            // onOpen={(e) => {
            //   console.log("😅 SwipeCell open", e)
            // }}
          >
            <Cell bordered={false} title={v.id} rightIcon={v.value} />
            <SwipeCell.Actions side="right">
              <View
                className={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: 0 32px 0 0px;
                `}
                // onClick={(e) => e.stopPropagation()}
              >
                <Button
                  size="small"
                  color="danger"
                  onClick={async (e) => {
                    e.stopPropagation()
                    const res = await showModal({
                      title: `删除${v.id}`
                    })
                    if (res.confirm) {
                      setList((s) => {
                        s.splice(index, 1)
                        return [...s]
                      })
                    }
                  }}
                >
                  删除
                </Button>
              </View>
            </SwipeCell.Actions>
          </SwipeCell>
        ))}
      </Cell.Group>
    </>
  )
}
