export function deleteSapce(string) {
    return string.replace(/(^\s*)|(\s*$)/g, '');
}