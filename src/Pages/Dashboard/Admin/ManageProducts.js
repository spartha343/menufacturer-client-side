import React from 'react';
import { useQuery } from 'react-query';
import axiosInterseptor from '../../../hooks/axiosInterseptor';
import ManageSingleProduct from './ManageSingleProduct';

const ManageProducts = () => {
    const { isLoading, isError, data, error}= useQuery('allproduct', async ()=>{
        const res = await axiosInterseptor({ url: `/productget` });
        return res.data;
    })
  
    return (
        <section>
           <h2 className='text-3xl'> Make Admin</h2>

        {
            data?.map(p=><ManageSingleProduct product={p} key={p._id}></ManageSingleProduct>)
        }
        </section>
    );
};

export default ManageProducts;