import LuxSpaceLogo from 'assets/images/luxspace.png';
import ButtonView from 'components/Button/View';
import NavigationBottomView from 'components/NavigationBottom/View';
import FooterController from 'layouts/Footer/Controller';

const FooterView = () => {
  const controller = FooterController()

  return (
    <footer className='flex flex-col justify-center items-center py-12 px-4 gap-8 md:px-0'>
      <div className='mx-auto'>
        <a href='/' className='w-28'>
          <img src={LuxSpaceLogo} alt='Luxspace | Fulfill your house with beautiful furniture' />
        </a>
      </div>

      <div className='w-full flex flex-col gap-4 md:flex-row md:gap-40'>
        <NavigationBottomView data={controller.navigationCategoryItem} />
        <div className='w-full'>
          <h5 className='font-montserrat font-semibold'>{controller.translation.SPECIAL_LETTER}</h5>
          <form action='/'>
            <label htmlFor='/' className='relative w-full flex mt-3'>
              <input type='email' placeholder='Your email address' className='w-full px-4 py-3 bg-gray-100 rounded focus:outline-none font-montserrat text-sm' />
              <div className='absolute right-0'>
                <ButtonView label={''} variant='icon' type='plain' onClick={() => console.log('send email')}>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' width={20} viewBox='0 0 24 24' strokeWidth='0.4' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M23.6177 0.411971C23.6163 0.410624 23.6152 0.409187 23.6138 0.407839C23.6124 0.406492 23.6109 0.405414 23.6095 0.404157C23.236 0.049307 22.7002 -0.0573008 22.2098 0.126411L0.833871 8.13353C0.268743 8.34518 -0.0623361 8.87521 0.0098048 9.4523C0.0821332 10.0294 0.53462 10.4694 1.13589 10.547L11.5833 11.8968C11.6028 11.8994 11.6185 11.9143 11.6212 11.9332L13.0301 21.9417C13.1112 22.5177 13.5704 22.9512 14.1729 23.0204C14.2279 23.0268 14.2824 23.0298 14.3364 23.0298C14.8735 23.0298 15.3486 22.7229 15.5495 22.231L23.9077 1.75274C24.0994 1.28302 23.9882 0.76983 23.6177 0.411971ZM1.30534 9.34475C1.2819 9.34169 1.27136 9.34039 1.26728 9.30788C1.26325 9.27537 1.27319 9.27159 1.29508 9.26347L21.2946 1.77187L11.9404 10.7333C11.8794 10.7163 1.30534 9.34475 1.30534 9.34475ZM14.37 21.7892C14.3614 21.8102 14.358 21.8198 14.3236 21.8158C14.2897 21.8119 14.2883 21.8017 14.2852 21.7794C14.2852 21.7794 12.8535 11.6495 12.8358 11.5911L22.19 2.62972L14.37 21.7892Z' />
                  </svg>
                </ButtonView>
              </div>
            </label>
          </form>
        </div>
      </div>

      <div className='mx-auto'>
        <p className='text-xs font-montserrat'>{controller.translation.COPYRIGHT}</p>
      </div>
    </footer>
  );
};

export default FooterView;