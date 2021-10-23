import React from 'react'
import './Banner.css'

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC')`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_desc"> {truncate(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget lorem ac neque
                tristique egestas. Nunc semper vitae nibh et varius. Fusce odio eros, consectetur vitae ullamcorper sit amet, efficitur
                a neque.`, 150)}
                </h1>
            </div>

            <div className="fade_bottom" />
        </header>
    )
}

export default Banner