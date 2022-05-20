import { Link } from 'react-router-dom'

export function NavLink({path='/', label='' }) {
    return <Link to={path}>{label}</Link>
}