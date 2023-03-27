import icon_down from "./images/icon-down.svg";
import icon_up from "./images/icon-up.svg";

function Overviews(props) {
    const social_accounts = props.social_accounts
    let overview_containers = [];
    Object.keys(social_accounts).forEach(key => {
        const icon = social_accounts[key].icon;
        const user = social_accounts[key].user;
        let title = Object.keys(social_accounts[key])[5]
        let object = social_accounts[key][title];
        let change = object.change;
        let change_icon = object.change_direction === "down" ? icon_down : icon_up;
        let change_color = object.change_direction === "down" ? "self-end text-bright-red" : "self-end text-lime-green";
        let strnumber = object.amount.toString();
        overview_containers.push(
            <a href={`https://www.${key}.com/${user.replace("@", "")}`} role="row" className="p-5 pt-3 pr-6 w-full h-full bg-light-grayish-blue hover:bg-light-grayish-blue-hover dark:bg-dark-desaturated-blue hover:dark:bg-dark-desaturated-blue-hover rounded-[0.33rem] flex items-center justify-between">
                <div className="grid grid-rows-2 h-full content-between">
                    <h3 className="text-sm font-bold self-center text-dark-grayish-blue dark:text-desaturated-blue">{title.charAt(0).toUpperCase() + title.slice(1).replace(/_/g, ' ')}</h3>
                    <p className="self-end text-2xl font-bold text-very-dark-blue dark:text-white">{strnumber.length > 4 ? strnumber.slice(0, strnumber.length - 3) + "k" : strnumber}</p>
                </div>
                <div className="grid grid-rows-2 h-full content-between">
                    <img className="self-center justify-self-end" src={icon} alt={key + " icon"} />
                    <p className={"text-xs font-bold " + change_color}><img className="inline" src={change_icon} alt={object.change_direction} /> {change}%</p>
                </div>
            </a>
        );
        title = Object.keys(social_accounts[key])[6];
        object = social_accounts[key][title];
        change = object.change;
        change_icon = object.change_direction === "down" ? icon_down : icon_up;
        change_color = object.change_direction === "down" ? "self-end text-bright-red" : "self-end text-lime-green";
        strnumber = object.amount.toString();
        overview_containers.push(
            <a href={`https://www.${key}.com/${user.replace("@", "")}`} role="row" className="p-5 pt-3 pr-6 w-full h-full bg-light-grayish-blue hover:bg-light-grayish-blue-hover dark:bg-dark-desaturated-blue hover:dark:bg-dark-desaturated-blue-hover rounded-[0.33rem] flex items-center justify-between">
                <div className="grid grid-rows-2 h-full content-between">
                    <h3 className="text-sm font-bold self-center text-dark-grayish-blue dark:text-desaturated-blue">{title.charAt(0).toUpperCase() + title.slice(1).replace(/_/g, ' ')}</h3>
                    <p className="self-end text-2xl font-bold text-very-dark-blue dark:text-white">{strnumber.length > 4 ? strnumber.slice(0, strnumber.length - 3) + "k" : strnumber}</p>
                </div>
                <div className="grid grid-rows-2 h-full content-between">
                    <img className="self-center justify-self-end" src={icon} alt={key + " icon"} />
                    <p className={"text-xs font-bold " + change_color}><img className="inline" src={change_icon} alt={object.change_direction} /> {change}%</p>
                </div>
            </a>
        );


    });

    return (
        <header className="Overviews">
            <h2 className="visually-hidden">Overview of the day</h2>
            <div className="grid grid-cols-4 gap-8 h-64 grid-rows-2" role="rowgroup">
                {overview_containers[0]}
                {overview_containers[1]}
                {overview_containers[4]}
                {overview_containers[5]}
                {overview_containers[2]}
                {overview_containers[3]}
                {overview_containers[6]}
                {overview_containers[7]}
            </div>
        </header>
    )
}

export default Overviews;