import * as React from 'react';
import { IHomePageProps, IHomePageState } from './types';
import { Row, Col, Menu, Icon, Card, PageHeader } from 'antd';
const { SubMenu } = Menu;
const { Meta } = Card;
import './styles.scss';



class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  constructor(props: IHomePageProps) {
    super(props);
    const { author } = props;
    this.state = {
      leftMenu: [
        {
          key: 'speechTechnology',
          value: '语音技术'
        },
        {
          key: 'characterRecognition',
          value: '文字识别'
        },
        {
          key: 'imageRecognition',
          value: '图像识别'
        }
      ],
      leftMenuKeys: []
    }
  }

  public handleClick(e: any) {
    console.log( '点击的菜单', e );
  }

  public render() {
    const { leftMenu, leftMenuKeys } = this.state;
    leftMenu.forEach(menu => {
      leftMenuKeys.push( menu.key );
    });
    
    return (
      <div className="homepage-container">
        <PageHeader
          title="专治无聊"
          subTitle="无聊就来查查吧"
        />
        
        <Row>
          <Col span={6}>
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={ [''] }
            defaultOpenKeys={ leftMenuKeys }
            mode="inline"
            theme="dark"
          >
            <SubMenu
                key="all"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>所有分类</span>
                  </span>
                }
              >
              { leftMenu.map(el => {
                return (
                  <Menu.Item key={ el.key } onClick={ () => { this.handleClick } }>
                    { el.value }
                  </Menu.Item>
                )
              }) }
            </SubMenu>
          </Menu>
          </Col>
          
          <Col offset={2} span={16}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;