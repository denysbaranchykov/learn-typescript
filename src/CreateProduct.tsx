import React from 'react';


const CreateProduct = () => {
    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Enter product name'
                />
            </form>
            <button
            type='submit'
            >
                Create
            </button>
        </div>
    );
};

export default CreateProduct;