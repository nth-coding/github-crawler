import { github, githubApi } from "./constant.js";

export function isValidGitRepo(str) {
    // https://github.com/mastodon/mastodon
    // still wrong at the link has ...-...-...
    return /^https:\/\/github.com\/\w+\/\w+$/.test(str);
}

export function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
};


export function getReleaseApi(source) {
    return `${githubApi}/repos${source.slice(github.length)}/releases`;
}