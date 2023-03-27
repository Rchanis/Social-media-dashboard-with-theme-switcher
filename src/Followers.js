import icon_down from "./images/icon-down.svg";
import icon_up from "./images/icon-up.svg";




function Followers(props) {
  const social_accounts = props.social_accounts;
  const followers_containers = Object.keys(social_accounts).map(key => {
    const followers = String(social_accounts[key].followers);
    const user = social_accounts[key].user;
    const icon = social_accounts[key].icon;
    const change = social_accounts[key].change;
    const change_icon = social_accounts[key].change_direction === "down" ? icon_down : icon_up;
    const change_color = social_accounts[key].change_direction === "down" ? "text-bright-red" : "text-lime-green";
    const upper_bar = (type) => {
      switch (type) {
        case "facebook":
          return <div className={`w-full h-1 bg-facebook rounded-t-full`}></div>;
        case "instagram":
          return <div className="w-full h-1 rounded-t-full" style={{ "backgroundImage": "linear-gradient(45deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%))" }}></div>;
        case "twitter":
          return <div className={`w-full h-1 bg-twitter rounded-t-full`}></div>;
        case "youtube":
          return <div className={`w-full h-1 bg-youtube rounded-t-full`}></div>;
        default:
          return <div className={`w-full h-1 bg-facebook rounded-t-full`}></div>;
      }
    }
    return (
      <a href={`https://www.${key}.com/${user.replace("@", "")}`} role="row" className="w-full h-full bg-light-grayish-blue hover:bg-light-grayish-blue-hover dark:bg-dark-desaturated-blue hover:dark:bg-dark-desaturated-blue-hover text-dark-grayish-blue dark:text-desaturated-blue rounded-[0.33rem] flex flex-col items-center justify-between">
        <h3 className="visually-hidden">{key} followers</h3>
        {upper_bar(key)}
        <div><img src={icon} className="inline" alt={key + " icon"} />
          <span className="text-xs ml-2 font-bold">{user}</span></div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold text-very-dark-blue dark:text-white">{followers.length > 4 ? followers.slice(0, followers.length - 3) + "k" : followers}</span>
          <span className="text-sm tracking-[0.2rem] mt-2 ">{key === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}</span>
        </div>
        <div className={"text-xs font-bold " + change_color} ><img src={change_icon} alt={social_accounts[key].change_direction} className="inline" /> {change} Today</div>
        <div></div>
      </a>
    )
  })

  return (
    <header className="Followers ">
      <h2 className="visually-hidden">Followers</h2>
      <div className="grid grid-cols-4 gap-8 h-56 min-w-fit" role="rowgroup">
        {followers_containers}
      </div>
    </header>
  );
}

export default Followers;
