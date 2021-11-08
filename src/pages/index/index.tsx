/*
 * @LastEditTime: 2021-11-08 10:45:58
 * @Date: 2021-11-08 10:12:04
 * @Author: Kyle
 * @LastEditors: Kyle
 */
import { Cell, CellGroup, Radio, RadioGroup } from "@antmjs/vantui"
import React, { useState } from "react"
import "./index.less"

const Index = () => {
	const [radio, setRadio] = useState("1")

	function onChange(e) {
		console.log("onChange:", e)
	}

	function onClick(e) {
		console.log("onClick:", e)
		console.log(e.currentTarget.dataset)
	}

	return (
		<>
			<RadioGroup value={`${radio}`} onChange={onChange}>
				<CellGroup title="renderRightIcon，显示radio">
					<Cell
						title="单选框 1"
						clickable={true}
						dataName="1"
						onClick={onClick}
						renderRightIcon={<Radio name="1" />}
					/>
					<Cell
						title="单选框 2"
						clickable={true}
						dataName="2"
						onClick={onClick}
						renderRightIcon={<Radio name="2" />}
					/>
				</CellGroup>
			</RadioGroup>
			<RadioGroup value={radio} onChange={onChange}>
				<CellGroup title="使用render，不显示radio">
					<Cell
						title="单选框 1"
						clickable={true}
						dataName="1"
						onClick={onClick}
						renderRight={<Radio name="1" />}
					/>

					<Cell
						title="单选框 2"
						clickable={true}
						dataName="2"
						onClick={onClick}
						renderRight={<Radio name="2" />}
					/>
				</CellGroup>
			</RadioGroup>
		</>
	)
}

export default Index
