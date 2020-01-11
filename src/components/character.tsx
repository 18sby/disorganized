import * as React from 'react';
import CardCmpt from './general/apicard';
import { ICardCmptProps } from './general/apicard/types'

const CharacterCom: React.SFC = () => {
  const cardProps: ICardCmptProps = {
    iconSrc: '12',
    title: '哈哈',
    desc: '测试',
    routePath: '/asdas'
  };
  
  return (
    <div>
      <CardCmpt { ...cardProps } />
    </div>
  );
};

export default CharacterCom;