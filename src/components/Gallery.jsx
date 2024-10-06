import React from 'react'

const Gallery = () => {

    const gallery = [
        "/public/images/img1.jpg",
        "/public/images/img2.jpg",
        "/public/images/img3.jpg",
        "/public/images/img4.jpg",
        "/public/images/img7.jpg",
        "/public/images/img8.jpg",
        "/public/images/img5.jpg",
        "/public/images/img6.jpg",
    ];

  return (
    <section className="gallery">
        <h1>BETTER BEATS BEST</h1>
        <div className="images">
            <div>
                {gallery.slice(0,3).map((element, index) =>(
                    <img key={index} src={element} alt='galleryImage'/>
                ))}
            </div>
            <div>
                {gallery.slice(3,6).map((element, index) =>(
                    <img key={index} src={element} alt='galleryImage'/>
                ))}
            </div>
            <div>
                {gallery.slice(6,9).map((element, index) =>(
                    <img key={index} src={element} alt='galleryImage'/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Gallery