import styled from 'styled-components'

export default function Item(props) {
    return (
        <tr>
            <TH scope="row">{props.number}</TH>
            <TD><code>{props.lastName}</code></TD>
            <TD><code>{props.firstName}</code></TD>
            <TD><code>{props.email}</code></TD>
            <TD><code>{props.phone}</code></TD>
        </tr>
    )
}
const TD = styled.td`
    padding-left: 40px;
    padding-right: 40px;
`;

const TH = styled.th`
    padding-left: 40px;
    padding-right: 40px;
`;




