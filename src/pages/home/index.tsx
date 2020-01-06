import * as React from 'react';
import { IHomePageProps } from './types';
import { Row, Col } from 'antd';
import './styles.scss';

class HomePage extends React.Component<IHomePageProps> {
  constructor(props: IHomePageProps) {
    super(props);
    const { author } = props;
    this.state = {
      
    }
  }

  public render() {
    return (
      <div className="home-container">
        哈哈
        <p className="text">实打实大</p>
      </div>
    );
  }
}

export default HomePage;