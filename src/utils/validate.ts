/**
 * Created by jinjinjin on 18/08/30.
 */
export function isvalidUsername(str: any) {
    if (!str) {
        return '';
    }
    const valid = ['admin', 'editor'];
    return valid.indexOf(str.trim()) >= 0;
}
