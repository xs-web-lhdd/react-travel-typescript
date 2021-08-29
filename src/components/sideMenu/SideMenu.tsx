import React from 'react';
import styles from './SideMenu.module.css'
import { sideMenuList } from './mockUp'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

export const SideMenu: React.FC = () => {
  return (
    <Menu mode='vertical' className={styles['side-menn']}>
      {
        sideMenuList.map((item, index) => (
          <Menu.SubMenu
            key={`side-menu-${index}`}
            title={<span><GifOutlined/>{item.title}</span>}
          >
            {item.subMenu.map((item, index) => (
              <Menu.SubMenu
                key={`sub-menu-${index}`}
                title={<span><GifOutlined/>{item.title}</span>}
              >
                {item.subMenu.map((item, index) => (
                  <Menu.Item
                    key={`sub-sub-menu-${index}`}
                  >
                    <span><GifOutlined/>{item}</span>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ))}
          </Menu.SubMenu>
        ))
      }
    </Menu>
  )
}