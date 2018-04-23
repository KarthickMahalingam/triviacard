require 'rails_helper'
RSpec.describe User, type: :model do
  let(:user) { FactoryBot.create(:user) }

  describe 'user validation' do
    before do
      user
    end

    it 'should be valid user' do
      expect(user).to be_valid
    end

    it 'should have unique email' do
      user2 = build(:user, first_name: 'Tim')
      expect(user2).to_not be_valid
    end

    it 'should not be valid without password' do
      user2 = build(:user, encrypted_password: nil)
      expect(user2).to_not be_valid
    end

    it 'should not be valid without email' do
      user.email = nil
      expect(user).to_not be_valid
    end
  end
end