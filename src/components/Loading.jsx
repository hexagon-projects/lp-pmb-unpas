import { ThreeDot } from 'react-loading-indicators';

const Loading = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <ThreeDot variant="bounce" color="#F5FF39" size="medium" text="" textColor="" />
        </div>
    );
};

export default Loading;
