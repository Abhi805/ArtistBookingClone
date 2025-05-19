import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ArtistDetail.css';
import { useParams } from 'react-router-dom';

const ArtistDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { id } = useParams();

  return (
    <div className="artist-detail-page bg-light">
      {/* Header Section */}
      <div className="container py-5 text-center">
        <h2 className="display-5 fw-bold" data-aos="fade-down">Artist Profile</h2>
        <p className="text-muted" data-aos="fade-up">Explore details about <strong>{id}</strong></p>
      </div>

      {/* Main Content */}
      <div className="container-fluid px-0">
        {/* Top Section */}
        <div className="row g-0 bg-primary text-white align-items-center p-4" data-aos="fade-up">
          <div className="col-lg-3 text-center mb-3 mb-lg-0">
            <img
              src="https://via.placeholder.com/250x300"
              alt={id}
              className="img-fluid rounded shadow-lg artist-main-img"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold">{id}</h2>
            <p>⭐ 4.7 (7430 reviews)</p>
            <p>Available for corporate events, weddings, and fests. Contact & pricing info below.</p>
          </div>
          <div className="col-lg-3">
            <form className="bg-white p-4 rounded shadow text-dark">
              <h5 className="mb-3">Book Now</h5>
              <input type="text" placeholder="Your Name" className="form-control mb-3" />
              <input type="email" placeholder="Email" className="form-control mb-3" />
              <input type="text" placeholder="Event Type" className="form-control mb-3" />
              <input type="text" placeholder="City" className="form-control mb-3" />
              <button className="btn btn-danger w-100">SUBMIT</button>
            </form>
          </div>
        </div>

        {/* Info Grid */}
        <div className="container py-4">
          <div className="row text-center gy-3" data-aos="fade-up">
            <div className="col-6 col-md-3">⏱ 60-90 Mins</div>
            <div className="col-6 col-md-3">👥 1-2 Members</div>
            <div className="col-6 col-md-3">🌍 Worldwide</div>
            <div className="col-6 col-md-3">🗣 English/Hindi</div>
          </div>
        </div>

        {/* About Section */}
        <div className="container py-4" data-aos="fade-up">
          <h4 className="fw-bold mb-3">About {id}</h4>
          <p className="text-muted">
            {id} is a talented performer known for their exciting shows and audience engagement. Perfect for a variety of events.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Photo Gallery</h5>
          <div className="row g-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="col-6 col-md-4">
                <img
                  src={`https://via.placeholder.com/300x200?text=Photo+${i + 1}`}
                  className="img-fluid rounded shadow-sm hover-zoom"
                  alt={`${id} Show ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Video Gallery</h5>
          <div className="row g-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title={`Video ${i + 1}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Artists */}
        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Similar Artists</h5>
          <div className="row g-3">
            {['Amar', 'Appurv', 'Lakshay', 'Rajnish'].map((name, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="card h-100 shadow-sm text-center border-0">
                  <img
                    src="https://via.placeholder.com/200x150"
                    className="card-img-top rounded-top"
                    alt={name}
                  />
                  <div className="card-body">
                    <h6 className="fw-semibold">Comedian {name}</h6>
                    <p className="text-muted">Starts ₹30,000+</p>
                    <button className="btn btn-outline-danger btn-sm">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Section */}
        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Review {id}</h5>
          <textarea className="form-control mb-3" rows="3" placeholder="Write your review..."></textarea>
          <button className="btn btn-primary">Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
