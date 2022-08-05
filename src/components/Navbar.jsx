// SVGs
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'
// Router
import { useLocation, useNavigate } from 'react-router-dom'
// Navbar
function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const pathMatchRoute = (route) => {
    if (location.pathname === route) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className='navbar'>
      <div className='navbarNav'>
        <div className='navbarListItems'>
          <div className='navbarListItem' onClick={() => navigate('/')}>
            <ExploreIcon
              fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatchRoute('/')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Explore{' '}
            </p>
          </div>
          <div className='navbarListItem' onClick={() => navigate('/offers')}>
            <OfferIcon
              fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatchRoute('/offers')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Offer{' '}
            </p>
          </div>
          <div className='navbarListItem' onClick={() => navigate('/profile')}>
            <PersonOutlineIcon
              fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatchRoute('/profile')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Profile{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
