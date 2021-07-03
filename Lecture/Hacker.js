async function hack() {

    for (let i = 1; i < 10000; i++) {
        console.log('Loading Script '+ i + " of 10000....");
        await sleep(1000);
        console.log('...');
        await sleep(500)
        console.log('Installation successful');
    }
    
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  hack();