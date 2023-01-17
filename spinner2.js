const spinner = () => {
  setInterval(() => {
    const spinnerArr = ['|','/','-','\\'];
    spinnerArr.forEach((spin,i) => {
      setTimeout(() => {
        process.stdout.write(`\r${spin}    `);
      }, 100 + i * 200);
    });
  }, 700);
};

spinner();

