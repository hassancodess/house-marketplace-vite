import { Link } from 'react-router-dom'
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'

function ListingItem({ listing, id, onDelete }) {
  const discountedPrice = listing.discountedPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const regularPrice = listing.regularPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return (
    <li className='categoryListing'>
      <Link
        to={`/category/${listing.type}/${id}`}
        className='categoryListingLink'
      >
        <img
          src={listing.imageUrls[0]}
          alt={listing.name}
          className='categoryListingImg'
        />
        <div className='categoryListingDetails'>
          <p className='categoryListingLocation'>{listing.location}</p>
          <p className='categoryListingName'>{listing.name}</p>
          <p className='categoryListingPrice'>
            $ {listing.offer ? discountedPrice : regularPrice}
            {listing.type == 'rent' && ' / Month'}
          </p>
          <div className='categoryListingInfoDiv'>
            {/* Bedrooms */}
            <img src={bedIcon} alt='bed' />
            <p className='categoryListingInfoText'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : '1 Bedroom'}
            </p>
            {/* Bathrooms */}
            <img src={bathtubIcon} alt='bathroom' />
            <p className='categoryListingInfoText'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : '1 Bathroom'}
            </p>
          </div>
        </div>
      </Link>
      {/* For Authenticated Users */}
      {onDelete && (
        <DeleteIcon
          className='removeIcon'
          fill='rgb(231,76, 60)'
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}
    </li>
  )
}

export default ListingItem
