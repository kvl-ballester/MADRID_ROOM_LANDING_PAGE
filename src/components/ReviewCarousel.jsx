import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ReviewCarousel.css';

const reviews = [
    { name: "John Doe", rating: 5, date: "2023-01-01", comment: "Amazing stay! Highly recommend." },
    { name: "Jane Smith", rating: 4, date: "2023-01-02", comment: "Great experience, very accommodating hosts." },
    { name: "Alice Johnson", rating: 5, date: "2023-01-03", comment: "Loved it! Will come back again." },
    { name: "Bob Brown", rating: 3, date: "2023-01-04", comment: "Good, but could be better." },
    { name: "Charlie Davis", rating: 4, date: "2023-01-05", comment: "Nice place, friendly hosts." },
    { name: "Diana Evans", rating: 5, date: "2023-01-06", comment: "Perfect stay, highly recommend." },
    { name: "Eve Foster", rating: 4, date: "2023-01-07", comment: "Very good experience." },
    { name: "Frank Green", rating: 5, date: "2023-01-08", comment: "Excellent, will visit again." },
    { name: "Grace Harris", rating: 4, date: "2023-01-09", comment: "Very nice, enjoyed my stay." },
    { name: "Henry Irving", rating: 5, date: "2023-01-10", comment: "Fantastic, highly recommend." }
];

const CAROUSEL_INTERVAL = 5000;

export default function ReviewCarousel() {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const reviewsPerPage = 2;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    useEffect(() => {
        if (isAutoPlay) {
            const interval = setInterval(() => {
                setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
            }, CAROUSEL_INTERVAL);

            return () => clearInterval(interval);
        }
    }, [isAutoPlay, totalPages]);

    const handleDotClick = (index) => {
        setIsAutoPlay(false);
        setCurrentPage(index);
    };

    const startIndex = currentPage * reviewsPerPage;
    const selectedReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

    return (
        <div className="review-carousel">
            <div className="reviews">
                {selectedReviews.map((review, index) => (
                    <div key={index} className="review">
                        <h3>{review.name}</h3>
                        <p>{t('review.rating')}: {"⭐".repeat(review.rating)}</p>
                        <p>{t('review.date')}: {review.date}</p>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentPage ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}