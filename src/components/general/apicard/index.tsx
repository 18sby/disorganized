import * as React from 'react';
import './styles.scss';
import { ICardCmptProps } from './types';
import { Card, Row, Col, Button, Icon, Tooltip } from 'antd';
const { Meta } = Card;
import { Link } from 'react-router-dom';

const CardCmpt: React.SFC<ICardCmptProps> = (props: ICardCmptProps) => {
  const { iconSrc, title, desc, routePath } = props;
  return (
    <div className="card-cmpt-container">
      <Card
        hoverable
        style={{ width: 200 }}
      >
        <div className="icon-img-box">
          <img className="icon-img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt=""/>
        </div>
        <h3>我是标题</h3>
        <Row
          align="middle"
          type="flex"
          justify="center"
        >
          <Col span={11}>
            <Tooltip
              title="哈哈阿斯达四大撒哈哈阿斯达四大撒哈哈阿斯达四大撒哈哈阿斯达四大撒哈哈阿斯达四大撒哈哈阿斯达四大撒哈哈阿斯达四大撒哈哈阿斯达四大撒"
              autoAdjustOverflow
              placement="bottomRight"
            >
              <Button
                icon="info-circle"
                size="small"
              >
                功能
              </Button>
            </Tooltip>
          </Col>
          <Col span={11} offset={2}>
            <Button
              type="primary"
              size="small"
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/characterRecognition/test">使用</Link>
              <Icon type="right" />
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default CardCmpt;