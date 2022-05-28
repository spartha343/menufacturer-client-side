import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import axiosInterseptor from '../../hooks/axiosInterseptor';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const retting = useRef(' ');
    const review = useRef(' ');
    const [rat, setret] = useState(0)

    const { isLoading, isError, data, error } = useQuery('userreview', () => {
        return axiosInterseptor({
            method: 'get',
            url: `/reviewget/${user.email}`
        }).then((res) => res.data).then(setret(data[0].rating))
    })


    const handleReview = e => {
        e.preventDefault();
        const rett = retting.current.value;
        const rev = review.current.value;

        const reviewData = { user: user.name, email: user.email, rating: rett, review: rev }

        return axiosInterseptor({
            method: 'post',
            url: `/reviewupdate/${user.email}`,
            data: reviewData
        }).then(
            e.target.reset()
        )

    }

    return (
        <div>
            <div class=" hero min-h-[30vh] bg-base-300">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 class="text-3xl font-bold flex items-baseline">
                            Your rating is {data?.rating}
                        </h1>
                        <p class="pb-6 flex items-center">
                            your review {data?.review}
                        </p>

                    </div>
                </div>
            </div>


            <form onSubmit={handleReview} class="card-body">
                <h1 className='text-5xl text-center'>Update Review</h1>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Retting</span>
                    </label>
                    <input ref={retting}  type="range" min="1"  max="5" class="range range-xs" step="1" />

                    <div class="rating w-full flex justify-between text-xs px-2">
                        <input type="radio" disabled name="rating-1" class="mask mask-star" />
                        <input type="radio" disabled name="rating-1" class="mask mask-star" />
                        <input type="radio" disabled name="rating-1" class="mask mask-star" />
                        <input type="radio" disabled name="rating-1" class="mask mask-star" />
                        <input type="radio" disabled name="rating-1" class="mask mask-star" />
                    </div>

                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Review</span>
                    </label>
                    <textarea ref={review} placeholder="review" class="input input-bordered" ></textarea>

                </div>
                <div class="form-control mt-6">
                    <button type='submit' class="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        Send Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;