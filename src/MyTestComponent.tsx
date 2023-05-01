import React from 'react';
type MyProps = {
    message: string
    id: number
}



const MyTestComponent = ({message, id}: MyProps ) => {
    return (
        <div>
            {message}
            </div>
    );
};

export default MyTestComponent;
export {}