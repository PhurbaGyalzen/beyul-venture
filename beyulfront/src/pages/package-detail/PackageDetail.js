import styled from 'styled-components'
import pck from 'img/pck_1.webp'

const TwoColGrid = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 1rem;
  align-items: center;
  height: 200px;
`

const BlueBtn = styled.button`
  background-color: #36c9f8;
  color: white;
  width: 100%;
  max-width: 300px;
  border-radius: 3px;
`

const GreenBtn = styled(BlueBtn)`
  background-color: #2fc32c;
`

const getPackageInfo = (packageId) => {
  const info = {
    id: 1,
    name: '6 Days',
    desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    rating: 4,
    thumb_src: pck,
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
  const packageInfo = getPackageInfo(packageId)

  return (
    <TwoColGrid>
      <div style={{ width: '100%', height: '100%' }}>
        <img
          alt=''
          style={{ backgroundSize: 'cover', width: '100%' }}
          src={packageInfo.thumb_src}
        />
      </div>
      <div style={{ padding: '10%' }}>
        <p>Price</p>
        <p>Duration</p>
        <p>Tour Difficulty: Easy</p>
        <div>
          <h3>Know Before Booking</h3>
          <ul>
            <li>Lorem ipsum donot eyy donot luike</li>
            <li> Lorem ipsum donot eyy donot luike</li>
            <li>Lorem ipsum donot eyy donot luike</li>
            <li>Lorem ipsum donot eyy donot luike</li>
          </ul>
        </div>
        <BlueBtn>Ask a question</BlueBtn>
        <GreenBtn>BOOK THIS TOUR</GreenBtn>
      </div>
    </TwoColGrid>
  )
}

export default PackageDetail
