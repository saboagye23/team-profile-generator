const Manager = require('../lib/Manager')

test('Test Creating a Manager', () => {
    const manager = new Manager('Jared', 1, 'jared@fakeemail.com', 1232);

    expect(manager.getName()).toEqual('Jared');
    expect(manager.getId()).toEqual(1);
    expect(manager.getEmail()).toEqual('jared@fakeemail.com');
    expect(manager.getOfficeNumber()).toEqual(1232);
    expect(manager.getRole()).toEqual('Manager');
});