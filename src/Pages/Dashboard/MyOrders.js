import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import axiosInterseptor from '../../hooks/axiosInterseptor';
import MysingleOrder from './MysingleOrder';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    // get order 
    const { isLoading: orderIsloading, isError: orderisError, data, error: ordererror } = useQuery('orderloading', async () => {
        const res = await axiosInterseptor({
            method: 'get',
            url: `orderget/${user.email}`
        });
        return res.data;
    })

    console.log(data);
    return (
        <div>
            {
                data?.map(order => <MysingleOrder order={order} key={order._id}></MysingleOrder>
                )
            }
        </div>
    );
};

export default MyOrders;