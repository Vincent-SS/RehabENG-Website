import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const NavMenu = () => {
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
        
        const handleClick = e => {
			setAnchorEl(e.currentTarget);
        }

		const handleClose = () => {
			setAnchorEl(null);
		}

        return (
                <div>
					<Button
						id='nav-menu-btn'
						aria-controls='nav-menu'
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
					>
					<MenuIcon></MenuIcon>
					</Button>
					<Menu
						id='nav-menu'
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{ 'aria-labelledby': 'basic-button' }}
					>
						<MenuItem onClick={handleClose}>
							<Link to="/">About Us</Link>
						</MenuItem>
						{/* <MenuItem onClick={handleClose}>
							<Link to='/past-project'>Past Project</Link>
						</MenuItem> */}
						<MenuItem onClick={handleClose}>
							<Link to='/current-project'>Current Project</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/supportus'>Support Us</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to="/contact">Contact</Link>
						</MenuItem>
					</Menu>
                </div>
        )
}

export default NavMenu;