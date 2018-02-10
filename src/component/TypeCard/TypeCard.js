import React,{Component} from 'react'
import { Card, Col, Row } from 'antd';

import styles from "./TypeCard.css";
import {Link} from 'react-router-dom';
const tabList = [{
    key: 'tab1',
    tab: 'tab1',
  }, {
    key: 'tab2',
    tab: 'tab2',
  }];
  
  const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
  };
  const tabListNoTitle = [{
    key: 'classify',
    tab: '软件分类',
  }];
  
  const contentListNoTitle = {
    classify: <p>article content</p>,
  };
  
export default class Header extends Component{
    state = {
        key: 'tab1',
        noTitleKey: 'classify',
      }
      onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
      }
    render(){
        return (
            <div>
              <Card
                style={{ width: '9rem',margin:"50px auto" }}
                tabList={tabListNoTitle}
                onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
              >
                {contentListNoTitle[this.state.noTitleKey]}
              </Card>
            </div>
          );
        
    }
}

