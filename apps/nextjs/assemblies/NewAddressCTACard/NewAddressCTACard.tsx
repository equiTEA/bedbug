import { useRouter } from 'next/router'
import NewAddressCTA from '../../components/CTACard'
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation'

const NewAddressCTACard = () => {
  const { query } = useRouter()

  return (
    <NewAddressCTA
      text="Not finding the address you're looking for? Add it and rate it to advocate for yourself and protect other renters!"
      buttonText="Add it to our system"
      icon={<NotListedLocationIcon fontSize="large" color="secondary" />}
      buttonHref={{
        pathname: '/addresses/new',
        query,
      }}
    />
  )
}

export default NewAddressCTACard
