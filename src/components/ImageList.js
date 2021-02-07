import react from 'react';

const ImageList = (props) =>{

    const images = props.images.map( (image) => {
        return <img style={{width:'60vh', height:'30vh'}} alt={image.description} key={image.id} src={image.urls.regular}/>
    });

    return (<div>{images}</div>);
}

export default ImageList;