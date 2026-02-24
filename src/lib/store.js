import { writable } from "svelte/store";
import { browser } from "$app/environment";

const createDark = () => {
    const { subscribe, set, update } = writable(false);
    const setValue = (value) => {
        set(value);
        if (!browser) {
            return;
        }
        document.body.classList.remove(value ? "light" : "dark");
        document.body.classList.add(value ? "dark" : "light");
        localStorage.setItem("theme", value ? "dark" : "light");
    };
    const toggle = () => {
        update((value) => {
            setValue(!value);
            return !value;
        });
    };

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
        set(value);
    }

    return {
        subscribe,
        set: setValue,
        toggle,
    };
};
export const isDark = createDark();
