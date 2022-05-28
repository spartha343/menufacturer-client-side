import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosInterseptor from '../../hooks/axiosInterseptor';
import MakeOrder from './MakeOrder';
const Purchase = () => {

    const [user] = useAuthState(auth);
    const quntity = useRef(0);
    const { ProductId } = useParams();
    const { isLoading, isError, data, error } = useQuery('singleProduct', () => {
        return axiosInterseptor({ url: `/getsingleproduct/${ProductId}` }).then(res => res.data)
    })

    //console.log(data[0]);
    //     const { name, price, pic, dis, qun, minOrder} = data[0];
    //     if (isLoading) {
    //         return <div>Loading ...</div>
    //     }
    // console.log(user.email);
    const HandleItemUpdate = (e) => {
        e.preventDefault();
        const orderquntity = quntity.current.value || data[0].minOrder;

        const order = { user: user.email, product: data[0].name, orderquntity: orderquntity, productId: data[0]._id }

        return axiosInterseptor({
            method: 'post',
            url: `/orderpost/${user.email}`,
            data: order
        }).then(
            e.target.reset()
        )

    }

    return (
        <section>
            {


                data?.map(p => {
                    return <div className="">{console.log(p)}
                        <div class="hero min-h-[40vh] bg-base-200">
                            <div class="hero-content flex-col lg:flex-row">
                                <img src={p.pic} class="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 class="text-2xl font-bold">{p?.name}</h1>
                                    <p class="text-xl ">Price: ${p?.price}</p>
                                    <p class="py-6">{p?.dis}</p>
                                    <form onSubmit={HandleItemUpdate} className='form-control'>
                                        <input ref={quntity} type="number" max={p?.qun} step={p?.minOrder} min={p?.minOrder} placeholder={p?.minOrder} class="input input-bordered input-md w-full max-w-xs" />
                                        <button class="btn btn-primary" type='submit'>Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                )
            }
            <MakeOrder quntity={quntity.current.value} orderdata={data} ProductId={ProductId}></MakeOrder>
        </section>
    );
};

export default Purchase;