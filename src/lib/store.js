import { writable } from "svelte/store";
import { browser } from "$app/environment";

const createDark = () => {
    if (browser) {
        const theme = localStorage.getItem("theme");
        let value;
        if (theme === "dark") {
            value = true;
        } else if (theme === "light") {
            value = false;
        } else {
            value = window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        document.body.classList.add(value ? "dark" : "light");
        const { subscribe, set, update } = writable(value);
        const setValue = (value) => {
            set(value);
            document.body.classList.remove(value ? "light" : "dark");
            document.body.classList.add(value ? "dark" : "light");
            localStorage.setItem("theme", value ? "dark" : "light");
        }
        const toggle = () => {
            update((value) => {
                setValue(!value);
                return !value;
            });
        }
        return {
            subscribe,
            set: setValue,
            toggle,
        };
    }
};
export const isDark = createDark();