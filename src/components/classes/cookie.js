export default {
    get: (name) => {
        var cookies = document.cookie.split(';');
        name = name + "=";
        for (var cookie of cookies) {
            cookie = cookie.replace(/^\s+/g, '');
            if (cookie.indexOf(name) == 0) {
                return cookie.substring(name.length);
            }
        }
        return undefined;
    },
    set: (name, cookie, age) => {
        var maxAge = age ? `;max-age=${age}`: "";
        document.cookie = `${name}=${cookie}${maxAge}`;
    }
};