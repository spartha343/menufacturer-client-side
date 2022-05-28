import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/MNS03qq/DVVMRgz-VMAA-s4n.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Looks like You Are Lost</h1>
                        <p class="py-6"></p>
                        <Link to={'/'}>
                            <button class="btn btn-primary">Go TO home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;