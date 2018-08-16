import * as React from 'react';

import './Root.scss';
import { Header } from '../../components/Header/Header';
import { Select } from '../../components/Select/SelectWithClickCount';
import { Todo } from '../../components/Todo/TodoWithStore';


export class Root extends React.Component {
    render(){
        return <div>  
            <Header title="React Seed" 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                img="./assets/img/logo.png"/>

            {/*<Select
                values={["Angular", "Is", "For", "Losers"]} 
                onSelect={(value: string) => console.clear() || console.log(value)}
            />*/}

            <Todo />
        </div>
    }
}























