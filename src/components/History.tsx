import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import { Event } from '../types/types';
import '../styles/History.css';

export const History: React.VFC = () => {
  const eventLists: Event[] = [
    {
      id: 0,
      date: '2015-04',
      title: '早稲田大学　文化構想学部入学',
      eventDesc: '英語翻訳を専門に履修',
      isShowIcon: true,
      icon: <SchoolIcon />,
      iconColor: '#fff',
    },
    {
      id: 1,
      date: '2018-02 〜 2019-01',
      title: 'オーストラリア留学',
      eventDesc: 'ファームステイや現地大学への留学を経験',
      isShowIcon: true,
      icon: <SchoolIcon />,
      iconColor: '#fff',
    },
    {
      id: 2,
      date: '2020-04',
      title: '新卒でIT企業に入社',
      eventDesc: 'プログラマーとしてのキャリアをスタート',
      isShowIcon: true,
      icon: <BusinessIcon />,
      iconColor: '#fff',
    },
    {
      id: 3,
      date: '2020-06 〜 2021-05',
      title: 'Java 業務系Webアプリケーション開発',
      eventDesc: '初めての現場でPGとして参画し、最終的にサブリーダーを経験',
      isShowIcon: true,
      icon: <BusinessIcon />,
      iconColor: '#fff',
    },
    {
      id: 4,
      date: '2021-06 〜 2021-10',
      title: 'Flutter スマホアプリ開発',
      eventDesc: '社内プロジェクトにおいてFlutterでの画像解析アプリ開発を経験',
      isShowIcon: true,
      icon: <BusinessIcon />,
      iconColor: '#fff',
    },
    {
      id: 5,
      date: '2021-10 〜 2021-03',
      title: 'React Webアプリケーション開発',
      eventDesc: 'ReactでSPA開発を経験',
      isShowIcon: true,
      icon: <BusinessIcon />,
      iconColor: '#fff',
    },
  ];
  return (
    <div id="history">
      <div className="container">
        <div className="heading">
          <h2>History</h2>
        </div>
      </div>
      <div className="history-container">
        <VerticalTimeline className="timeline">
          {eventLists.map((value) => {
            return (
              <VerticalTimelineElement
                key={value.id}
                className="vertical-timeline-element--work vertical-timeline-element-date"
                contentStyle={{
                  background: '#fff',
                  color: '#3a3a3f',
                  border: '1px solid  #3a3a3f',
                }}
                contentArrowStyle={{ borderRight: '7px solid  #3a3a3f' }}
                date={value.date}
                dateClassName="date"
                iconStyle={{
                  background: '#3a3a3f',
                  color: value.isShowIcon ? value.iconColor : 'fff',
                }}
                icon={value.isShowIcon ? value.icon : ''}
              >
                <h3 className="vertical-timeline-element-title">
                  {value.title}
                </h3>
                <p>{value.eventDesc}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};
