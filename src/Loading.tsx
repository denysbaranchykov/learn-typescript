import React from 'react';

interface loadingProps {
    image: string
}

const Loading = ({image}: loadingProps) => {
    return (

        <img src='https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif'
             alt="Loading..."
        />
    );
};

export default Loading;