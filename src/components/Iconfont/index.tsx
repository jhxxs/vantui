/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'xunishebei' | 'dingshi' | 'kaiguan2' | 'daojishi' | 'xiangxia' | 'a-wodeweixuanze' | 'jia1' | 'kaiguan1' | 'jian1' | 'shezhi1' | 'banben' | 'gou' | 'gengduo' | 'fangjianguanli' | 'duanxian' | 'jiahao' | 'gonggexianshi' | 'a-shouyeweixuan' | 'paixude' | 'jiatingguanli' | 'kaiguan' | 'liebiaoxianshi' | 'paixu' | 'zhengyan' | 'biyan' | 'jian' | 'shezhi' | 'shibai' | 'chenggong' | 'fanhui' | 'fuzhi' | 'qianwang' | 'jia' | 'qingchu' | 'lanya' | 'saoyisao' | 'shouye' | 'wode' | 'wifi';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
