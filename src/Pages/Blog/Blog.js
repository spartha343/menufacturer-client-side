import React from 'react';

const Blog = () => {
    return (
        <section>
            <div class="card-body flex-row">
                <div class="avatar">
                    <div class="w-24 mask mask-squircle">
                        {/* <img src={img} alt={img}/> */}
                    </div>
                </div>
                <div >
                    <h2 class="card-title"> How will you improve the performance of a React Application?</h2>
                    <p className=' pl-6'>
                        Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React.
                    </p>
                </div>
            </div>


            <div class="card-body flex-row">
                <div class="avatar">
                    <div class="w-24 mask mask-squircle">
                        {/* <img src={img} alt={img}/> */}
                    </div>
                </div>
                <div >
                    <h2 class="card-title"> What are the different ways to manage a state in a React application?</h2>
                    <p></p>
                </div>
            </div>


            <div class="card-body flex-row">
                <div class="avatar">
                    <div class="w-24 mask mask-squircle">
                        {/* <img src={img} alt={img}/> */}
                    </div>
                </div>
                <div >
                    <h2 class="card-title"> How does prototypical inheritance work?</h2>
                    <p></p>
                </div>
            </div>

            <div class="card-body flex-row">
                <div class="avatar">
                    <div class="w-24 mask mask-squircle">
                        {/* <img src={img} alt={img}/> */}
                    </div>
                </div>
                <div >
                    <h2 class="card-title"> Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`</h2>
                    <p></p>
                </div>
            </div>

            <div class="card-body flex-row">
                <div class="avatar">
                    <div class="w-24 mask mask-squircle">
                        {/* <img src={img} alt={img}/> */}
                    </div>
                </div>
                <div >
                    <h2 class="card-title"> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?  </h2>
                    <p></p>
                </div>
            </div>

            <div class="card-body flex-row">
                <div class="avatar">
                    <div class="w-24 mask mask-squircle">
                        {/* <img src={img} alt={img}/> */}
                    </div>
                </div>
                <div >
                    <h2 class="card-title"> What is a unit test? Why should write unit tests?</h2>
                    <p></p>
                </div>
            </div>
        </section>
    );
};

export default Blog;