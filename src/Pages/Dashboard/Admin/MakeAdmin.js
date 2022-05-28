import React from 'react';
import { useQuery } from 'react-query';
import axiosInterseptor from '../../../hooks/axiosInterseptor';
import User from './User'

const MakeAdmin = () => {
const { isLoading, isError, data, error}= useQuery('alluser', ()=>{
    return axiosInterseptor({url: `/userget`}).then(res=>res.data)
})

if (isLoading) {
    return <div>Loading ...</div>
}

console.log(data);
    return (
        <section>
           <h2 className='text-3xl'> Make Admin</h2>

        {
            data?.map(u=><User user={u} key={u._id}></User>)
        }
        </section>
    );
};

export default MakeAdmin;