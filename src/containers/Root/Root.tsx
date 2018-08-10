import * as React from 'react';

import './Root.scss';
import { Header } from '../../components/Header/Header';


export class Root extends React.Component {
    render(){
        return <div>  
            <Header title="React Seed" subtitle=""/>
        </div>
    }
}