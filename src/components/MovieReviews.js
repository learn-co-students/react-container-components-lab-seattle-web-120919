// Code MovieReviews Here
import React from 'react';
import { render } from 'enzyme';

const MovieReviews = ({reviews}) => (
    <div className="review-list">
      {reviews.map(Review)}
    </div>
)

const Review = ({ headline, display_title, byline, publication_date, link, summary_short, multimedia }) => {
    return (
      <div key={display_title} className="review"> 
        <header>
          <a className="review-link" href={link.url}>
            {headline}
          </a>
          <br/>
          <span className="author">By: {byline}</span><br/>
          <span className="publish_date">Published: {publication_date}</span>
        </header>
        <blockquote>{summary_short}</blockquote>
        <img src={ multimedia.src }></img>
      </div>
    );
  };

  MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews;

