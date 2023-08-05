const path = require("path");
const { i18n } = require("./next-i18next.config");

const withTM = require("next-transpile-modules")([
    "@fullcalendar/common",
    "@fullcalendar/react",
    "@fullcalendar/daygrid",
    "@fullcalendar/timegrid",
]);

module.exports = withTM({
    i18n,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
        prependData: `@import "_variables.scss";`
    }
});