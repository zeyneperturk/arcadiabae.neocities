const entries = [
  {
    id: 1,
    title: "entry #1: how to find/use resources",
    preview: "for my first blog entry, i would like to share some resources and other stuff that helped me while building this site. these are mostly free resources, so anyone can use them!<br><br>",
    content: `hi! this is my first entry here. i put this website together as a hobby and for fun, and also... for educational purposes of course :). 
            i wanted to share a detailed post about everything that helped me while building this site so that everyone can learn and use these resources as well! hope you enjoy it and have fun building your own site :).
            if you have any questions or recommendations, <a href="./socials.html" target="_blank" rel="noopener noreferrer">feel free to reach out to me</a>!
            <br><br>
            <h4>about neocities</h4>
            neocities is a free web hosting service that allows you to create and host your own websites. it's a great platform for beginners and experienced developers alike. 
            however you are limited to developing static websites only (html, css, js) meaning no server-side code like php, python, etc. is allowed. 
            but for most personal websites, blogs, portfolios, etc. static sites are more than enough! at least for me :). 
            if you'd like to work on a dynamic website, you can check out other free hosting services like github pages, netlify, vercel, etc.
            <br><br>
            <h4>neocities supporters</h4>
            neocities is a free service, however there is also a supporter plan that offers additional features like more storage space, custom domains, etc.
            there is also a Cross Origin Resource Sharing (CORS) feature that allows you to load resources from other domains that are only offered to supporters.
            i'm especially stating this because the popular visitor count feature is currently only available to supporters due to CORS restrictions.
            if you are interested in supporting neocities and getting these additional features, you can check out their supporter plans <a href="https://neocities.org/supporter" target="_blank" rel="noopener noreferrer">here</a>.
            i have been a supporter for over a year now! i didn't cancel it even though i had been inactive for a looong time because i want to help keep neocities running and accessible to everyone!
            <br><br>
            <h4>html/css/js</h4>
            when building a static website, it's important to know the basics of html, css and javascript. they are the core technologies of the web.
            basically, html is used to structure content on a webpage, and css is used to style that content, and javascript is used to add interactivity and dynamic behavior.
            there are many resources available online to learn these technologies, including free tutorials, documentation, and courses.
            i personally learned all three during college so i didn't use any specific online resources. for this blog entry however, i took a look at some popular resources and my recommendation would be to follow W3Schools' tutorials, they are simple and covers everything you need to know to get started!
            here are the links to their tutorials: <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">html</a>, <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">css</a>, <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">javascript</a>
            my biggest advice would be to practice and experiment with what you learn. you can't really learn these stuff just by reading or watching tutorials!
            you don't have to write a music player, specific layouts, cursor animations or viewer count code by yourself. i will be adding information about these specific features below.
            <br><br>
            <h4>tips on coding</h4>
            personally, i use vs code as my code editor rather than neocities' built-in editor because i'm more comfortable with it as i use it for my school and my job as well lol.
            in vs code you can also use extensions such as live server to test your work. 
            then i upload my files to neocities using their web interface. however there was an issue i had noticed back when i first started using neocities: when you upload css files,
            your html files don't read them? i couldn't figure out why so i just put the css code inside a &lt;style&gt; tag in the html files instead. 
            to this day i still do this, but haven't checked if they fixed it, and probably won't...  anyway...
            on my pc all of the html/css/js files are separate because...
            i keep track of my changes using git and github, therefore it is way easier to upload them when i make an update.
            git is a version control system that allows you to track changes to your code over time. and github is a web-based platform that allows you to host and share your git repositories.
            of course you don't have to use git/github to work on neocities, its only a bonus. it's a whole another world too! you can see my neocities repo on github <a href="https://github.com/zeyneperturk/arcadiabae.neocities" target="_blank" rel="noopener noreferrer">here</a> if
            you're interested in my code and would like to see how i organize my files!
            <br><br>
            <h4>graphics, images and more</h4>
            all of my background images are life is strange in-game screenshots, you can find them on pinterst by searching <a href="https://www.pinterest.com/search/pins/?q=life%20is%20strange%20scenery" target="_blank" rel="noopener noreferrer">life is strange scenery</a>. i think you can try similar searches for other games too! 
            my main page background however belongs to emily is away, it was posted on twitter by the game's developer <a href="https://x.com/emerz35/status/866711839127871488" target="_blank" rel="noopener noreferrer">here</a>.
            the profile picture on my main page is mari from an official artwork of the game omori. you can find it on <a href="https://omori-game.com/gallery/" target="_blank" rel="noopener noreferrer">the game's wiki page here</a>.
            for other media i would recommend you to check out their wiki pages on fandom as well. they usually have a gallery section with official artworks and screenshots.
            pinterest may mislead you with fanarts sometimes. there are also tumblr accounts that share official artworks and screenshots, you can try searching for them on tumblr too!
            for instance here is <a href="https://genshinimpactresources.tumblr.com" target="_blank" rel="noopener noreferrer">genshin impact resources on tumblr</a>!
            the gifs you see around my site are called stamps/blinkies and they are from various source blogs across rentry, neocities and carrd. i collect them in my personal gif collection over time.
            some go inactive suddenly so i can't really share a specific source for them. the best way to explore them however is to search <a href="https://tr.pinterest.com/search/pins/?q=rentry%20resources&rs=rs&source_id=rs_B7BwWYdP&top_pin_ids=608830443418340818&eq=&etslf=3002" target="_blank" rel="noopener noreferrer">rentry resources on pinterest</a>!
            you'll see many pins linking to rentry blogs that share various resources including gifs, fonts, layouts, etc. you can also find various pngs and other graphics on these blogs as well. the icons (like the home button down there) is also from these resources.
            you can also find resources on tumblr by simply searching for <a href="https://www.tumblr.com/search/blinkies?src=typed_query" target="_blank" rel="noopener noreferrer">blinkies</a> or <a href="https://www.tumblr.com/search/stamps?src=typed_query" target="_blank" rel="noopener noreferrer">stamps</a>. there is something for everyone!
            <br><br>
            <h4>snippets / generators (do you really need to code everything by yourself?)</h4>
            i love personalizing my website as much as i can and coding stuff by myself, but sometimes i see something cool online and want to add it to my site! now obviously i don't go around and steal other people's code lol.
            there are many free for use code snippets and generators online that you can use to add cool features on your site without having to code everything by yourself.
            for instance, the music player on my site is a modified version of <a href="https://loveberry.nekoweb.org/resources/snippets" target="_blank" rel="noopener noreferrer">loveberry's windows music player</a> and so is <a href="https://loveberry.nekoweb.org/resources/box" target="_blank" rel="noopener noreferrer">the boxes</a> on blog's main page.
            for my cursor effect and some other cool stuff you can visit <a href="https://www.mf2fm.com/rv/" target="_blank" rel="noopener noreferrer">rv's free javascript/dhtml effects</a>.
            there are also css generators such as <a href="https://layout.bradwoods.io/customize" target="_blank" rel="noopener noreferrer">css layout generator</a> and <a href="https://webcode.tools/css-generator" target="_blank" rel="noopener noreferrer">web code tools</a>.
            i don't personally use them because i write css by myself, but these were the sources i've seen people recommend online. finally, the viewer count code is from <a href="https://netfriend.neocities.org/visitor-count/" target="_blank" rel="noopener noreferrer">netfriend's website helpers</a> and <a href="https://dannarchy.com/tut/tut_002" target="_blank" rel="noopener noreferrer">dannarchy</a>, these links also include detailed tutorials on how to implement it to your site.
            when you implement it, and if there is an error called CORS on the javascript console of the browser you use, it means that you need to be a neocities supporter to use it, as i mentioned earlier.
            <br><br>
            <h4>fonts, kaomojis and icons</h4>
            the font you see on my site is dudu calligraphy, you may recognize it from life is strange! at this point i'm sure you're not surprised at all lol. basically, there are built in fonts that you can use on your website without downloading any fonts. 
            these are called web safe fonts and you can find a list of them <a href="https://www.w3schools.com/cssref/css_websafe_fonts.asp" target="_blank" rel="noopener noreferrer">here</a>.
            these fonts can be used by simply specifying their name in your css file.
            however, if you want to use a custom font like i do, you can find many free fonts on websites like <a href="https://www.dafont.com" target="_blank" rel="noopener noreferrer">dafont where i downloaded dudu calligraphy</a>, <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer">google fonts</a> and <a href="https://www.1001fonts.com" target="_blank" rel="noopener noreferrer">1001 fonts</a>.
            for kaomojis (japanese emoticons, you can see one right below my visitor count in the main page), i use <a href="https://kaomoji.ru/en/" target="_blank" rel="noopener noreferrer">kaomoji.ru</a> and <a href="https://emojicombos.com/kaomoji" target="_blank" rel="noopener noreferrer">emojicombos</a>. they have a wide variety of kaomojis that you can easily copy and paste to your site.
            also, the icons in the navigator are from <a href="https://win98icons.alexmeub.com" target="_blank" rel="noopener noreferrer">windows 98 icon viewer</a> and the ones on my socials page are from <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">flaticon</a>.
            for the shopping section i either searched "... logo" on google or just went to their official website and downloaded the logo from there.
            <br><br>
            <h4>storing media online</h4>
            for my atabook layout, i needed a place to store images online that would allow me to hotlink them (use them on other websites). and also for my music player, i needed a place to store mp3 files that would allow me to hotlink them as well.
            you can use neocities to store media files as well, however there are storage limits depending on your plan. also i wanted to use a different domain for these media files for easier management. 
            i use <a href="https://catbox.moe" target="_blank" rel="noopener noreferrer">catbox.moe</a> for storing these files. it's a free file hosting service that allows you to upload and share files easily. when you upload a file, it gives you a direct link that you can use to hotlink the file on your website.
            <br><br>
            <h4>conclusion and final tips</h4>
            as you see there is a guestbook on my main page (feel free to leave a message hehe) that is on another website called <a href="https://atabook.org" target="_blank" rel="noopener noreferrer">atabook</a>. it's a free guestbook service that allows you to create and manage a guestbook for your website. 
            it's a fun addition and free to use as well! also you can customize its appearance. i use georgia as the font for mine and the icon is a sylvanian families png that you can find probably anywhere online. BUT the background image is called "tiled background". 
            tiled backgrounds are small images that repeat themselves to cover the entire background of a webpage or a section of a webpage. you can use them in both atabook and neocities.
            and i think it is better to use them because the page size don't affect the background's appearance in a weird way. if you use a single large image as a background, it may look stretched or pixelated on different screen sizes. 
            i recommend looking for them on tumblr or the rentry resources i mentioned earlier. they are also called pattern backgrounds sometimes. <a href="https://www.tumblr.com/search/tiled%20background?src=suggested_search" target="_blank" rel="noopener noreferrer">this</a> and <a href="https://www.tumblr.com/search/pattern%20background?src=typed_query" target="_blank" rel="noopener noreferrer">this</a> are the search links to tumblr.
            thank you for reading this long blog entry! i hope you found it helpful and informative. byee!
            `,
    date: "01.02.2026"
  }
];

window.entries = entries;