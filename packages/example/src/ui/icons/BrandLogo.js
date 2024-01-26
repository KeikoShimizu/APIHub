import React from 'react';

export const BrandLogo = props => {
    let path = props.img || 'besafebank-logo-vertical.png';
    return <img className={props.className} src={path} alt={'Logo'} />;
};
