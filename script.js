// navbar
console.clear();

const menuDrawer = document.getElementById("menuDrawer");
const menuBtn = document.getElementById("menuBtn");
const menuIcon = document.getElementById("menuIcon");
const contentVeil = document.getElementById("contentVeil");
const menuItems = document.querySelectorAll(".menu-item");

const drawerTl = new TimelineLite({ paused: true });

const toggleVeil = () => TweenLite.set(contentVeil, {
  autoAlpha: drawerTl.reversed() ? 0 : 0.25 });


drawerTl.
call(toggleVeil).
to(menuDrawer, 0.25, {
  x: 0, ease: Power1.easeOut }).

to(menuBtn, 0.25, {
  x: 170, ease: Power1.easeOut },
0).
reverse();

const toggleDrawer = () => {
  drawerTl.reversed(!drawerTl.reversed());
  menuIcon.classList.toggle("fa-times");
};

menuBtn.onclick = toggleDrawer;

contentVeil.onclick = toggleDrawer;

menuItems.forEach(e => {
  e.onclick = toggleDrawer;
});
// end