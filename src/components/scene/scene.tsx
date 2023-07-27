import Spline from '@splinetool/react-spline';

const Scene = () => {
  return (
    <div className='absolute inset-0 w-screen h-screen overflow-hidden -z-[1] hidden lg:block'>
      <div className='absolute inset-0'>
        <Spline className='absolute inset-0 left-96' scene='/scene.splinecode' />
      </div>
    </div>
  );
};

export default Scene;
