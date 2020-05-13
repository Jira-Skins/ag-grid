/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v23.1.1
 * @link http://www.ag-grid.com/
 * @license MIT
 */
import { padStart } from './number';
/**
 * Serialises a date to a string of format `yyyy-MM-dd`.
 * An alternative separator can be provided to be used instead of hyphens.
 */
export function serialiseDate(date, separator) {
    if (separator === void 0) { separator = '-'; }
    if (!date) {
        return null;
    }
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(function (part) { return padStart(part, 2); }).join(separator);
}
/**
 * Serialises a time to a string of format `HH:mm:ss`.
 */
export function serialiseTime(date) {
    if (!date) {
        return null;
    }
    return [date.getHours(), date.getMinutes(), date.getSeconds()].map(function (part) { return padStart(part, 2); }).join(':');
}
/**
 * Parses a date and time from a string in the format `yyyy-MM-dd HH:mm:ss`
 */
export function parseDateTimeFromString(value) {
    if (!value) {
        return null;
    }
    var _a = value.split(' '), dateStr = _a[0], timeStr = _a[1];
    if (!dateStr) {
        return null;
    }
    var fields = dateStr.split('-').map(function (f) { return parseInt(f, 10); });
    if (fields.filter(function (f) { return !isNaN(f); }).length !== 3) {
        return null;
    }
    var year = fields[0], month = fields[1], day = fields[2];
    var date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day) {
        // date was not parsed as expected so must have been invalid
        return null;
    }
    if (!timeStr || timeStr === '00:00:00') {
        return date;
    }
    var _b = timeStr.split(':').map(function (part) { return parseInt(part, 10); }), hours = _b[0], minutes = _b[1], seconds = _b[2];
    if (hours >= 0 && hours < 24) {
        date.setHours(hours);
    }
    if (minutes >= 0 && minutes < 60) {
        date.setMinutes(minutes);
    }
    if (seconds >= 0 && seconds < 60) {
        date.setSeconds(seconds);
    }
    return date;
}
