import React from 'react';
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
  touristRoutedId: string
}

export const Detail: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  return <div>旅游路线详情页面，路线ID：{props.match.params.touristRoutedId}</div>
}