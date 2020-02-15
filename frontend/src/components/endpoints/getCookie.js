
const getCookie = (tokenName) => {
    let cookieValue = '';
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');

        for (let cookie of cookies) {
            let cookieString = cookie.trim()
            if (cookieString.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookieString.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export default getCookie;
