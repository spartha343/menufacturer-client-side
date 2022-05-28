import React from 'react';
import axiosInterseptor from '../../../hooks/axiosInterseptor';

const User = (props) => {
    const { _id, name, email, Role, img } = props.user

    const handleMakeadmin = () => {
        return axiosInterseptor({
            method: 'put',
            url: `/userput/${_id}`,
            data: { Role: 'Admin' }
        })
    }
    const handleDeleteAdmin = e => {
        return axiosInterseptor({
            method: 'delete',
            url: `/userdelete/${_id}`
        })
    }
    return (
        <div class="card bg-base-100 shadow-xl flex lg:flex-row m-5">
            <div class="card-body flex-row">
                <div class="avatar">
                    <div class="w-24 mask mask-squircle">
                        <img src={img} alt={img}/>
                    </div>
                </div>
                <div className=''>
                    <h2 class="card-title">{name}</h2>
                    <p>{email}</p>
                    <p >User Role: {Role}</p>
                </div>

            </div>
            <div class="card-actions lg:flex-col lg:p-9 m-auto pb-3">
                <button class="btn btn-primary" onClick={handleMakeadmin}>Make Admin</button>
                <button class="btn bg-red-500" onClick={handleDeleteAdmin}>Remove User</button>
            </div>
        </div>
    );
};

export default User;