const Employee = require('../lib/Employee')

test('Test Creating an Employee', () => {
    const employee = new Employee('Jared', 1, 'jared@fakeemail.com');

    expect(employee.getName()).toEqual('Jared');
    expect(employee.getId()).toEqual(1);
    expect(employee.getEmail()).toEqual('jared@fakeemail.com');
});