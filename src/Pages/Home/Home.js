import React from 'react';
import Banner from './Banner';
import BuisnessSummary from './BuisnessSummary';
import HomeFeatured from './HomeFeatured';
import HomeReviews from './HomeReviews';
import HomeSignup from './HomeSignup';
import ProductsCarousl from './ProductsCarousl';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductsCarousl></ProductsCarousl>
            <BuisnessSummary></BuisnessSummary>
            <HomeReviews></HomeReviews>
            <HomeFeatured></HomeFeatured>
            <HomeSignup></HomeSignup>
        </div>
    );
};

export default Home;