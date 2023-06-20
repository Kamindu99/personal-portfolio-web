import React from 'react';
import { Link } from 'react-router-dom';

const FooterDetail = (props:any) => {
    return (
        <div className="col-md-3 footer-desc1">
            <h6 className="text-primary">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                {  //@ts-ignore
                    props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-secondary" style={{textDecoration:'none'}}>{item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterDetail;