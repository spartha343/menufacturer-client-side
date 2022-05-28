import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosInterseptor from '../../hooks/axiosInterseptor';
import MakePayment from './MakePayment';

const MakeOrder = ({ ProductId }) => {

    const [user] = useAuthState(auth);



    // const { _id: id, user: Ouser, product, orderquntity, productId, paid } = orderdata;


    // get user data 
    const { isLoading, isError, data, error } = useQuery('taskds', async () => {
        const res = await axiosInterseptor({
            method: 'get',
            url: `userget/${user.email}`
        });
        return res.data;
    })
    if (isLoading) {
        return <h2>loading ... </h2>
    }



    return (
        <section>
            <div class=" grid grid-cols-2 ">
                <div className=''>
                    <div class="card bg-base-200 text-black">
                        <div class="card-body">
                            <h2 class=" card-title">{data.name}</h2>
                            <p> <b>Email:</b> {data.email}</p>
                            <p><b> User Role: </b>{data.Role}</p>

                            <div>
                                <p>
                                    Net-30 Invoicing and Payment Terms. Customer will pay all Fees within 30 days of the date of the applicable invoice. Returns are not accepted. In the event Customer disputes any invoiced Fees, Customer will provide written notice of the disputed amount within 30 days after receiving such invoice and timely pay any undisputed portion of such invoice. The Parties will cooperate in good faith to resolve any disputed invoice or portion thereof within 30 days of notice of dispute. All amounts payable by Customer under this Agreement will be made without setoff or counterclaim, and without any deduction or withholding. Customer will promptly reimburse Apex CIPP Solutions (Apex) for any cost or expense incurred in connection with any collection efforts undertaken by Apex in connection with any past due amount owed under this Agreement. At Apex’s discretion, past due amounts may accrue a late fee equal to 1.5% per month, or the maximum amount allowed by applicable law.
                                </p>
                            </div>

                            <p>
                                Pay on our Bank:
                                # our bank details
                            </p>
                            <div class="card-actions justify-end">
                                <button class="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <MakePayment  user={user} odData={data}  ProductId={ProductId}></MakePayment> */}
                <div className="card bg-base-100">
                    <div className="card-body rounded-lg shadow-2xl text-center flex-grow-0 m-10">
                        <h1 className='text-4xl text-center'>Purchese Now</h1>
                        <p className='text-center'>Make the Payment an confirm your order</p>
                        <Link to={'/dashboard/myorder'}> <button className='btn btn-primary'> Pay Now</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeOrder;