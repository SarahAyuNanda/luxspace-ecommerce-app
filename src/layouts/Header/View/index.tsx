import LuxSpaceLogo from 'assets/images/luxspace.png';
import IDIcon from 'assets/icons/id-lang.png';
import ENIcon from 'assets/icons/en-lang.png';
import NavigationBarView from 'components/NavigationBar/View';
import HeaderController from 'layouts/Header/Controller';
import SidemenuView from 'layouts/Sidemenu/View';

const HeaderView = () => {
  const controller = HeaderController();

  return (
    <header className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${controller.isOnTopPage ? 'bg-transparent' : 'bg-white shadow-lg'}`}>
      <div className='container mx-auto py-5 px-4 md:px-0'>
        <div className='flex flex-row justify-between items-center'>
          {/* ------------------------------------- LOGO -------------------------------------- */}
          <div className='flex items-center w-1/2'>
            <a href='/' className='w-28'>
              <img src={LuxSpaceLogo} alt='Luxspace | Fulfill your house with beautiful furniture' />
            </a>
          </div>
          {/* ----------------------------------- END LOGO ------------------------------------ */}

          <NavigationBarView data={controller.navigationItemList} />
          <SidemenuView isOpen={controller.isShowMenu} data={controller.navigationItemList} onClose={controller.onShowHideNavigationMenu} />

          {/* ----------------------------------- ICON MENU ----------------------------------- */}
          <div className='flex justify-end items-center w-auto'>
            <ul className='flex items-center gap-3 md:gap-6'>
              {/* ---------------------------------- BURGER MENU ---------------------------------- */}
              <li className='block md:hidden p-1 rounded-full ease-in-out duration-300 hover:bg-gray-100 active:bg-gray-100 text-neutral-700'>
                <button id='burger-menu' className='relative flex items-center justify-center w-8 h-8 focus:outline-none' onClick={controller.onShowHideNavigationMenu}>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                  </svg>
                </button>
              </li>

              {/* ----------------------------------- CART MENU ----------------------------------- */}
              <li className='p-1 rounded-full ease-in-out duration-300 active:bg-gray-100 text-neutral-700'>
                <a href='/cart' id='cart-menu' className='flex items-center justify-center w-8 h-8'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' strokeWidth='1.5' stroke='currentColor' viewBox='0 0 26 24' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
                  </svg>
                </a>
              </li>

              {/* --------------------------------- LANGUAGE MENU --------------------------------- */}
              <li className='relative p-1 rounded-full ease-in-out duration-300 active:bg-gray-100 text-neutral-700'>
                <button id='lang' className='flex items-center justify-center w-8 h-8' onClick={controller.onHandleOpenLanguage}>
                  <img src={ENIcon} alt='id-lang' className='w-[28px] h-[28px]' />
                </button>
                {/* ------------------------------- DROPDOWN LANGUAGE ------------------------------- */}
                <ul className={`${controller.isShowDropdownLanguage ? 'block' : 'hidden'} absolute flex flex-col z-50 top-10 right-0 w-max bg-white rounded shadow-lg overflow-visible text-neutral-700 font-montserrat ease-in-out duration-700`} aria-orientation='vertical' role='listbox' tabIndex={0}>
                  <li id='id-lang' onClick={() => controller.onChangeLanguage('id')} className='flex items-center px-3 pt-2 pb-1 gap-2 cursor-pointer hover:bg-gray-100 hover:rounded' role='option' tabIndex={-1} aria-selected>
                    <img src={IDIcon} alt='id-lang' className='w-[28px] h-[28px]' />
                    <p>ID</p>
                  </li>
                  <li id='en-lang' onClick={() => controller.onChangeLanguage('en')} className='flex items-center px-3 pt-1 pb-2 gap-2 cursor-pointer hover:bg-gray-100 hover:rounded' role='option' tabIndex={-1} aria-selected>
                    <img src={ENIcon} alt='id-lang' className='w-[28px] h-[28px]' />
                    <p>EN</p>
                  </li>
                </ul>
              </li>
            </ul>

          </div>
          {/* --------------------------------- END ICON MENU --------------------------------- */}

        </div>
      </div>
    </header>
  );
};

export default HeaderView;