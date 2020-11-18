/*
 * @Author       : leohua
 * @Date         : 2020-11-11 23:00:21
 * @LastEditTime : 2020-11-18 00:39:19
 * @LastEditors  : leohua
 * @Description  : test
 */

'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import logo from './images/test.png';
import './search.less';

class Search extends React.Component {
  render() {
    return <div className="search-text">
      Search Texddddt<img src={ logo }/>
    </div>;
  }
}

ReactDom.render(
  <Search />,
  document.getElementById('root')
)