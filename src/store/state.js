var defaultCity = '武汉';
try {
    defaultCity = localStorage.city || '武汉';
} catch(e) {}

export default {
    city: defaultCity
}