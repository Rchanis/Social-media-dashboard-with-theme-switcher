import Followers from "./Followers";
import Overviews from "./Overviews";
import icon_twitter from "./images/icon-twitter.svg";
import icon_facebook from "./images/icon-facebook.svg";
import icon_instagram from "./images/icon-instagram.svg";
import icon_youtube from "./images/icon-youtube.svg";

function Dashboard() {
    const social_accounts = {
        "facebook": {
            "user": "@nathanf",
            "followers": 1987,
            "change_direction": "up",
            "change": 12,
            "icon": icon_facebook,
            "page_views": {
                "amount": 87,
                "change": 3,
                "change_direction": "up",
            },
            "likes": {
                "amount": 52,
                "change": 2,
                "change_direction": "down"
            }
        },
        "twitter": {
            "user": "@nathanf",
            "followers": 1044,
            "change_direction": "up",
            "change": 99,
            "icon": icon_twitter,
            "retweets": {
                "amount": 117,
                "change": 303,
                "change_direction": "up",
            },
            "likes": {
                "amount": 507,
                "change": 553,
                "change_direction": "up"
            }
        },
        "instagram": {
            "user": "@realnathanf",
            "followers": 11000,
            "change_direction": "up",
            "change": 1099,
            "icon": icon_instagram,
            "likes": {
                "amount": 5462,
                "change": 2257,
                "change_direction": "up"
            },
            "profile_views": {
                "amount": 52800,
                "change": 1375,
                "change_direction": "up",
            }
        },
        "youtube": {
            "user": "Nathan F.",
            "followers": 8239,
            "change_direction": "down",
            "change": 144,
            "icon": icon_youtube,
            "likes": {
                "amount": 107,
                "change": 19,
                "change_direction": "down"
            },
            "total_views": {
                "amount": 1407,
                "change": 12,
                "change_direction": "down",
            }
        }
    }
    return (
        <div className="z-10 flex flex-col px-40 relative">
            <div className="-z-10 bg-very-pale-blue dark:bg-very-dark-blue-topbg h-1/3 w-screen absolute top-0 left-0"></div>
            <div className="-z-20 bg-white dark:bg-very-dark-blue-bg h-screen w-screen absolute top-0 left-0"></div>
            <div className="pt-7 pb-9 flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-very-dark-blue dark:text-white">Social Media Dashboard</h1>
                    <p className="text-sm font-bold text-dark-grayish-blue dark:text-desaturated-blue">Total Followers 23,004</p>
                </div>
                <div className="flex items-center">
                    <span className="text-dark-grayish-blue dark:text-white font-bold text-sm px-4">Dark Mode</span>
                    <label class="switch">
                        <input type="checkbox" id="theme-toggle" onClick={(element) => {
                            console.log(element.target.checked)
                            if (!element.target.checked) {
                                document.documentElement.classList.remove('dark');
                                localStorage.setItem('color-theme', 'light');
                            } else {
                                document.documentElement.classList.add('dark');
                                localStorage.setItem('color-theme', 'dark');
                            }
                        }
                        } />
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <Followers social_accounts={social_accounts} />
            <h1 className="text-2xl font-bold pt-10 pb-5 text-dark-grayish-blue dark:text-white">Overview - Today</h1>
            <Overviews social_accounts={social_accounts} />
        </div>
    )
}

export default Dashboard;