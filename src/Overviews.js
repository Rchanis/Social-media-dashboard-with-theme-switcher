import icon_twitter from "./images/icon-twitter.svg";
import icon_facebook from "./images/icon-facebook.svg";
import icon_instagram from "./images/icon-instagram.svg";
import icon_youtube from "./images/icon-youtube.svg";
import icon_down from "./images/icon-down.svg";
import icon_up from "./images/icon-up.svg";

function Overviews() {
    let overview_containers = [];
    for (let i = 0; i < 8; i++) {
        overview_containers.push(
            <div role="row" className="p-5 w-full h-full bg-slate-600 rounded-[0.33rem] flex items-center justify-between">
                <div className="grid grid-rows-2 h-full content-between">
                    <h3 className="">Page Views</h3>
                    <p className="self-end">117</p>
                </div>
                <div>
                    <img src={icon_facebook} />
                    <p><img src={icon_up} />303%</p>
                </div>
            </div>
        )
    }
    return (
        <header className="Overviews">
            <h1 className="visually-hidden">Overview of the day</h1>
            <div className="grid grid-cols-4 gap-9 h-72 grid-rows-2" role="rowgroup">
                {overview_containers}
            </div>
        </header>
    )
}

export default Overviews;