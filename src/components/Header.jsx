import { NavLink } from './link/NavLink'

export function Header({links}){
    console.log(links, links?.length);

    return (
        <header style={{height: '64px'}}>
            <nav>
                <div className="brand">
                    <div className="logo">LOGO</div>
                    <div className="brand-name">BRAND</div>
                </div>
                <ul className="nav-links" style={{display: 'flex', gap: '10px',listStyle: 'none'}}>
                    {/* <li><NavLink path='/' label='Home' /></li>
                    <li><NavLink path="/splitscreen" label='Split Screen App' /></li> */}
                    {links?.length && links.map((link, i)=>(<li key={i}><NavLink path={link.path} label={link.label} /></li>))}
                </ul>
            </nav>
        </header>
    )
}