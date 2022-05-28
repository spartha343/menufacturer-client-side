import React, { useRef } from 'react';
import axiosInterseptor from '../../../hooks/axiosInterseptor';

const AddAProduct = () => {
    const image = useRef(' ');
    const name = useRef(' ');
    const discription = useRef(' ');
    const minorder = useRef(' ');
    const price = useRef(' ');
    const quantity = useRef(' ');

    const handleAddNewProduct = e=>{
        e.preventDefault();
        const img= image.current.value;
        const Pname= name.current.value;
        const dis=discription.current.value;
        const minOrder=minorder.current.value;
        const pri=price.current.value;
        const qnt=quantity.current.value;
        const newProduct= {name: Pname, price: pri, pic: img, dis: dis, qun: qnt, minOrder: minOrder}

        return axiosInterseptor({
            method: 'post',
            url: `/productpost`,
            data: newProduct
        }).then(
            e.target.reset()
        )
    }
    return (
        <section>
            Add A Product
            <form onSubmit={handleAddNewProduct} class="card-body">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Image</span>
                    </label>
                    <input required ref={image} type="text" placeholder="Image" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input required ref={name} type="text" placeholder="Name" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Discription</span>
                    </label>
                    <input required ref={discription} type="text" placeholder="Discription" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">minimum order quantity</span>
                    </label>
                    <input required ref={minorder} type="tel" placeholder="minimum order quantity" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Price</span>
                    </label>
                    <input required ref={price} type="text" placeholder="Price" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">available quantity</span>
                    </label>
                    <input required ref={quantity} type="text" placeholder="available quantity" class="input input-bordered" />
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
        </section>
    );
};

export default AddAProduct;