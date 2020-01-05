import * as React from 'react';
import { Button } from 'antd';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
require( 'antd/dist/antd.css' );

export interface IHomePageProps {
  name: string;
}

class HomePage extends React.Component<IHomePageProps, {}> {
  constructor(props: IHomePageProps) {
    super(props);
    this.state = {
      
    }
  }

  public onChange(data: any, dataString: any) {
    console.log( data, dataString );
  }

  public render() {
    const { name } = this.props;
    return (
      <div>
        hello app, I am { name }
        <Button type="primary">from antd</Button>
        <DatePicker onChange={ this.onChange } />
      </div>
    );
  }
}

export default HomePage;