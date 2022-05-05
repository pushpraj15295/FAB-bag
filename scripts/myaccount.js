import { head } from "../components/head.js";
let header = document.getElementById("header");
header.innerHTML = head();

import { navbar } from "../components/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();