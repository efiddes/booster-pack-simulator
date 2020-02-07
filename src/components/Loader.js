import React from 'react';

import './loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="colour-wheel">
                <div className="w-mana"></div>
                <div className="between">
                    <div className="g-mana"></div>
                    <div className="u-mana"></div>
                </div>
                <div className="evenly">
                    <div className="r-mana"></div>
                    <div className="b-mana"></div>
                </div>
            </div>
            <p className="loader-caption">Sealing Booster</p>
        </div>
    )
}

export default Loader;
