import React from 'react';


class Gallery extends React.Component {
  render() {
    return (
 <div>
  <section className="hero-page bg-black-3">
    <div className="container">
      <h1 className="h2">Our Gallery</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
          <li aria-current="page" className="breadcrumb-item active">Gallery</li>
        </ol>
      </nav>
    </div>
  </section>
  <div id="grid-gallery" className="grid-gallery bg-black-2">
    <section className="grid-wrap pb-5">
      <ul className="grid">
        <li className="grid-sizer" />
        {/* for Masonry column width*/}
        <li>
          <figure><img src="img/thumb/1.jpg" alt="img01" />
            <figcaption>
              <h3>Letterpress asymmetrical</h3>
              <p>Chillwave hoodie ea gentrify aute sriracha consequat.</p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure><img src="img/thumb/2.jpg" alt="img02" />
            <figcaption>
              <h3>Vice velit chia</h3>
              <p>Laborum tattooed iPhone, Schlitz irure nulla Tonx retro 90's chia cardigan quis asymmetrical paleo.</p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure><img src="img/thumb/3.jpg" alt="img03" />
            <figcaption>
              <h3>Brunch semiotics</h3>
              <p>Ex disrupt cray yr, butcher pour-over magna umami kitsch before they sold out commodo.</p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure><img src="img/thumb/4.jpg" alt="img04" />
            <figcaption>
              <h3>Chillwave nihil occupy</h3>
              <p>In post-ironic gluten-free deserunt, PBR&amp;B non pork belly cupidatat polaroid. </p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure><img src="img/thumb/1.jpg" alt="img05" />
            <figcaption>
              <h3>Chillwave nihil occupy</h3>
              <p>In post-ironic gluten-free deserunt, PBR&amp;B non pork belly cupidatat polaroid. </p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure><img src="img/thumb/6.jpg" alt="img06" />
            <figcaption>
              <h3>Chillwave nihil occupy</h3>
              <p>In post-ironic gluten-free deserunt, PBR&amp;B non pork belly cupidatat polaroid.</p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure><img src="img/thumb/3.jpg" alt="img09" />
            <figcaption>
              <h3>Brunch semiotics</h3>
              <p>Ex disrupt cray yr, butcher pour-over magna umami kitsch before they sold out commodo. </p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure><img src="img/thumb/1.jpg" alt="img07" />
            <figcaption>
              <h3>Letterpress asymmetrical</h3>
              <p>Chillwave hoodie ea gentrify aute sriracha consequat.</p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure><img src="img/thumb/2.jpg" alt="img08" />
            <figcaption>
              <h3>Vice velit chia</h3>
              <p>Laborum tattooed iPhone, Schlitz irure nulla Tonx retro 90's chia cardigan quis asymmetrical paleo.</p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
    <section className="slideshow">
      <ul>
        <li>
          <figure>
            <figcaption>
              <h3>Letterpress asymmetrical</h3>
              <p>Kale chips lomo biodiesel stumptown Godard Tumblr, mustache sriracha tattooed cray aute slow-carb placeat delectus. Letterpress asymmetrical fanny pack art party est pour-over skateboard anim quis, ullamco craft beer.</p>
            </figcaption><img src="img/large/1.jpg" alt="img01" />
          </figure>
        </li>
        <li>
          <figure>
            <figcaption>
              <h3>Vice velit chia</h3>
              <p>Chillwave Echo Park Etsy organic Cosby sweater seitan authentic pour-over. Occupy wolf selvage bespoke tattooed, cred sustainable Odd Future hashtag butcher.</p>
            </figcaption><img src="img/large/2.jpg" alt="img02" />
          </figure>
        </li>
        <li>
          <figure>
            <figcaption>
              <h3>Brunch semiotics</h3>
              <p>IPhone PBR polaroid before they sold out meh you probably haven't heard of them leggings tattooed tote bag, butcher paleo next level single-origin coffee photo booth.</p>
            </figcaption><img src="img/large/3.jpg" alt="img03" />
          </figure>
        </li>
        <li>
          <figure>
            <figcaption>
              <h3>Chillwave nihil occupy</h3>
              <p>Vice cliche locavore mumblecore vegan wayfarers asymmetrical letterpress hoodie mustache. Shabby chic lomo polaroid, scenester 8-bit Portland Pitchfork VHS tote bag.</p>
            </figcaption><img src="img/large/4.jpg" alt="img04" />
          </figure>
        </li>
        <li>
          <figure>
            <figcaption>
              <h3>Chillwave nihil occupy</h3>
              <p>Vice cliche locavore mumblecore vegan wayfarers asymmetrical letterpress hoodie mustache. Shabby chic lomo polaroid, scenester 8-bit Portland Pitchfork VHS tote bag.</p>
            </figcaption><img src="img/large/5.jpg" alt="img05" />
          </figure>
        </li>
        <li>
          <figure>
            <figcaption>
              <h3>Chillwave nihil occupy</h3>
              <p>Vice cliche locavore mumblecore vegan wayfarers asymmetrical letterpress hoodie mustache. Shabby chic lomo polaroid, scenester 8-bit Portland Pitchfork VHS tote bag.</p>
            </figcaption><img src="img/large/6.jpg" alt="img06" />
          </figure>
        </li>
        <li>
          <figure>
            <figcaption>
              <h3>Chillwave nihil occupy</h3>
              <p>Vice cliche locavore mumblecore vegan wayfarers asymmetrical letterpress hoodie mustache. Shabby chic lomo polaroid, scenester 8-bit Portland Pitchfork VHS tote bag.</p>
            </figcaption><img src="img/large/4.jpg" alt="img07" />
          </figure>
        </li>
        <li>
          <figure>
            <figcaption>
              <h3>Chillwave nihil occupy</h3>
              <p>Vice cliche locavore mumblecore vegan wayfarers asymmetrical letterpress hoodie mustache. Shabby chic lomo polaroid, scenester 8-bit Portland Pitchfork VHS tote bag.</p>
            </figcaption><img src="img/large/5.jpg" alt="img08" />
          </figure>
        </li>
        <li>
          <figure>
            <figcaption>
              <h3>Chillwave nihil occupy</h3>
              <p>Vice cliche locavore mumblecore vegan wayfarers asymmetrical letterpress hoodie mustache. Shabby chic lomo polaroid, scenester 8-bit Portland Pitchfork VHS tote bag.</p>
            </figcaption><img src="img/large/6.jpg" alt="img09" />
          </figure>
        </li>
      </ul>
      <nav><span className="icon nav-prev" /><span className="icon nav-next" /><span className="icon nav-close" /></nav>
      <div className="info-keys icon">Navigate with arrow keys</div>
    </section>
  </div></div>

    );
  }
}
export default Gallery;