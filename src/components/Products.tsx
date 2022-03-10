import React from 'react';
import { ProductItem } from '../types/types';
import 'devicon';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import HouseImage from '../images/house-marketplage-img.png';
import PortfolioImage from '../images/portfolio-img.png';
import '../styles/Products.css';

export const Products: React.VFC = () => {
  const productItems: ProductItem[] = [
    {
      id: 0,
      title: 'Portfolio',
      desc: '自己紹介ページが欲しいと思って作成しました.',
      img: PortfolioImage,
      techs: [
        'devicon-react-original',
        'devicon-materialui-plain',
        'devicon-sass-original',
      ],
      link: 'https://competent-bassi-8c22c7.netlify.app/',
      gitLink: 'https://github.com/RyomaArisawa/react-portfolio-site',
    },
    {
      id: 1,
      title: 'House Market Place',
      desc: 'Reactの自己学習のために作成しました。',
      img: HouseImage,
      techs: ['devicon-javascript-plain'],
      link: 'https://house-marketplace-app-c371a.web.app/',
      gitLink: 'https://github.com/RyomaArisawa/house-marketplace',
    },
  ];
  return (
    <div id="products">
      <div className="container">
        <div className="heading">
          <h2>Products</h2>
        </div>
        <div className="products-container">
          <Grid container spacing={4}>
            {productItems.map((value) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={value.id}>
                  <Card
                    className="card"
                    onClick={() => window.open(value.link, '_blank')}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={value.img}
                        style={{ height: 180, paddingTop: '0' }}
                        title={value.title + 'img'}
                      />
                      <CardContent className="content">
                        <div className="productTitle">
                          <Typography
                            gutterBottom
                            component="h2"
                            className="cardTitle"
                          >
                            {value.title}
                          </Typography>
                          <GitHubIcon
                            className="linkIcon"
                            onClick={() => window.open(value.gitLink, '_blank')}
                          />
                        </div>
                        <Typography
                          variant="body2"
                          component="p"
                          className="desc"
                        >
                          {value.desc}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};
