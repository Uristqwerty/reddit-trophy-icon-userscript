# reddit-trophy-icon-userscript

This is a userscript that puts icons next to users' names on the old (non-redesign) desktop reddit, based on what trophies they had last time you viewed their user page.

Currently it's little better than an early prototype, because:
 * It stores gathered data in the localStorage associated with reddit.com, but in the long run I'm thinking of transitioning to IndexedDB
 * The current storage format is very verbose, listing the name and description of every trophy, rather than just the supported ones, much less using even shorter IDs
 * There is no automatic discovery (though when there is no data for a user, an icon is displayed indicating that fact, and clicking that icon fetches data), and deciding how to fetch data while accounting for API rate limits (especially if the user browsing or other scripts are also sharing the same quota) and filling the parts of the page the user is likely to see first.
 * Right now it only has username/id and trophies to go off of, though in the long run I'd like to have other data as well, such as if you've seen a post by that user in a specific subreddit (to keep data storage sane, the list of relevant subreddits would have to be pre-defined before any data is gathered)
 * The current icons are probably adequate for placeholders/prototypes, but I doubt I have the pactice to actually make decent images. On the positive side, everything was drawn from scratch, only using other images as reference and colour sources. So hopefully that helps keep the copyright situation simple
 * The code is ugly, awkward, and probably needs multiple iterations of cleanup and re-writing to reach a point where I could be happy with it. It's very much the product of jumping from feature to feature with little high-level planning or deduplication effort in between. There are fragments of architectural decisions that haven't been followed through on, helping to keep things convoluted.
 
 Currently included icons:
 * Spared/Snapped from r/thanosdidnothingwrong
 * Gilding I through IX, plus one for X and greater (shittiest art bonus!)
 * Gold since... months, with tiered icons for {1, 3, 6, 12, 24, 36, +}, as well as lounge charter member
 * And, as the first testing I-had-an-appropriate-icon-lying-around-already, "Is this user Uristqwerty?"
 
 ### Motivation
 Years ago, after the Robin april 1st event, someone made a script that would put icons next to peoples' names who were a part of the final large room (or it's two immediate ancestors). It's been neat occasionally seeing a random person with that icon on occasion, so I imagined having something similar for the recent TDNW event. With the (admittedly little) effort I put into finding a list of all involved users turning up nothing (though that was shortly afterward, and perhaps something has emerged since), I started idly thinking about how I might build a pair of lists myself. Ultimately, it seemed like way too much bulk-scanning through APIs to only get an approximate list to do anything more than automatically note data that I naturally came across while browsing. After weeks of sporadically imagining things, I very recently actually tried writing code, and in the process of producing this sort of went off-track from the original, limited purpose to something much more interesting.
 
 ### License
 Undecided. There's little point posting anything publicly if others *can't* freely redistribute unmodified versions, but it's been a while since I last looked into license details, so I'm not going to just slap a MIT license on it without thinking.
