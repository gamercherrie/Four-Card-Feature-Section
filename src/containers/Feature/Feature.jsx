import React from 'react';
import { Header, Card } from '../../components';
import { calculator, karma, supervisor, builder} from './imports';
import './Feature.css';

const Feature = () => {
    return (
        <div className="feature__container">
            <div className="feature__heading">
                <Header />
            </div>
            <div className="feature__body">
                <div className="feature__body-row1">
                    <Card title="Supervisor" paragraph="Monitors activity to identify project
                            roadblocks" strip="strip cyan" image={supervisor} />
                </div>
                <div className="feature__body-row2">
                    <div className="feature__middle">
                        <Card title="Team Builder" paragraph="Scans our talent network to create the optimal team
                            for your project" strip="strip red" image={builder}/>
                    </div>
                    <div className="feature__middle">
                        <Card title="Karma" paragraph="Regularly evaluates our talent to ensure quality" strip="strip orange"
                            image={karma}/>
                    </div>
                </div>
                <div className="feature__body-row3">
                    <Card title="Calculator" paragraph="Uses data from past projects to provide better 
                        delivery estimates" strip="strip blue" image={calculator}/>
                </div>
            </div>
        </div>
    );
};

export default Feature;