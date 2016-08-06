import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.less'

import { Cascader } from 'antd'

const options = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu1',
      label: '西湖1'
    }, {
      value: 'xihu2',
      label: '西湖2'
    }]
  }]
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门'
    }]
  }]
}]

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <Cascader options={options} placeholder='请选择地区' />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
