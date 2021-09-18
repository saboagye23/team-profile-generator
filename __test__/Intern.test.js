const Intern = require('../lib/Intern')

test('Test Creating an Intern', () => {
    const intern = new Intern('Jared', 1, 'jared@fakeemail.com', 'Top University');

    expect(intern.getName()).toEqual('Jared');
    expect(intern.getId()).toEqual(1);
    expect(intern.getEmail()).toEqual('jared@fakeemail.com');
    expect(intern.getSchool()).toEqual('Top University');
    expect(intern.getRole()).toEqual('Intern');
});