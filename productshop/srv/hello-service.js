module.exports = function () {

    this.on('sayHello', (req) => {

        const name = req.data.name || 'World';

        return `Hello ${name}! Welcome to SAP BTP`;

    });

};