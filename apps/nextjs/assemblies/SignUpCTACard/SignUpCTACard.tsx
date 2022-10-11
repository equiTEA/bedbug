import { useRouter } from 'next/router'
import CTACard from '../../components/CTACard'
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation'

const SignUpCTACard = () => {
  const { query } = useRouter()

  return (
    <CTACard
      text="Not finding the address you're looking for? Sign up to advocate for yourself and protect other renters!"
      buttonText="Sign Up"
      buttonHref={{
        pathname: '/signup',
        query,
      }}
      icon={<NotListedLocationIcon fontSize="medium" color="secondary" />}
    />
  )
}

export default SignUpCTACard
