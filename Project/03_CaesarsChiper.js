function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const cipher = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    return str
      .split('')
      .map(e =>
        alphabet.indexOf(e) !== -1 ?cipher[alphabet.indexOf(e)]:e
  
      )
      .join('');
  }
  
  console.log(rot13('SERR PBQR PNZC'));
  