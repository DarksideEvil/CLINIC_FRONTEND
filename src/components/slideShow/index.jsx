import { Slide } from 'react-slideshow-image';

const SlideShow = () => {

    const spanStyle = {
        padding: '20px',
        background: 'transparent',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }
      const slideImages = [
        {
          url: 'https://wallpapercave.com/wp/wp2528637.jpg',
          caption: ''
        },
        {
          url: 'https://medanalises.net/wp-content/uploads/2023/06/sa2-10.jpg',
          caption: ''
        },
        {
          url: 'https://p0.zoon.ru/preview/_DhAysp1ikpg-5W9wl_XzQ/2400x1500x75/1/7/6/original_5239c5cb40c08850138b9c0a_59ce4e4fa271d.jpg',
          caption: ''
        },
      ];

      return (
        <div className="slide-container pb-4">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      );
}
 
export default SlideShow;