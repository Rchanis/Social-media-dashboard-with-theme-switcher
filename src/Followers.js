import icon_twitter from "./images/icon-twitter.svg";
import icon_facebook from "./images/icon-facebook.svg";
import icon_instagram from "./images/icon-instagram.svg";
import icon_youtube from "./images/icon-youtube.svg";
import icon_down from "./images/icon-down.svg";
import icon_up from "./images/icon-up.svg";

const social_accounts = {
  "facebook": {
    "user": "@nathanf",
    "followers": 1987,
    "change_direction": "up",
    "change": 12,
    "icon": icon_facebook
  },
  "twitter": {
    "user": "@nathanf",
    "followers": 1044,
    "change_direction": "up",
    "change": 99,
    "icon": icon_twitter
  },
  "instagram": {
    "user": "@realnathanf",
    "followers": 11000,
    "change_direction": "up",
    "change": 1099,
    "icon": icon_instagram
  },
  "youtube": {
    "user": "Nathan F.",
    "followers": 8239,
    "change_direction": "down",
    "change": 144,
    "icon": icon_youtube
  }
}

const followers_containers = Object.keys(social_accounts).map(key => {
  const followers = String(social_accounts[key].followers);
  const bg_bar = "bg-" + key;
  const user = social_accounts[key].user;
  const icon = social_accounts[key].icon;
  const change = social_accounts[key].change;
  const change_icon = social_accounts[key].change_direction === "down" ? icon_down : icon_up;
  return (
    <div role="row" className="w-full h-full bg-slate-600 rounded-[0.33rem] flex flex-col items-center justify-between">
      <h3 className="visually-hidden">{key} followers</h3>
      <div className={`w-full h-1 ${bg_bar} rounded-t-full`}></div>
      <div><img src={icon} className="inline" alt={key + "icon"} />
        <span className="text-xs ml-2">{user}</span></div>
      <div className="flex flex-col items-center">
        <span className="text-6xl">{followers.length > 4 ? followers.slice(0, followers.length - 3) + "k" : followers}</span>
        <span className="text-base tracking-[0.2rem] mt-2">FOLLOWERS</span>
      </div>
      <div><img src={change_icon} alt="plus" className="inline" /> {change} Today</div>
      <div></div>
    </div>
  )
})


function Followers() {
  return (
    <header className="Followers ">
      <h1 className="visually-hidden">Followers</h1>
      <div className="grid grid-cols-4 gap-9 h-72" role="rowgroup">
        {followers_containers}
      </div>
    </header>
  );
}

export default Followers;
