import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import toast from 'react-hot-toast'
import { getEsewaLink } from 'utils/payment'
import pck from 'img/pck_1.webp'

const TwoColGrid = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 1rem;
  align-items: center;
  /*height: 200px;*/
`

const Enquiry = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const BlueBtn = styled('a')`
  background-color: #36c9f8;
  color: white;
  font-size: 1.2rem;
  width: 100%;
  max-width: 15rem;
  border-radius: 3px;
  /*height: 2rem;*/
  margin: 0.2rem auto;
  flex: 0 1 100%;
`

const GreenBtn = styled(BlueBtn)`
  background-color: #2fc32c;
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`

const TickedList = styled.li`
  &::marker {
    content: '✅ ';
  }
`

const getPackageInfo = (packageId) => {
  const info = {
    id: 1,
    name: '6 Days',
    desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    rating: 4,
    thumb_src: '/static/images/peacePagoda.jpg',
    type: 'Family',
    durationDays: 6.3,
    route: [
      'kathmandu',
      'pokhara',
      'davis falls',
      'bat cave',
      'cliche arc bridge',
      'pokhara',
      'kathmandu',
    ],
    // routeIds: [66, 32, 34, 40, 129, 32, 66],
  }
  return info
}

const PackageDetail = ({ packageId }) => {
  const loc = useLocation()
  useEffect(() => {
    if (loc.search) {
      const paymentQuery = new URLSearchParams(loc.search).get('paymentResp')
      if (paymentQuery === 'success') {
        toast.success('Payment Successful!')
      } else if (paymentQuery === 'fail') {
        toast.error('Payment Failed. Please try again.')
      }
    }
  })
  const packageInfo = getPackageInfo(packageId)

  return (
    <TwoColGrid>
      <div>
        <Image alt='' src={packageInfo.thumb_src} />
      </div>
      <div style={{ padding: '10%' }}>
        <p>Price</p>
        <p>Duration</p>
        <p>Tour Difficulty: Easy</p>
        <div>
          <h3>Know Before Booking</h3>
          <ul>
            <TickedList>Lorem ipsum donot eyy donot luike</TickedList>
            <TickedList> Lorem ipsum donot eyy donot luike</TickedList>
            <TickedList>Lorem ipsum donot eyy donot luike</TickedList>
            <TickedList>Lorem ipsum donot eyy donot luike</TickedList>
          </ul>
        </div>
        <Enquiry>
          <BlueBtn href='/package/1?paymentResp=fail'>Ask a question</BlueBtn>
          <GreenBtn href={getEsewaLink(100, Math.random().toString())}>
            Book this tour
          </GreenBtn>
        </Enquiry>
      </div>
    </TwoColGrid>
  )
}

export default PackageDetail
