import styled from 'styled-components'

const Front = styled.div`
    display: grid;
    grid-template-areas:
        'chip logo'
        'num num'
        'name expiry';
    gap: 1.3rem;
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
    justify-self: end;
    grid-area: logo;
`

const CardNumber = styled.div`
    grid-area: num;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 1.2rem;
`

const HolderName = styled.div`
    grid-area: name;
`

const Expiry = styled.div`
    justify-self: end;
    grid-area: expiry;
`

const CreditCard = (props) => {
    return (
        <Front>
            <Chip>==</Chip>
            <Logo>VISA</Logo>
            <CardNumber>
                {[0, 1, 2, 3].map((_) => (
                    <span>####</span>
                ))}
            </CardNumber>
            <HolderName>
                <label>Card Holder</label>
                <p>FULL NAME</p>
            </HolderName>
            <Expiry>
                <label>Expires</label>
                <p>MM/YY</p>
            </Expiry>
        </Front>
    )
}

export default CreditCard
