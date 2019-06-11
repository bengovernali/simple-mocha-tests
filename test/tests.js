const chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');

const Users = require('../models/users.js');

describe('User Model Tests', async () => {
    //Check that a user can be found in a database
    it('should find a user in a database', async () => {
        const userInstance = new Users(null, null, null, 'johnduo@gmail.com', null);
        const theUser = await userInstance.getByEmail();
        console.log(theUser);
        expect(theUser.last_name).to.include('doe');
    });
    //Check the a user is an object
    it('should return an object', async () => {
        const userInstance = new Users(null, null, null, 'johnduo@gmail.com', null);
        const theUser = await userInstance.getByEmail();
        expect(theUser).to.be.an('object');
    });
    it('should NOT be undefined', async () => {
        const userInstance = new Users(null, null, null, 'johnduo@gmail.com', null);
        const theUser = await userInstance.getByEmail();
        expect(theUser).to.not.be.an('undefined');
    })
});