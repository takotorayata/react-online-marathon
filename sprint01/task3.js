function longestLogin {
    return longestLogin.reduce((x, y) => x.length > y.length ? x : y;
}
