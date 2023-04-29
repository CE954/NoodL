import './index.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addReview } from '../../store/reviews';
import { updateReview } from '../../store/reviews';
import { GrFormClose } from 'react-icons/gr';
import { BsStarFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const ReviewFormModal = ({setCurrentReview, currentReview}) => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const user = useSelector(state => state.session.user);

    const [body, setBody] = useState(currentReview.body);
    const [rating, setRating] = useState(currentReview.rating);
    const [activeRating, setActiveRating] = useState(currentReview.rating);

    useEffect(() => {
        setRating(currentReview.rating);
        setActiveRating(currentReview.rating);
    }, [currentReview.rating]);
    
    useEffect(() => {
        setBody(currentReview.body);
    }, [currentReview.body]);

    const starRating = () => {
        const hoverRating = activeRating || rating;

        const handleHover = (hoverRating) => {
            setActiveRating(hoverRating);
        };

        const handleClick = (clickedRating) => {
            setRating(clickedRating);
            setActiveRating(clickedRating);
        };

        return (
            <>
                {[1, 2, 3, 4, 5].map((index) => {
                    return (
                        <BsStarFill
                            key={index}
                            id='form-star'
                            className={
                                hoverRating >= index ? "star" : "star-empty"
                            }
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                            onClick={() => handleClick(index)}
                        />
                    );
                })}
            </>
        );
    };
    
    const closeReviewModal = () => {
        const form = document.getElementById('review-background');
        form.style.display = 'none';
    }
    
    return (
        <div id='review-background'> 
            <div className='review-form-modal'>
                    <GrFormClose id='close-review-form' onClick={closeReviewModal}/>
                <div id='review-header'>WRITE YOUR REVIEW</div>
                <div id='review-form'>
                    <label id='review-stars'>RATING:
                        <br/>
                        {starRating()}
                    </label>
                    <label id='review-form-body'>REVIEW:
                        <textarea id='review-body-input' value={ body } rows="8" cols="20" onChange={e => { setBody(e.target.value) }}>
                        </textarea>
                    </label>
                </div>
                <button id="submit-review" >SUBMIT</button>
            </div>
        </div>
    )
}

export default ReviewFormModal;