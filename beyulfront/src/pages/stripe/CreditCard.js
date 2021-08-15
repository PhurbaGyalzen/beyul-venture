import styled, { css } from 'styled-components'

const Front = styled.div`
    padding: 1rem 0.8rem;
    display: grid;
    grid-template-areas:
        'chip logo'
        'num num'
        'name expiry';
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    justify-items: start;
    & label {
        font-size: 0.7rem;
        color: #dddddd;
    }
    & p {
        margin: 0;
        font-size: 1rem;
        font-weight: 100;
    }
`

const Chip = styled.div`
    grid-area: chip;
`

const Logo = styled.div`
    content: 'LOGO';
    justify-self: end;
    grid-area: logo;
`

const CardNumber = styled.div`
    grid-area: num;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 1.2rem;
    position: relative;
`

const HolderName = styled.div`
    grid-area: name;
`

const Expiry = styled.div`
    justify-self: end;
    grid-area: expiry;
    position: relative;
`

const Back = styled.div`
    padding: 1rem 0;
`

const BlackStrip = styled.div`
    background-color: #000000ad;
    height: 2rem;
    width: 100%;
    margin: 0.6rem 0;
`

const CVV = styled.div`
    font-size: 0.6rem;
    margin: 0 0.2rem;
`

const WhiteRect = styled.div`
    background-color: white;
    border-radius: 0.3rem;
    height: 2rem;
`

const CreditCard = ({ showBack = false }) => {
    return !showBack ? (
        <Front>
            <Chip>==</Chip>
            <Logo></Logo>
            <CardNumber id='num'>
                {[0, 1, 2, 3].map((_, i) => (
                    <span key={i}>####</span>
                ))}
            </CardNumber>
            <HolderName>
                <label>Card Holder</label>
                <p>FULL NAME</p>
            </HolderName>
            <Expiry id='expiry'>
                <label>Expires</label>
                <p>MM/YY</p>
            </Expiry>
        </Front>
    ) : (
        <Back>
            <BlackStrip />
            <CVV id='cvv'>
                <div style={{ marginLeft: 'auto', width: 'max-content' }}>
                    CVV
                </div>
                <WhiteRect />
            </CVV>
            <Logo></Logo>
        </Back>
    )
}

export default CreditCard
