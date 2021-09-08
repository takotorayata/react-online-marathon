const combineFunctions = (...all) => x => all.reduce((a, b) => b(a), x);
