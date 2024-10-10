import React from 'react';


const RunFund: React.FC = () => {
    return (  
        <div className="flex flex-col items-center px-4 mt-8" >
            <h1 className="text-3xl font-extrabold font-tomorrow text-primary mb-6" id='about' >What is Run for Fund?</h1>
            <p className="container md:max-w-3xl text-center text-gray-500 leading-8" > Run for Fund is a unique app designed to inspire and motivate individuals to participate in
                 physical challenges while raising funds for various charitable causes. Whether you prefer 
                 running, cycling, hiking, or any other activity, you can make a difference!</p>
        </div>
    );
};

export default RunFund;