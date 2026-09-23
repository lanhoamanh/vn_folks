# VNfolks 👻

Hey! Welcome to **VNfolks**, a small website I built for a school project about Vietnamese folklore, urban legends, and ghost stories.

Growing up, my parents and grandparents told me all kinds of scary stories—like shadow spirits sitting on your chest (*Bóng Đè*), kids playing with a possessed tin can (*Ma Lon*), or water ghosts lurking near rivers (*Ma Da*). 

I wanted to make a site where people can read these stories, but also learn a bit about the science and history behind them! Like how *Bóng Đè* is actually connected to sleep paralysis, or how old eclipse myths came from people watching the sky.

Live demo: **[https://vnfolk.vercel.app/](https://vnfolk.vercel.app/)**

![Screenshot 1](./assets/screenshort1.png)
![Screenshot 2](./assets/screenshort2.png)

---

## What's on the website?

- **Home (`index.html`)**: A quick intro to the project.
- **Explore (`explore.html`)**: 6 main topics where folklore meets science (sleep paralysis, eclipses, animal omens, hungry ghost month, star myths, and Tết traditions).
- **Stories (`stories.html`)**: 9 famous Vietnamese ghost stories and legends.
- **About (`about.html`)**: A little bit about why I made this site.

---

## Cool features

- **Story Popups**: Click on any card to open a popup and read the full story. You can close it by clicking the X, clicking outside, or hitting `Esc`.
- **Category Filters**: On the Stories page, you can click buttons to filter stories by category.
- **Mobile Friendly**: Works on phones with a slide-out menu.

---

## How to run it locally

You don't need to install anything fancy!

1. Download or clone this folder:
   ```bash
   git clone https://github.com/lanhoamanh/vn_folks.git
   cd vn_folks
   ```
2. Just double-click `index.html` to open it in your web browser (Chrome, Edge, Firefox, etc.).

3. Or if you want to run a quick local server, open your terminal and type:
   ```bash
   python -m http.server 8000
   ```
   Then go to `http://localhost:8000` in your browser.

---

## Built with

- **HTML & CSS**: Page structure, flexbox/grid for cards, and simple color styles.
- **JavaScript**: Simple scripts for popups, filters, and mobile menu.
- **Google Fonts**: Creepster for title fonts, Garamond for story text.

Hope you enjoy reading the stories!
