import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import axiosInterseptor from '../../hooks/axiosInterseptor';

const ProductsCarousl = () => {
    const { id } = useParams();
    const { isLoading, isError, data, error } = useQuery('taskds', () => {
        return axiosInterseptor({
            url: `/productget`
        }).then((res) => res.data)
    })
    //console.log(data);
    if (isLoading) {
        return <h2>loading ... </h2>
    }
    const handleaddToPurchase=()=>{
        
    }
    return (
        <section className='bg-base-100 shadow-xl pb-20'>
            <h1 className='text-center text-5xl font-bold my-20 '>Our Products</h1>
            <div class="carousel carousel-center rounded-box">
                <div class="carousel-item p-2">
                    {
                        data?.map((p, index) =>
                            <div id={`car${index}`} class="card w-72 bg-base-100 shadow-xl m-5">
                                <figure><img src={p.pic} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">{p.name}</h2>
                                    <p>{p.dis}</p>

                                    <p><b>minimum order quantity: </b>1000 piece</p>
                                    <p><b>available quantity: </b>{p.qun} Unit</p>
                                    <form >
                                        <div class="form-control mb-4">
                                            <label class="input-group">
                                                <span>${p.price}/Unit</span>
                                                <input type="number" placeholder="10" min={1000} class="input input-bordered w-20" />
                                            </label>
                                        </div>
                                        <div class="card-actions justify-center">
                                            <Link to={`/Purchase/${p._id}`}>
                                            <button class="btn btn-primary">Buy Now</button>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                {
                    data.map((p, index) => <a href={`#car${index}`} class="btn btn-xs">{index}</a>)
                }
            </div>
        </section>
    );
};

export default ProductsCarousl;