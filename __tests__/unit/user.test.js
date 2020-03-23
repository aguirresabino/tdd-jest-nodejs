const bcrypt = require('bcrypt');

const { User } = require('../../src/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Aguirre',
      email: 'aguirre@mail.com',
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);
  });

  it('should return empty array', async () => {
    const users = await User.findAll();

    expect(!users.length).toBe(true);
  });
});
