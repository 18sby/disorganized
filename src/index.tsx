import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IHomePageProps {
  name: string;
}

class HomePage extends React.Component<IHomePageProps, {}> {
  constructor(props: IHomePageProps) {
    super(props);
    this.state = {
      
    }
  }

  public render() {
    const { name } = this.props;
    return (
      <div>
        hello app, I am { name }
      </div>
    );
  }
}

export default HomePage;