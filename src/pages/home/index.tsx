import * as React from 'react';
import { IHomePageProps, IHomePageState } from './types';
import { Row, Col, Menu, Icon, Card, PageHeader } from 'antd';
const { SubMenu } = Menu;
const { Meta } = Card;
import './styles.scss';
import SpeechTechnology from '../../components/speech';
import CharacterRecognition from '../../components/character';
import TestPage from '../../components/testPage';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

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
      leftMenuKeys: [],
      selectedMenu: 'imageRecognition',
    }
  }

  public handleClick = (e: any) => {
    console.log( '点击的菜单', e, this );
    const map: any = {
      'speechTechnology': SpeechTechnology,
      'characterRecognition': CharacterRecognition
    }
    this.setState({
      selectedMenu: e.key
    })
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
                    <Link to={`/${el.key}`}>{ el.value }</Link>
                  </Menu.Item>
                )
              }) }
            </SubMenu>
          </Menu>
          </Col>
          
          <Col offset={2} span={16}>
            <Route exact path="/speechTechnology" component={ SpeechTechnology } />
            <Route exact path="/characterRecognition" component={ CharacterRecognition } />
            <Route path="/characterRecognition/test" component={ TestPage } />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;