import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import axiosInterseptor from '../../hooks/axiosInterseptor';

const MakePayment = ({ user, ProductId, }) => {
    const deliveryAddress = useRef(' ');
    const deliveryPhone = useRef(' ');
    // get order 
    const { isLoading: orderIsloading, isError: orderisError, data: orderdata, error: ordererror } = useQuery('orderloading', async () => {
        const res = await axiosInterseptor({
            method: 'get',
            url: `orderget/${ProductId}`
        });
        return res.data;
    })

    console.log(orderdata);

    const handlePurchase = (e) => {
        e.preventDefault();
        const dAddress = deliveryAddress.current.value;
        const dPhone = deliveryPhone.current.value;

        const orderStatus = { user: user.email, product: orderdata.product, orderquntity: orderdata.orderquntity, productId: orderdata.productId, paid: "paid", deliveryAddress: dAddress, deliveryphone: dPhone }

        console.log(orderdata);
        return axiosInterseptor({
            method: 'post',
            url: `/orderupdate/${ProductId}`,
            data: orderStatus
        }).then(
            e.target.reset()
        )
    }
    return (

        <div className="card">
            <h1 className='text-4xl text-center'>Purchese Now</h1>

        </div>
    );
};

export default MakePayment;