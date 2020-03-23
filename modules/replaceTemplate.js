
module.exports = (template, product) => {
    
    const { id, productName, from, image, nutrients, price, organic, quantity, description } = product;

    let output = template.replace(/{%PRODUCTNAME%}/g, productName);
    output = output.replace(/{%ID%}/g, id);
    output = output.replace(/{%FROM%}/g, from);
    output = output.replace(/{%NUTRIENTS%}/g, nutrients);
    output = output.replace(/{%IMAGE%}/g, image);
    output = output.replace(/{%QUANTITY%}/g, quantity);
    output = output.replace(/{%PRICE%}/g, price);
    output = output.replace(/{%DESCRIPTION%}/g, description);

    if (!organic) {
        output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    }

    return output;
}

