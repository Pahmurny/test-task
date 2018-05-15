import styled from 'styled-components'
import svg from 'assets/images/svg/button_search.svg'


const SearchIco = styled.div`
    background-image: url(${svg});
    width: 38px;
    height: 38px;
    background-repeat: no-repeat;
    background-size: 38px 38px;
    display: inline-block;
    background-position: center 5px;
    background-color: #5f5864;
    border-radius: 38px;
`

SearchIco.displayName = 'SearchIco'

export default SearchIco