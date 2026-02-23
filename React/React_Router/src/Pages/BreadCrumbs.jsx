import { Link, useLocation } from "react-router-dom";

export const BreadCrumbs = () => {
    const location = useLocation();
    console.log(location, "this is location hook");



    let currentLink = ''
  
    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {
        currentLink += `/${crumb}`
        return (
            <div className="crumb" key={crumb}>
                <Link to={currentLink}>{crumb} </Link>
            </div>
        )
    })
    console.log(crumbs, "this is crumbs");
    return <>
        <div className="crumbs">
            {crumbs}
        </div>
    </>
}