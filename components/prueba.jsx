import React from 'react';

const planet = 'Earth';
const i = 1;
const getPlanet = () => 'Earth';
const img = 'https://mpng.subpng.com/20180702/pbz/kisspng-cookie-monster-computer-icons-http-cookie-clip-art-5b39d2bb8ec2d4.2988863215305161555848.jpg';
const imageProps = {
    src:'https://mpng.subpng.com/20180702/pbz/kisspng-cookie-monster-computer-icons-http-cookie-clip-art-5b39d2bb8ec2d4.2988863215305161555848.jpg',
    alt:'Cookie Monster'
};


const Prueba = () => (
<>
<h1>Hello {planet}</h1>
<div>Num {i + 1}</div>
<div>{getPlanet()}</div>
<img src={img}/> 
<img {...imageProps}/> 
</>
)

export default Prueba;