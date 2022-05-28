import React from 'react';

const HomeFeatured = () => {
    return (
        <section>
            <h1 className='text-center text-5xl font-bold my-20'>See Wtomer Says</h1>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFeatured;