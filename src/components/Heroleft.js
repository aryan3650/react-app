import heroImage from '../images/tab-hero.svg';

const Heroleft = () => {
  return (
    <div className="relative justify-self-center items-center mt-6 md:items-start md:row-start-2 md:col-start-1 md:self-center md:mt-0">

    <img src={heroImage} />
    <h4 className='text-white'></h4>

</div>
  );
};

Heroleft.propTypes = {};

export default Heroleft;
