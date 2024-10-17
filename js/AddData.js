let Item = "";

function CardMaker(nameId, rank, name, symbol) {
  $(Item).html(`
        <div id=${nameId}>
        <p>${rank} - ${name} (${symbol})</p>
        </div>`);
  $(Item).appendTo();
}
