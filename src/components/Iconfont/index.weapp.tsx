/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import Taro from '@tarojs/taro';

export type IconNames = 'xunishebei' | 'dingshi' | 'kaiguan2' | 'daojishi' | 'xiangxia' | 'a-wodeweixuanze' | 'jia1' | 'kaiguan1' | 'jian1' | 'shezhi1' | 'banben' | 'gou' | 'gengduo' | 'fangjianguanli' | 'duanxian' | 'jiahao' | 'gonggexianshi' | 'a-shouyeweixuan' | 'paixude' | 'jiatingguanli' | 'kaiguan' | 'liebiaoxianshi' | 'paixu' | 'zhengyan' | 'biyan' | 'jian' | 'shezhi' | 'shibai' | 'chenggong' | 'fanhui' | 'fuzhi' | 'qianwang' | 'jia' | 'qingchu' | 'lanya' | 'saoyisao' | 'shouye' | 'wode' | 'wifi';

interface Props {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  // @ts-ignore
  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
