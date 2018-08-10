import * as React from 'react';

import './Header.scss';

interface HeaderProps {
    title: string;
    subtitle?: string;
    img?: string;
}

export const Header = ({ title, subtitle, img }: HeaderProps) => {
    return <header className="header">
        <img src={img} />
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
    </header>;
}