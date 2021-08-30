import React from 'react';
import { Header, Footer, SideMenu, Carousel, ProductCollection, BusinessPartners } from '../../components/index'
import { Col, Row, Typography } from 'antd'
import { productList1 } from './mockups'
import styles from './home.module.css'
import sideImage1 from '../../assets/images/sider_2019_02-04.png'

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        {/* 页面内容 */}
        <div className={styles['page-content']}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu/>
            </Col>
            <Col span={18}>
              <Carousel/>
            </Col>
          </Row>
          <ProductCollection
            title={<Typography.Title level={3} type="warning">爆款推荐</Typography.Title>}
            sideImage={sideImage1}
            products={productList1}
          />
          <ProductCollection
            title={<Typography.Title level={3} type="danger">新品上市</Typography.Title>}
            sideImage={sideImage1}
            products={productList1}
          />
          <ProductCollection
            title={<Typography.Title level={3} type="danger">国内游推荐</Typography.Title>}
            sideImage={sideImage1}
            products={productList1}
          />
        </div>
        <BusinessPartners/>
        <Footer></Footer>
      </div>
    )
  }
}

