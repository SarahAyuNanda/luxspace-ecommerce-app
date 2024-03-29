import IDIcon from 'assets/icons/id-lang.png';
import ENIcon from 'assets/icons/en-lang.png';
import { ILanguageItem } from 'components/DropdownLanguage/Model';
import INavigationItem from 'layouts/Header/Model';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const HeaderController = () => {
  /* ---------------------------------- CUSTOM HOOK ---------------------------------- */
  const { t, i18n } = useTranslation()

  const [isShowMenu, setIsShowMenu] = useState(false)
  const [isOnTopPage, setIsOnTopPage] = useState(true)
  const [isShowDropdownLanguage, setIsShowDropdownLanguage] = useState(false)
  const [selectedLanguageIcon, setSelectedLanguageIcon] = useState(ENIcon)

  const translation = useMemo(() => ({
    showcase: t('HEADER.SHOWCASE'),
    catalog: t('HEADER.CATALOG'),
    delivery: t('HEADER.DELIVERY'),
    rewards: t('HEADER.REWARDS'),
  }), [t])

  useEffect(() => {
    window.addEventListener('scroll', e => onHandleScroll(e))
  }, [])

  /* -------------------------------- CONSTRUCT DATA --------------------------------- */
  const ShowcaseIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z' />
    </svg>
  )

  const CatalogIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
      <path strokeLinecap='round' strokeLinejoin='round' d='M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z' />
    </svg>
  )

  const DeliveryIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
      <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
    </svg>
  )

  const RewardIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
      <path strokeLinecap='round' strokeLinejoin='round' d='M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z' />
    </svg>
  )

  const navigationItemList: INavigationItem[] = [
    { label: translation.showcase, path: '/showcase', icon: <ShowcaseIcon /> },
    { label: translation.catalog, path: '/catalog', icon: <CatalogIcon /> },
    { label: translation.delivery, path: '/delivery', icon: <DeliveryIcon /> },
    { label: translation.rewards, path: '/rewards', icon: <RewardIcon /> },
  ]

  const languageItemList: ILanguageItem[] = [
    { icon: IDIcon, label: 'ID', value: 'id' },
    { icon: ENIcon, label: 'EN', value: 'en' },
  ]

  /* ------------------------------- HANDLER FUNCTION -------------------------------- */
  const onShowHideNavigationMenu = () => {
    setIsShowMenu(current => !current)
  }

  const onHandleScroll = (e: Event) => {
    let position = e.currentTarget as Window
    setIsOnTopPage(position.scrollY === 0)
  }

  const onHandleOpenLanguage = () => setIsShowDropdownLanguage(current => !current)

  const onChangeLanguage = (e: React.MouseEvent<HTMLLIElement>) => {
    const { value } = (e.currentTarget as HTMLLIElement).dataset
    const icon = value === 'en' ? ENIcon : IDIcon
    i18n.changeLanguage(value)
    setIsShowDropdownLanguage(false)
    setSelectedLanguageIcon(icon)
  }

  /* ------------------------------------ RETURN ------------------------------------- */
  return {
    translation,
    isShowMenu,
    isOnTopPage,
    isShowDropdownLanguage,
    selectedLanguageIcon,

    navigationItemList,
    languageItemList,

    setIsShowMenu,
    onShowHideNavigationMenu,
    onHandleOpenLanguage,
    onChangeLanguage
  };
};

export default HeaderController;