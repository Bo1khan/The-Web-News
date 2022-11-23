"use strict";

class Theme {
   constructor(param) {
      const { checkbox, dark, light } = param;
      this.checkbox = document.querySelector(checkbox);
      this.dark = dark;
      this.light = light;

      this.listenters();
      this.init();
   }
   listenters() {
      const { checkbox } = this;
      checkbox.addEventListener('click', () => {
         this.setTheme();
      });
   }
   setTheme() {
      const { checkbox, dark, light } = this;

      if (checkbox.checked) {
         document.body.style = dark;
      } else {
         document.body.style = light;
      }

      localStorage.setItem('darkTheme', +checkbox.checked);
   }
   init() {
      const { checkbox } = this;
      checkbox.checked = +localStorage.getItem('darkTheme') ? true : false;
      this.setTheme();
   }
}

let dark = `--body: #3A3838;
--logo-light: none;
--logo-dark: inline-block;
--link: #EDEDED;
--link-hover: #EF4423;
--theme-bd: #EDEDED;
--toggle: #EDEDED;
--content-light: none;
--content-dark: inline-block;
--news: #B0ADAD;
--news-title: #EDEDED;
--news-subtitle: #3A3838;
--news-desc: #3A3838;
--footer: #B0ADAD;
--footer-link: #3A3838;`;
let light = `--body: #fff;
--logo-light: inline-block;
--logo-dark: none;
--link: #3A3838;
--link-hover: #EF4423;
--theme-bd: #3A3838;
--toggle: #3A3838;
--content-light: inline-block;
--content-dark: none;
--red: #B71C1C;
--violet: #6A1B9A;
--blue: #303F9F;
--green: #00695C;
--card-title: #fff;
--card-desc: #EBEBEB;
--news: #EDEDED;
--news-title: #3A3838;
--news-subtitle: #3A3838;
--news-desc: #686868;
--footer: #3A3838;
--footer-link: #FFFFFF;`;

const themeMode = new Theme({
   checkbox: '.check',
   dark,
   light
});