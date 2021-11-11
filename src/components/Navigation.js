import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import NavList from './NavList';
import NavMenu from './NavMenu';

const Nav = styled.nav`
        background-color: #C7EAEC;
        > ul {
                margin: 0;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                padding: 1em;
                > li {
                        list-style-type: none;
                        > a {
                                text-decoration: none;
                                color: #000;
                        }
                }
        }
`

const Navigation = () => {
        const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
        return (
                <Nav>
                        {isMobile ? <NavMenu/> : <NavList/> }
                </Nav>
        )
}

export default Navigation;
