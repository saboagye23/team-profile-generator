const Engineer = require('../lib/Engineer')

test('Test Creating an Engineer', () => {
    const engineer = new Engineer('Jared', 1, 'jared@fakeemail.com', 'jared123');

    expect(engineer.getName()).toEqual('Jared');
    expect(engineer.getId()).toEqual(1);
    expect(engineer.getEmail()).toEqual('jared@fakeemail.com');
    expect(engineer.getGithub()).toEqual('jared123');
    expect(engineer.getRole()).toEqual('Engineer');
});