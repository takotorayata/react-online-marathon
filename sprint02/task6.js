const getLanguages = (...all) => all.reduce((a, b) => a.filter(b)).map((x) => x.languages).flat();
