import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import axiosInterseptor from '../../hooks/axiosInterseptor';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const image = useRef(' ');
    const education = useRef(' ');
    const location = useRef(' ');
    const phone = useRef(' ');
    const LinkedIn = useRef(' ');
    const { isLoading, isError, data, error } = useQuery('myprofile', () => {
        return axiosInterseptor({
            method: 'get',
            url: `/userget/${user.email}`
        }).then((res) => res.data)
    })

    //handleuserUpdate
    const handleuserUpdate = (e) => {
        e.preventDefault();
        const img = image.current.value;
        const edu = education.current.value;
        const locat = location.current.value;
        const phon = phone.current.value;
        const linked = LinkedIn.current.value;

        const newdata = { img:img, education: edu, location: locat, phone: phon, linkedin: linked }
        return axiosInterseptor({
            method: 'post',
            url: `/userupdate/${data._id}`,
            data: newdata
        }).then(
            e.target.reset()
        )


    }


    return (
        <section className=''>
            <div class=" hero min-h-[30vh] bg-base-300">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="avatar">
                        <div class="w-24 mask mask-squircle">
                            <img src={data?.img} alt={data?.img} />
                        </div>
                    </div>
                    <div>

                        <h1 class="text-3xl font-bold flex items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                            {data?.name}
                        </h1>
                        <p class="pb-6 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg> 
                            {data?.email}
                        </p>
                        <p className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            User Role: {data?.Role}
                        </p>
                        <p className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            Education: {data?.education}
                        </p>
                        <p className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            location: {data?.location}
                        </p>
                        <p className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            phone: {data?.phone}
                        </p>
                        <p className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            linkedin: {data?.linkedin}
                        </p>

                    </div>
                </div>
            </div>
            <div className="min-h-[60vh]">
                <form onSubmit={handleuserUpdate} class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Image</span>
                        </label>
                        <input required ref={image} type="text" placeholder="Image" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">education</span>
                        </label>
                        <input required ref={education} type="text" placeholder="education" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">location</span>
                        </label>
                        <input required ref={location} type="text" placeholder="location" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Phone number</span>
                        </label>
                        <input required ref={phone} type="tel" placeholder="Phone number" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">LinkedIn</span>
                        </label>
                        <input required ref={LinkedIn} type="text" placeholder="LinkedIn" class="input input-bordered" />
                    </div>
                    <div class="form-control mt-6">
                        <button type='submit' class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            Update
                        </button>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default MyProfile;