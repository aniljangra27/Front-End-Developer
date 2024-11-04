function splitParagraph(text, maxCharsPerParagraph) {
    const paragraphs = [];
    let currentParagraph = "";
    text.split(' ').forEach(word => {
      if (currentParagraph.length + word.length <= maxCharsPerParagraph) {
        currentParagraph += word + ' ';
      } else {
        paragraphs.push(currentParagraph.trim());
        currentParagraph = word + ' ';
      }
    });
  
    if (currentParagraph.trim()) {
      paragraphs.push(currentParagraph.trim());
    }
  
    return paragraphs;
  }
  
  // Assuming you have the text in a variable 'paragraphText'
  let paragraphText = "Only a few complications in Haute Horlogerie are as fascinating as the tourbillon. The whirlwind involves the balance wheel rotating around its axis in a cage. This not only provides a visual spectacle on the dial. The constant rotation reduces the influence of gravity on the oscillation system and increases the accuracy of the timepiece. The Portugieser Tourbillon Rétrograde Chronograph features a flying hacking minute tourbillon at 6 o'clock. Additionally, the model is equipped with a retrograde date display and a chronograph with flyback function. The special edition in a nautical design in dark blue and gold is limited to 50 pieces and available exclusively in IWC boutiques. The case is made of 18-carat Armor Gold®. Thanks to an improved microstructure, this material has significantly higher hardness values than traditional gold alloys. The blue dial, the gold-plated hands and appliqués in 18-carat gold further underscore the maritime character of this exclusive timepiece. The self-winding IWC-manufactured 89900 calibre boasts a power reserve of 68 hours. The pallet lever and escape wheel are treated with Diamond Shell® technology, which reduces friction and improves the flow of energy in the movement.";
  const paragraphs = splitParagraph(paragraphText, 100);
  console.log(paragraphs);
  // Render the paragraphs
//   const paragraphContainer = document.getElementById('paragraph-container');
//   paragraphs.forEach(paragraph => {
//     const p = document.createElement('p');
//     p.textContent = paragraph;
//     paragraphContainer.appendChild(p);
//   });