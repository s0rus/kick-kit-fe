import Spline from '@splinetool/react-spline';

const Scene = () => {
  return (
    <div className='absolute inset-0 h-screen overflow-hidden -z-[1] hidden lg:block'>
      <Spline className='absolute inset-0 left-72' scene='/scene.splinecode' />
    </div>
  );
};

export default Scene;
