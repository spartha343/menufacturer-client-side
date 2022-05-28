import React from 'react';
import { useQuery } from 'react-query';
import axiosInterseptor from '../../../hooks/axiosInterseptor';
import ManageOrder from './ManageOrder';

const ManageAllOrders = () => {
    const {isLoading, isError, data, error}=useQuery('allorder', async ()=>{
        const res = await axiosInterseptor({
            url: `orderget`
        })
        return res.data;
    })
    //console.log(data);
    return (
        <section>
            <h1>Manage All Orders</h1>
            {
                data?.map(order=><ManageOrder key={order._id} order={order} ></ManageOrder>)
            }
        </section>
    );
};

export default ManageAllOrders;