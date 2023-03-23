import icon_twitter from "./images/icon-twitter.svg";
import icon_facebook from "./images/icon-facebook.svg";
import icon_instagram from "./images/icon-instagram.svg";
import icon_youtube from "./images/icon-youtube.svg";
import icon_up from "./images/icon-up.svg"


function Followers() {
  return (
    <header className="Followers">
      <h1 className="visually-hidden">Followers</h1>
      <div className="grid grid-cols-4 gap-9 h-72" role="rowgroup">
        <div role="row" className="w-full h-full bg-slate-600 rounded-[0.33rem] flex flex-col items-center justify-between">
          <h3 className="visually-hidden">Facebook followers</h3>
          <div className="w-full h-1 bg-cyan-400 rounded-t-full"></div>
          <div><img src={icon_facebook} className="inline" alt="facebook icon" /> <span className="text-xs">@nathanf</span></div>
          <div className="flex flex-col items-center">
            <span className="text-6xl">1987</span>
            <span className="text-base tracking-[0.2rem] mt-2">FOLLOWERS</span>
          </div>
          <div><img src={icon_up} alt="plus" className="inline" /> 12 Today</div>
          <div></div>
        </div>
      </div>
    </header>
  );
}

export default Followers;
